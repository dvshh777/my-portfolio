import React, { useEffect, useRef } from 'react';

export default function MagneticCursor({ telemetry }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const containerRef = useRef(null);

  const posRef = useRef({
    mouseX: -100,
    mouseY: -100,
    ringX: -100,
    ringY: -100,
    isHovered: false,
    inDeadzone: false,
  });

  // Keep telemetry deadzone status updated in ref without causing re-renders
  useEffect(() => {
    posRef.current.inDeadzone = !!telemetry?.inDeadzone;
  }, [telemetry?.inDeadzone]);

  useEffect(() => {
    let rafId;

    const updateHoverState = (target) => {
      if (!target) return false;
      return !!(
        target.closest &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer') ||
          target.closest('.interactive-target'))
      );
    };

    const applyStyles = () => {
      const p = posRef.current;
      const ringEl = ringRef.current?.firstElementChild;
      const dotEl = dotRef.current?.firstElementChild;

      if (ringEl) {
        if (p.isHovered) {
          ringEl.className =
            'rounded-full border transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out flex items-center justify-center w-14 h-14 border-white/80 bg-white/15 backdrop-blur-[2px] shadow-[0_0_24px_rgba(255,255,255,0.4)]';
        } else if (p.inDeadzone) {
          ringEl.className =
            'rounded-full border transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out flex items-center justify-center w-12 h-12 border-amber-300/90 bg-amber-300/10 shadow-[0_0_24px_rgba(245,212,133,0.5)]';
        } else {
          ringEl.className =
            'rounded-full border transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out flex items-center justify-center w-9 h-9 border-white/50 bg-white/[0.04] shadow-[0_0_12px_rgba(255,255,255,0.15)]';
        }
      }

      if (dotEl) {
        if (p.isHovered) {
          dotEl.className =
            'transition-[transform,opacity] duration-150 scale-125';
        } else if (p.inDeadzone) {
          dotEl.className =
            'transition-[transform,opacity] duration-150 scale-110';
        } else {
          dotEl.className =
            'transition-[transform,opacity] duration-150 scale-100';
        }
      }
    };

    const handlePointerUpdate = (e) => {
      const p = posRef.current;
      p.mouseX = e.clientX;
      p.mouseY = e.clientY;

      if (containerRef.current && containerRef.current.style.opacity !== '1') {
        containerRef.current.style.opacity = '1';
      }

      const hovered = updateHoverState(e.target);
      if (p.isHovered !== hovered) {
        p.isHovered = hovered;
        applyStyles();
      }
    };

    const handlePointerLeave = (e) => {
      if (
        e.clientX <= 0 ||
        e.clientY <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        if (containerRef.current) {
          containerRef.current.style.opacity = '0';
        }
      }
    };

    window.addEventListener('pointermove', handlePointerUpdate, { passive: true, capture: true });
    window.addEventListener('mousemove', handlePointerUpdate, { passive: true, capture: true });
    document.addEventListener('pointermove', handlePointerUpdate, { passive: true, capture: true });
    document.addEventListener('mousemove', handlePointerUpdate, { passive: true, capture: true });
    document.addEventListener('mouseleave', handlePointerLeave, { capture: true });

    let lastDeadzone = posRef.current.inDeadzone;

    const animate = () => {
      const p = posRef.current;

      if (p.inDeadzone !== lastDeadzone) {
        lastDeadzone = p.inDeadzone;
        applyStyles();
      }

      if (p.mouseX !== -100) {
        if (p.ringX === -100) {
          p.ringX = p.mouseX;
          p.ringY = p.mouseY;
        } else {
          p.ringX += (p.mouseX - p.ringX) * 0.22;
          p.ringY += (p.mouseY - p.ringY) * 0.22;
        }

        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${p.mouseX}px, ${p.mouseY}px, 0)`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${p.ringX}px, ${p.ringY}px, 0)`;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerUpdate, { capture: true });
      window.removeEventListener('mousemove', handlePointerUpdate, { capture: true });
      document.removeEventListener('pointermove', handlePointerUpdate, { capture: true });
      document.removeEventListener('mousemove', handlePointerUpdate, { capture: true });
      document.removeEventListener('mouseleave', handlePointerLeave, { capture: true });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none transition-opacity duration-150 opacity-100"
    >
      {/* Smooth Trailing Aura Ring */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none"
      >
        <div className="rounded-full border transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out flex items-center justify-center w-9 h-9 border-white/50 bg-white/[0.04] shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
      </div>

      {/* SVG Custom Follow-Me Precision Cursor Dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none"
      >
        <div className="transition-[transform,opacity] duration-150 scale-100 flex items-center justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          >
            {/* Center precision dot */}
            <circle cx="9" cy="9" r="3.5" fill="#FFFFFF" />
            {/* Outer subtle halo ring */}
            <circle cx="9" cy="9" r="7.5" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
