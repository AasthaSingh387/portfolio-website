import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';
import { HERO_METRICS, PROFILE } from '../data/portfolioData';
import { HERO_GADGETS, SpiderHeroCharacter } from './SpiderIllustrations';

export const HeroSection: React.FC = () => {
  const [activeGadgetId, setActiveGadgetId] = useState<string>(HERO_GADGETS[0].id);
  const activeGadget =
    HERO_GADGETS.find((g) => g.id === activeGadgetId) ?? HERO_GADGETS[0];

  return (
    <section
      id="top"
      className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden spidy-hud-grid"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-sm font-medium text-[#38BDF8] mb-3 tracking-wide">
              {PROFILE.degree} <span aria-hidden="true">·</span> {PROFILE.university}
            </p>

            <h1
              className="font-display font-bold tracking-tight text-slate-50 leading-[1.08] mb-4"
              style={{
                fontSize: 'clamp(2.35rem, 4.4vw, 3.85rem)',
                textWrap: 'balance',
              }}
            >
              Hi, I&apos;m {PROFILE.name}
            </h1>

            <p className="font-display text-lg sm:text-xl font-semibold text-slate-300 mb-5">
              {PROFILE.role}
            </p>

            <p className="text-base text-slate-300/90 leading-relaxed max-w-[60ch] mb-8 tracking-[0.005em]">
              {PROFILE.heroIntro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#E11D48] rounded-xl hover:bg-[#BE123C] shadow-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14] focus-visible:ring-[#F43F5E]"
              >
                <span>Explore My Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-100 bg-[#111A2E] border border-slate-700 rounded-xl hover:border-[#38BDF8] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14] focus-visible:ring-[#38BDF8]"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dark Technical Spider-Man Character & Interactive Gadgets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between bg-[#0D1424] rounded-2xl border border-slate-800 p-6"
          >
            <SpiderHeroCharacter
              activeGadgetId={activeGadgetId}
              onSelectGadget={setActiveGadgetId}
            />

            {/* Interactive Gadget Readout Bar */}
            <div className="mt-4 pt-4 border-t border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <Compass className="w-3.5 h-3.5 text-[#F43F5E]" />
                  <span>Spider-Tech HUD</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-100 font-semibold">{activeGadget.name}</span>
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  {HERO_GADGETS.map((gadget) => (
                    <button
                      key={gadget.id}
                      type="button"
                      onClick={() => setActiveGadgetId(gadget.id)}
                      className={`px-2 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                        activeGadgetId === gadget.id
                          ? 'bg-[#1E293B] text-[#38BDF8]'
                          : 'text-slate-400 hover:text-slate-100'
                      }`}
                    >
                      {gadget.name}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-snug">
                <span className="font-semibold text-white">{activeGadget.shortRole}: </span>
                {activeGadget.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Editorial Highlight Strip Below Split */}
        <div className="mt-10 pt-8 border-t border-slate-800/90 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {HERO_METRICS.map((item) => (
            <div key={item.label}>
              <p className="text-xs font-medium text-slate-400 mb-1">{item.label}</p>
              <p className="text-sm sm:text-base font-semibold text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
