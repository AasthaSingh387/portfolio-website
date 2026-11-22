import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers } from 'lucide-react';
import { PROFILE, UTILITY_NOTES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeNoteId, setActiveNoteId] = useState<string>(UTILITY_NOTES[0].id);
  const activeNote =
    UTILITY_NOTES.find((note) => note.id === activeNoteId) ?? UTILITY_NOTES[0];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#0B1120] border-y border-slate-800/90">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narrative Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="text-sm font-medium text-[#F43F5E] mb-2">About Me</p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 mb-5"
              style={{ textWrap: 'balance' }}
            >
              Curious Mind in Engineering, AI, and Visual Editing
            </h2>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed max-w-[62ch] tracking-[0.005em]">
              <p>{PROFILE.aboutSummary}</p>
              <p>{PROFILE.aboutSecondary}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
              <div>
                <span className="text-slate-400">University: </span>
                <span className="font-medium text-slate-100">{PROFILE.university}</span>
              </div>
              <div>
                <span className="text-slate-400">Location: </span>
                <span className="font-medium text-slate-100">{PROFILE.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Spider-Tech Gadget Card: "A Little About Me" */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#111A2E] rounded-2xl border border-slate-800 p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-medium text-[#38BDF8] mb-1">
                  Interactive Spider-Tech Kit
                </p>
                <h3 className="font-display text-2xl font-bold text-slate-50">
                  A Little About Me
                </h3>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#070B14] border border-slate-700 text-white flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-[#F43F5E]" />
              </div>
            </div>

            {/* Interactive Gadget Selector Tabs */}
            <div
              role="tablist"
              aria-label="Select a Spider-Tech insight"
              className="flex flex-wrap gap-1.5 p-1 bg-[#070B14] border border-slate-800 rounded-xl mb-6"
            >
              {UTILITY_NOTES.map((note) => {
                const isActive = note.id === activeNoteId;
                return (
                  <button
                    key={note.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveNoteId(note.id)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                      isActive
                        ? 'bg-[#E11D48] text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                    }`}
                  >
                    {note.gadgetName}
                  </button>
                );
              })}
            </div>

            {/* Active Note Content */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                <span className="text-[#38BDF8] font-semibold">{activeNote.gadgetName}</span>
                <span aria-hidden="true">·</span>
                <span>{activeNote.highlight}</span>
              </div>
              <h4 className="font-display text-xl font-bold text-slate-50">
                {activeNote.title}
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed tracking-[0.005em]">
                {activeNote.summary}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
