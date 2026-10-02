import React from 'react';
import {
  X,
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  Code2,
  FolderGit2,
  Award,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Globe
} from 'lucide-react';
import { soundFX } from '../utils/sound';

const LinkedinIcon = (props) => (
  <svg className={props.className || "w-3.5 h-3.5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg className={props.className || "w-3.5 h-3.5"} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownloadCV = () => {
    soundFX.playChime();
    // Create printable window or trigger download
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
      <div className="relative w-full max-w-3xl bg-[#5c0607] border border-white/20 rounded-3xl p-5 sm:p-8 shadow-2xl overflow-hidden font-sans text-white max-h-[90vh] flex flex-col">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono-tech text-amber-300 uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10">
                CURRICULUM VITAE
              </span>
              <span className="text-[10px] font-mono-tech text-white/50 uppercase tracking-widest">
                SRM EASWARI COLLEGE
              </span>
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white tracking-tight">
              DIVESH N
            </h2>
            <p className="text-xs text-white/70 font-mono-tech mt-1">
              B.Tech Artificial Intelligence & Data Science &bull; CGPA: 8.3
            </p>
          </div>

          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Contact & Social Links */}
        <div className="py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech text-white/80 shrink-0 bg-black/20 px-4 -mx-5 sm:-mx-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              +91 95662 33743
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              diveshn2007@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              Chennai, Tamil Nadu
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/divesh-n-01513b374/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/80 hover:text-amber-300 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/dvshh777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/80 hover:text-amber-300 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto space-y-6 pt-5 pr-2 custom-scrollbar flex-1">
          
          {/* Education Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-mono-tech text-xs uppercase tracking-wider font-semibold border-b border-white/10 pb-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="p-4 rounded-2xl bg-black/30 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-syne text-base font-bold text-white">SRM Easwari Engineering College</h4>
                <p className="text-xs text-amber-200 mt-0.5">B.Tech in Artificial Intelligence & Data Science</p>
              </div>
              <div className="text-left sm:text-right font-mono-tech text-xs">
                <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                  CGPA: 8.3
                </span>
                <p className="text-white/50 text-[11px] mt-1">2024 &mdash; 2028</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-mono-tech text-xs uppercase tracking-wider font-semibold border-b border-white/10 pb-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </div>
            <div className="p-4.5 rounded-2xl bg-black/30 border border-white/10 space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="font-syne text-base font-bold text-white">
                  Industrial Based Embedded System with AI & IoT Intern
                </h4>
                <span className="font-mono-tech text-xs text-amber-300/80">Jan 2026 &mdash; Feb 2026</span>
              </div>
              <p className="text-xs text-white/70 font-mono-tech font-medium">
                NSIC &ndash; National Small Industries Corporation
              </p>
              <ul className="text-xs text-white/75 space-y-1.5 list-disc list-inside leading-relaxed pl-1">
                <li>Gained hands-on exposure to embedded systems integrated with AI and IoT concepts.</li>
                <li>Worked with basic sensors, microcontrollers, and IoT architecture.</li>
                <li>Learned how data is collected from hardware devices and processed for intelligent decision-making.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-mono-tech text-xs uppercase tracking-wider font-semibold border-b border-white/10 pb-1.5">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-black/30 border border-white/10">
                <span className="text-[10px] font-mono-tech text-white/50 uppercase block mb-1">Programming Languages</span>
                <p className="text-white font-medium">Python, Java (Basics)</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/30 border border-white/10">
                <span className="text-[10px] font-mono-tech text-white/50 uppercase block mb-1">Web Technologies</span>
                <p className="text-white font-medium">HTML, CSS, JavaScript, React</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/30 border border-white/10">
                <span className="text-[10px] font-mono-tech text-white/50 uppercase block mb-1">Databases</span>
                <p className="text-white font-medium">MySQL</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/30 border border-white/10">
                <span className="text-[10px] font-mono-tech text-white/50 uppercase block mb-1">Tools & Platforms</span>
                <p className="text-white font-medium">Figma, Canva, VSCode</p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-mono-tech text-xs uppercase tracking-wider font-semibold border-b border-white/10 pb-1.5">
              <FolderGit2 className="w-4 h-4" />
              <span>Key Projects</span>
            </div>

            <div className="space-y-3">
              {/* Project 1 */}
              <div className="p-4 rounded-2xl bg-black/30 border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-syne text-sm font-bold text-white">
                    AXIS (Automated eXamination and Investigation System)
                  </h4>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">
                    Offline LLM
                  </span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Developed a fully offline AI-based cyber investigation platform that analyzes digital evidence securely without cloud exposure, combining regex-based parsing with a local LLM to generate actionable insights and legal-ready reports.
                </p>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-2xl bg-black/30 border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-syne text-sm font-bold text-white">
                    SkillSync AI &bull; Career Readiness Platform
                  </h4>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300">
                    AI Web App
                  </span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  An AI-powered web app that helps students become internship-ready by analyzing resumes and identifying skill gaps for target roles like Data Analyst or Developer. Provides personalized learning roadmaps, project suggestions, interview questions, and resume improvement insights.
                </p>
              </div>

              {/* Project 3 */}
              <div className="p-4 rounded-2xl bg-black/30 border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-syne text-sm font-bold text-white">
                    Customer Review Summarizer
                  </h4>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-sky-400/20 text-sky-300">
                    NLP & Sentiment Analysis
                  </span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  An AI-powered web application that analyzes large volumes of customer reviews and transforms them into concise, actionable insights. Automatically summarizes feedback, identifies key sentiments, highlights strengths and pain points, and helps businesses make data-driven decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-mono-tech text-xs uppercase tracking-wider font-semibold border-b border-white/10 pb-1.5">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-white">Applied AI &bull; AI Basics &bull; Azure Basics</p>
                  <p className="text-[11px] text-amber-300 font-mono-tech mt-0.5">Microsoft</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-white">Data Analytics Certification</p>
                  <p className="text-[11px] text-amber-300 font-mono-tech mt-0.5">Deloitte</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-white">Cloud Computing 101 &bull; Intro to GenAI &bull; ML Foundations</p>
                  <p className="text-[11px] text-amber-300 font-mono-tech mt-0.5">AWS (Amazon Web Services)</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-white">Python for Data Science &bull; AI & Machine Learning</p>
                  <p className="text-[11px] text-amber-300 font-mono-tech mt-0.5">Infosys SpringBoard</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start justify-between gap-2 sm:col-span-2">
                <div>
                  <p className="font-bold text-white">Python Essentials &bull; Networking Basics</p>
                  <p className="text-[11px] text-amber-300 font-mono-tech mt-0.5">CISCO</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between shrink-0">
          <span className="text-[10px] font-mono-tech text-white/50">
            DIVESH N &bull; RESUME 2026
          </span>
          <button
            onClick={handleDownloadCV}
            className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-neutral-100 transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <span>PRINT / DOWNLOAD CV</span>
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
