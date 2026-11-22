/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GallerySection } from './components/GallerySection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { BackToTopButton } from './components/BackToTopButton';
import { PROFILE } from './data/portfolioData';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#070B14] text-slate-100">
        <Navbar />

        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <GallerySection />
          <JourneySection />
          <ContactSection />
        </main>

        <footer className="bg-[#0B1120] border-t border-slate-800/90 py-8">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              <span className="font-semibold text-slate-100">{PROFILE.name}</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span>{PROFILE.degree}</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span>{PROFILE.university}</span>
            </p>
            <div className="flex items-center gap-5">
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
              <a href="#gallery" className="hover:text-white transition-colors">
                Gallery
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>

        <BackToTopButton />
      </div>
    </MotionConfig>
  );
}
