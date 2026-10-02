import React, { useState } from 'react';
import { ArrowUpRight, Award, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { soundFX } from '../utils/sound';

const PROJECTS = [
  {
    id: '01',
    title: 'AXIS (Automated eXamination & Investigation System)',
    client: 'CYBER FORENSICS & OFFLINE LLM',
    category: 'Local LLM & Regex Analysis',
    year: '2026',
    awards: 'Fully Offline AI Platform',
    summary: 'Analyzes digital evidence securely without cloud exposure, combining regex-based parsing with a local LLM to generate actionable investigation reports.',
    link: 'https://github.com/dvshh777',
  },
  {
    id: '02',
    title: 'SkillSync AI',
    client: 'CAREER READINESS PLATFORM',
    category: 'Full Stack AI Web App',
    year: '2026',
    awards: 'AI Career Guidance Engine',
    summary: 'Analyzes resumes and identifies skill gaps for roles like Data Analyst or Developer, generating personalized learning roadmaps, project suggestions, and interview questions.',
    link: 'https://github.com/dvshh777',
  },
  {
    id: '03',
    title: 'Customer Review Summarizer',
    client: 'CUSTOMER INSIGHTS & NLP',
    category: 'Natural Language Processing',
    year: '2026',
    awards: 'Sentiment & Insight Engine',
    summary: 'Transforms large volumes of customer feedback into concise, actionable insights, automatically identifying sentiments, strengths, and pain points.',
    link: 'https://github.com/dvshh777',
  },
  {
    id: '04',
    title: 'AI & IoT Embedded Systems',
    client: 'NSIC INTERNSHIP',
    category: 'Microcontrollers & Sensors',
    year: '2026',
    awards: 'Hardware & AI Pipeline',
    summary: 'Built embedded systems integrated with AI and IoT concepts, collecting real-time sensor data for intelligent automated decision-making.',
    link: 'https://github.com/dvshh777',
  },
];

export default function SelectedWorks() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="works" className="relative py-28 px-6 sm:px-10 z-20 border-t border-white/10 luxury-bg-gradient">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-gold-accent mb-3">
              <Layers className="w-4 h-4" />
              <span>FEATURED PROJECTS &bull; DIVESH N</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase">
              SELECTED PROJECTS
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md font-sans leading-relaxed">
            AI & Data Science solutions spanning offline local LLMs, career readiness analytics, sentiment processing, and embedded AI & IoT systems.
          </p>
        </div>

        {/* Project List */}
        <div className="divide-y divide-white/10">
          {PROJECTS.map((proj, idx) => (
            <a
              key={proj.id}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => {
                soundFX.playClick();
                setActiveProject(idx);
              }}
              className="group py-8 sm:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer transition-colors duration-300 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl block"
            >
              <div className="flex items-baseline gap-6 max-w-2xl">
                <span className="font-mono-tech text-xs sm:text-sm text-white/40 group-hover:text-gold-accent transition-colors shrink-0">
                  {proj.id}
                </span>
                <div>
                  <h3 className="font-syne text-xl sm:text-3xl font-bold text-white group-hover:text-gold-accent transition-colors flex items-center gap-3">
                    <span>{proj.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-gold-accent shrink-0" />
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs font-mono-tech text-white/60">
                    <span>{proj.client}</span>
                    <span>&bull;</span>
                    <span className="text-white/40">{proj.category}</span>
                  </div>
                </div>
              </div>

              <div className="lg:max-w-md flex flex-col lg:items-end gap-2">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono-tech text-amber-300 w-fit">
                  <Award className="w-3.5 h-3.5 text-gold-accent" />
                  <span>{proj.awards}</span>
                </div>
                <p className="text-xs text-white/50 lg:text-right font-sans leading-relaxed">
                  {proj.summary}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Academic & Professional Stats */}
        <div id="recognition" className="mt-24 pt-12 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center font-mono-tech">
          <div className="glass-panel p-6 rounded-2xl">
            <div className="font-syne text-3xl sm:text-4xl font-bold text-gold-accent mb-1">8.3</div>
            <div className="text-[11px] text-white/50 uppercase tracking-wider">SRM Easwari CGPA</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl">
            <div className="font-syne text-3xl sm:text-4xl font-bold text-white mb-1">03</div>
            <div className="text-[11px] text-white/50 uppercase tracking-wider">AI & Web Platforms</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl">
            <div className="font-syne text-3xl sm:text-4xl font-bold text-gold-accent mb-1">05+</div>
            <div className="text-[11px] text-white/50 uppercase tracking-wider">Industry Certifications</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl">
            <div className="font-syne text-3xl sm:text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-[11px] text-white/50 uppercase tracking-wider">Offline AI Investigation</div>
          </div>
        </div>

      </div>
    </section>
  );
}
