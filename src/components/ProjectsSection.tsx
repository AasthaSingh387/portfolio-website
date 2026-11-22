import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Code2, ExternalLink, X } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#0B1120] border-y border-slate-800/90">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#F43F5E] mb-2">Selected Work</p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 mb-3"
              style={{ textWrap: 'balance' }}
            >
              My Projects
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Concept builds and practical web experiments exploring student productivity,
              clean UI systems, and Python utilities.
            </p>
          </div>
          <p className="text-xs font-medium text-slate-400 whitespace-nowrap">
            {PROJECTS.length} Featured Concepts · Easily Customizable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((project, index) => {
            const hasFailed = failedImages[project.id];
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col bg-[#111A2E] rounded-2xl border border-slate-800 overflow-hidden hover:border-[#38BDF8]/50 transition-colors duration-200"
              >
                {/* Project Preview Image with Resilient Fallback */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                  {!hasFailed ? (
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} preview`}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                      }
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#070B14] via-[#1E3A8A] to-[#BE123C] text-white text-center">
                      <Code2 className="w-8 h-8 mb-2 opacity-90" />
                      <span className="font-display text-sm font-semibold">{project.title}</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-[#38BDF8] font-medium">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{project.year}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-50 mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5 flex-1">
                    {project.shortDescription}
                  </p>

                  {/* Technologies as clean unboxed metadata */}
                  <div className="text-xs font-medium text-slate-400 mb-5 flex flex-wrap items-center gap-x-2 gap-y-1">
                    {project.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-200">{tech}</span>
                        {idx < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-[#1E293B] border border-slate-700 rounded-xl hover:bg-[#E11D48] hover:border-[#E11D48] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111A2E] focus-visible:ring-[#F43F5E]"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0D1424] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#070B14]/90 text-slate-100 border border-slate-700 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F43F5E]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[16/9] w-full bg-slate-900 border-b border-slate-800">
              {!failedImages[selectedProject.id] ? (
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#070B14] via-[#1E3A8A] to-[#BE123C] text-white">
                  <span className="font-display text-lg font-semibold">
                    {selectedProject.title}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <span className="text-[#38BDF8] font-medium">{selectedProject.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{selectedProject.year}</span>
              </div>

              <h3
                id="project-modal-title"
                className="font-display text-2xl font-bold text-slate-50 mb-3"
              >
                {selectedProject.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-100 mb-2.5">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F43F5E] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-medium text-slate-400">
                  Stack: <span className="text-slate-200">{selectedProject.technologies.join(' · ')}</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Source Code</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#E11D48] rounded-lg hover:bg-[#BE123C] transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
