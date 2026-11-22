import React, { useState } from 'react';
import { motion } from 'motion/react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';
import { MultiverseWebVisual } from './SpiderIllustrations';

export const JourneySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const activeMilestone = JOURNEY_MILESTONES[activeIndex] ?? JOURNEY_MILESTONES[0];

  return (
    <section id="journey" className="py-16 sm:py-20 bg-[#0B1120] border-y border-slate-800/90">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-[#F43F5E] mb-2">Origin Story</p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 mb-3"
            style={{ textWrap: 'balance' }}
          >
            My Learning Journey
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            From visual editing and composition to writing Python and exploring AI/ML at GLA
            University. Select any chapter to rotate the Spider-Tech Chrono Compass.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Interactive Timeline Steps */}
          <div className="lg:col-span-7 space-y-4">
            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <motion.button
                  key={milestone.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                    isSelected
                      ? 'bg-[#111A2E] border-[#38BDF8]/70 shadow-sm'
                      : 'bg-[#0D1424] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span
                        className={`font-semibold ${
                          isSelected ? 'text-[#F43F5E]' : 'text-slate-200'
                        }`}
                      >
                        {milestone.eraLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{milestone.place}</span>
                    </div>
                    <span className="font-mono text-xs font-semibold tabular-nums text-[#38BDF8]">
                      {milestone.year}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-50 mb-2">
                    {milestone.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    {milestone.description}
                  </p>

                  <p className="text-xs font-medium text-slate-400">
                    Focus: <span className="text-slate-200">{milestone.focus}</span>
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Interactive Spider-Tech Multiverse Compass Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-[#111A2E] rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col items-center text-center">
            <MultiverseWebVisual
              activeIndex={activeIndex}
              totalSteps={JOURNEY_MILESTONES.length}
              activeYear={activeMilestone.year}
            />

            <div className="mt-4 pt-5 border-t border-slate-800 w-full">
              <p className="text-xs font-medium text-[#F43F5E] mb-1">
                {activeMilestone.eraLabel} · {activeMilestone.year}
              </p>
              <h4 className="font-display text-lg font-bold text-slate-50 mb-1.5">
                {activeMilestone.title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeMilestone.place}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
