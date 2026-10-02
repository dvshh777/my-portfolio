import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function HeroTypography({ onTalkClick, onResumeClick }) {
  return (
    <div className="absolute left-6 sm:left-12 lg:left-16 bottom-10 sm:bottom-14 z-20 max-w-[380px] pointer-events-auto flex flex-col items-start select-none">
      
      {/* "Hi, I'm" */}
      <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-white/80 font-medium mb-1 hero-text-shadow">
        Hi, I'm
      </span>

      {/* Name with applied focus mode styling */}
      <h1
        className="text-white font-bold leading-none mb-3 cursive-shadow"
        style={{ fontFamily: 'Verdana, sans-serif', fontSize: '63px' }}
      >
        Divesh N
      </h1>

      {/* Bio matching resume */}
      <p className="max-w-[360px] text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6 hero-text-shadow">
        B.Tech AI & Data Science student building intelligent offline LLM systems, career-readiness AI platforms, and full-stack web applications.
      </p>

      {/* Action buttons */}
      <div className="flex items-center gap-3 w-full">
        {/* Resume Button */}
        <button
          onClick={() => {
            soundFX.playClick();
            if (onResumeClick) onResumeClick();
          }}
          className="group px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-white/20"
        >
          <span>View Resume</span>
          <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
        </button>

        {/* Let's Talk Button */}
        <button
          onClick={() => {
            soundFX.playChime();
            if (onTalkClick) onTalkClick();
          }}
          className="px-6 py-2.5 rounded-full bg-white/10 border border-white/40 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-md hover:bg-white/20 hover:border-white hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          Let's Talk
        </button>
      </div>

    </div>
  );
}
