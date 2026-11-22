import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Expand, Image as ImageIcon, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryCategory, GalleryItem } from '../data/portfolioData';

const FILTER_TABS: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'posters', label: 'Posters' },
  { id: 'social', label: 'Social Media' },
  { id: 'creative', label: 'Creative Art' },
];

const VectorGalleryArtwork: React.FC<{ variant: GalleryItem['artworkVariant'] }> = ({
  variant,
}) => {
  if (variant === 'hackathon-poster') {
    return (
      <svg
        viewBox="0 0 360 460"
        className="w-full h-full block"
        role="img"
        aria-label="Code and Create Hackathon Poster graphic"
      >
        <rect width="360" height="460" fill="#070B14" />
        <circle cx="300" cy="80" r="110" fill="#1D4ED8" opacity="0.85" />
        <circle cx="70" cy="390" r="120" fill="#E11D48" opacity="0.88" />
        <g stroke="#38BDF8" strokeWidth="1" opacity="0.16">
          <line x1="0" y1="120" x2="360" y2="120" />
          <line x1="0" y1="240" x2="360" y2="240" />
          <line x1="120" y1="0" x2="120" y2="460" />
          <line x1="240" y1="0" x2="240" y2="460" />
        </g>
        <text x="32" y="72" fill="#38BDF8" fontSize="13" fontWeight="600" fontFamily="Outfit, sans-serif">
          GLA UNIVERSITY · TECH BUILDATHON
        </text>
        <text x="32" y="160" fill="#FFFFFF" fontSize="42" fontWeight="700" fontFamily="Outfit, sans-serif">
          CODE &amp;
        </text>
        <text x="32" y="206" fill="#FFFFFF" fontSize="42" fontWeight="700" fontFamily="Outfit, sans-serif">
          CREATE
        </text>
        <text x="32" y="252" fill="#F43F5E" fontSize="42" fontWeight="700" fontFamily="Outfit, sans-serif">
          24 HRS
        </text>
        <rect x="32" y="286" width="180" height="3" fill="#FFFFFF" opacity="0.35" />
        <text x="32" y="324" fill="#CBD5E1" fontSize="14" fontFamily="Plus Jakarta Sans, sans-serif">
          Visual Editing · Python · AI Prototypes
        </text>
        <rect x="32" y="372" width="136" height="36" rx="8" fill="#FFFFFF" />
        <text x="100" y="395" textAnchor="middle" fill="#070B14" fontSize="13" fontWeight="700">
          REGISTER NOW
        </text>
      </svg>
    );
  }

  if (variant === 'ai-carousel') {
    return (
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full block"
        role="img"
        aria-label="Python and AI Tips Social Media Series artwork"
      >
        <rect width="400" height="400" fill="#0B1120" />
        <rect x="24" y="24" width="352" height="352" rx="20" fill="#111A2E" stroke="#1E293B" strokeWidth="2" />
        <rect x="44" y="44" width="144" height="144" rx="14" fill="#E11D48" />
        <text x="62" y="98" fill="#FFFFFF" fontSize="22" fontWeight="700" fontFamily="Outfit, sans-serif">
          PYTHON
        </text>
        <text x="62" y="126" fill="#FFE4E6" fontSize="22" fontWeight="700" fontFamily="Outfit, sans-serif">
          BASICS
        </text>
        <text x="62" y="164" fill="#FFFFFF" fontSize="12" fontFamily="JetBrains Mono, monospace">
          01 / LISTS
        </text>

        <rect x="208" y="44" width="148" height="144" rx="14" fill="#1D4ED8" />
        <circle cx="282" cy="108" r="34" fill="none" stroke="#93C5FD" strokeWidth="2" />
        <circle cx="282" cy="108" r="14" fill="#FFFFFF" />
        <text x="226" y="166" fill="#DBEAFE" fontSize="12" fontFamily="JetBrains Mono, monospace">
          02 / LOGIC
        </text>

        <rect x="44" y="206" width="312" height="148" rx="14" fill="#070B14" stroke="#1E293B" strokeWidth="1.5" />
        <text x="64" y="256" fill="#F8FAFC" fontSize="24" fontWeight="700" fontFamily="Outfit, sans-serif">
          AI/ML Study Notes
        </text>
        <text x="64" y="286" fill="#94A3B8" fontSize="14" fontFamily="Plus Jakarta Sans, sans-serif">
          Swipeable visual guide for first-year CSE peers
        </text>
        <rect x="64" y="308" width="96" height="24" rx="6" fill="#E11D48" />
        <text x="112" y="324" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600">
          SWIPE CARD
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 440 320"
      className="w-full h-full block"
      role="img"
      aria-label="Spider-Tech Radial Web Blueprint Study"
    >
      <rect width="440" height="320" fill="#091124" />
      <g stroke="#38BDF8" strokeWidth="1" opacity="0.3" fill="none">
        <circle cx="220" cy="160" r="45" />
        <circle cx="220" cy="160" r="90" />
        <circle cx="220" cy="160" r="135" strokeDasharray="5 5" />
        <circle cx="220" cy="160" r="180" />
        <line x1="220" y1="0" x2="220" y2="320" />
        <line x1="0" y1="160" x2="440" y2="160" />
        <line x1="60" y1="20" x2="380" y2="300" />
        <line x1="380" y1="20" x2="60" y2="300" />
      </g>
      <circle cx="220" cy="160" r="32" fill="#E11D48" />
      <path
        d="M 204 148 C 210 142, 217 146, 218 162 C 210 165, 205 160, 204 148 Z"
        fill="#FFFFFF"
      />
      <path
        d="M 236 148 C 230 142, 223 146, 222 162 C 230 165, 235 160, 236 148 Z"
        fill="#FFFFFF"
      />
      <text x="24" y="34" fill="#38BDF8" fontSize="12" fontFamily="JetBrains Mono, monospace">
        VECTOR STUDY · RADIAL WEB GEOMETRY
      </text>
      <text x="24" y="296" fill="#F8FAFC" fontSize="14" fontWeight="600" fontFamily="Outfit, sans-serif">
        Spider-Tech Concept Blueprint
      </text>
    </svg>
  );
};

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
      }
    };
    if (lightboxItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem]);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#070B14]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#38BDF8] mb-2">Creative Showcase</p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 mb-3"
              style={{ textWrap: 'balance' }}
            >
              My Design &amp; Visual Editing Gallery
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              A curated collection of posters, social media visuals, and visual editing
              experiments. Click any piece to inspect it up close.
            </p>
          </div>

          {/* Interactive Category Filter Control */}
          <div
            role="group"
            aria-label="Filter design gallery by category"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#0D1424] border border-slate-800 rounded-xl shrink-0"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                    isSelected
                      ? 'bg-[#E11D48] text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pinterest-Style Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => {
            const hasFailed = item.imageUrl ? failedImages[item.id] : false;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="break-inside-avoid group bg-[#0D1424] rounded-2xl border border-slate-800 overflow-hidden hover:border-[#F43F5E]/60 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => setLightboxItem(item)}
                  className="relative w-full block text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F43F5E]"
                  aria-label={`Open preview of ${item.title}`}
                >
                  <div className="relative overflow-hidden bg-slate-900">
                    {item.imageUrl && !hasFailed ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                        }
                        className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    ) : item.artworkVariant ? (
                      <div className="w-full group-hover:scale-[1.02] transition-transform duration-300">
                        <VectorGalleryArtwork variant={item.artworkVariant} />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] flex flex-col items-center justify-center bg-slate-900 text-white p-6">
                        <ImageIcon className="w-8 h-8 mb-2 opacity-80" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </div>
                    )}

                    {/* Clean hover scrim with expand affordance */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-4">
                      <span className="text-xs font-medium text-white">Inspect Visual</span>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/95 text-slate-900">
                        <Expand className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                      <span className="text-[#38BDF8] font-medium">{item.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.tool}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{item.year}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-50 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#0D1424] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#070B14]/90 text-slate-100 border border-slate-700 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F43F5E]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="bg-[#070B14] flex items-center justify-center max-h-[65vh] overflow-hidden border-b border-slate-800">
              {lightboxItem.imageUrl && !failedImages[lightboxItem.id] ? (
                <img
                  src={lightboxItem.imageUrl}
                  alt={lightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] w-auto object-contain"
                />
              ) : lightboxItem.artworkVariant ? (
                <div className="w-full max-w-md max-h-[65vh] aspect-auto">
                  <VectorGalleryArtwork variant={lightboxItem.artworkVariant} />
                </div>
              ) : null}
            </div>

            <div className="p-6 bg-[#0D1424]">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                <span className="text-[#F43F5E] font-medium">{lightboxItem.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{lightboxItem.tool}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{lightboxItem.year}</span>
              </div>
              <h3
                id="lightbox-title"
                className="font-display text-xl font-bold text-slate-50 mb-2"
              >
                {lightboxItem.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
