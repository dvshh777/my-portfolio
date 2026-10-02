import React, { useState, useCallback } from 'react';
import FrostedHeader from './components/FrostedHeader';
import CharacterCanvas from './components/CharacterCanvas';
import HeroTypography from './components/HeroTypography';
import MagneticCursor from './components/MagneticCursor';
import HudWidget from './components/HudWidget';
import InteractiveControls from './components/InteractiveControls';
import SelectedWorks from './components/SelectedWorks';
import Preloader from './components/Preloader';
import TechnicalSpecsModal from './components/TechnicalSpecsModal';
import ContactModal from './components/ContactModal';
import ResumeModal from './components/ResumeModal';
import { soundFX } from './utils/sound';

export default function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [telemetry, setTelemetry] = useState(null);
  const [autoOrbit, setAutoOrbit] = useState(false);
  const [forceAngle, setForceAngle] = useState(null);
  const [deadzoneRadiusRatio, setDeadzoneRadiusRatio] = useState(0.12);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isHudExpanded, setIsHudExpanded] = useState(false);

  const handleSnapDirection = useCallback((angle) => {
    setForceAngle(angle);
    if (angle !== null) {
      setTimeout(() => {
        setForceAngle(null);
      }, 2200);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#940c0d] luxury-bg-gradient text-white selection:bg-white selection:text-black">
      
      {/* Preloader with WebP Frame Extraction Caching */}
      <Preloader progress={loadingProgress} isReady={isReady} />

      {/* Custom Magnetic Cursor: Glowing white dot with smooth trailing aura ring */}
      <MagneticCursor telemetry={telemetry} />

      {/* Floating Frosted-Glass Navigation Pill Centered at Very Top */}
      <FrostedHeader
        onContactClick={() => setIsContactOpen(true)}
        onAboutClick={() => setIsSpecsOpen(true)}
      />

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative w-screen h-screen min-h-[640px] flex items-center justify-center overflow-hidden select-none"
      >
        {/* Subtle Film Grain Texture Overlay */}
        <div className="absolute inset-0 film-grain pointer-events-none z-10" />

        {/* FULL SCREEN ZERO-GHOSTING 60 FPS CANVAS (100vw, 100vh, object-fit: cover) */}
        <div className="absolute inset-0 w-screen h-screen pointer-events-none z-0">
          <CharacterCanvas
            onProgress={setLoadingProgress}
            onLoaded={() => setIsReady(true)}
            onTelemetry={setTelemetry}
            deadzoneRadiusRatio={deadzoneRadiusRatio}
            autoOrbit={autoOrbit}
            forceAngle={forceAngle}
          />
        </div>

        {/* HERO TYPOGRAPHY (BOTTOM-LEFT) */}
        <HeroTypography
          onTalkClick={() => setIsContactOpen(true)}
          onResumeClick={() => setIsResumeOpen(true)}
        />





      </section>

      {/* SELECTED WORKS SECTION */}
      <SelectedWorks />

      {/* FOOTER */}
      <footer id="contact" className="relative py-16 px-6 sm:px-12 border-t border-white/10 bg-black/40 z-20 font-mono-tech select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-white/60">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="font-cursive text-3xl font-bold text-white tracking-wide">
              Divesh N
            </span>
            <span className="text-[11px] text-white/40 uppercase">
              AI &amp; DATA SCIENCE ENGINEER &bull; SRM EASWARI COLLEGE &copy; 2026
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider pointer-events-auto">
            <button
              onClick={() => {
                soundFX.playClick();
                setIsSpecsOpen(true);
              }}
              className="hover:text-gold-accent transition-colors"
            >
              TECH SPECS
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                setIsResumeOpen(true);
              }}
              className="hover:text-gold-accent transition-colors"
            >
              RESUME
            </button>
            <button
              onClick={() => {
                soundFX.playChime();
                setIsContactOpen(true);
              }}
              className="hover:text-gold-accent transition-colors"
            >
              LET'S TALK
            </button>
            <a
              href="#hero"
              onClick={() => soundFX.playClick()}
              className="hover:text-white text-gold-accent transition-colors"
            >
              TOP &uarr;
            </a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TechnicalSpecsModal
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
