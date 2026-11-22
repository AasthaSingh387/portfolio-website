import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../data/portfolioData';
import { SkillGadgetIcon } from './SpiderIllustrations';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#070B14]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-[#38BDF8] mb-2">Skills &amp; Toolkit</p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 mb-3"
            style={{ textWrap: 'balance' }}
          >
            Core Technologies and Creative Strengths
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Every skill in my toolkit pairs foundational engineering logic with sharp visual
            editing and clear communication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.article
              key={skill.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-[#0D1424] rounded-2xl border border-slate-800 p-6 hover:border-[#38BDF8]/50 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="p-2 rounded-xl bg-[#070B14] border border-slate-800 group-hover:scale-105 transition-transform duration-200">
                  <SkillGadgetIcon skillId={skill.id} />
                </div>
                <span className="text-xs font-medium text-slate-400">
                  {skill.category}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-50 mb-1.5">
                {skill.name}
              </h3>

              <p className="text-xs font-medium text-[#F43F5E] mb-3">
                Inspired by {skill.gadgetInspiration}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {skill.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
