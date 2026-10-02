import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'Project Inquiry / Collaboration', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFX.playChime();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#5c0607] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl font-mono-tech text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <span className="text-[10px] text-amber-300 uppercase tracking-widest block mb-1">
              GET IN TOUCH
            </span>
            <h3 className="font-syne text-2xl font-bold text-white tracking-tight uppercase">
              CONTACT DIVESH N
            </h3>
          </div>
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Direct Contact Info Pills */}
        <div className="p-3.5 rounded-2xl bg-black/30 border border-white/10 mb-5 flex flex-col gap-2 text-xs font-mono-tech">
          <a
            href="mailto:diveshn2007@gmail.com"
            className="flex items-center gap-2 text-amber-300 hover:underline"
          >
            <Mail className="w-4 h-4 shrink-0 text-amber-400" />
            <span>diveshn2007@gmail.com</span>
          </a>
          <a
            href="tel:+919566233743"
            className="flex items-center gap-2 text-white/80 hover:text-white"
          >
            <Phone className="w-4 h-4 shrink-0 text-amber-400" />
            <span>+91 95662 33743</span>
          </a>
          <div className="flex items-center gap-2 text-white/60">
            <MapPin className="w-4 h-4 shrink-0 text-amber-400" />
            <span>Chennai, Tamil Nadu</span>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-300" />
            </div>
            <h4 className="font-syne text-xl text-white font-bold mb-2">MESSAGE SENT</h4>
            <p className="text-xs text-white/70 font-sans max-w-xs">
              Thank you for reaching out. Divesh will review your message and reply promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[10px] text-white/60 uppercase tracking-wider mb-1.5">
                YOUR NAME / ORGANIZATION
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Alex Rivera"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-[10px] text-white/60 uppercase tracking-wider mb-1.5">
                YOUR EMAIL
              </label>
              <input
                required
                type="email"
                placeholder="your.email@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-[10px] text-white/60 uppercase tracking-wider mb-1.5">
                MESSAGE / PROJECT INQUIRY
              </label>
              <textarea
                rows="3"
                required
                placeholder="Describe your project, collaboration opportunity, or inquiry..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span>SEND MESSAGE</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
