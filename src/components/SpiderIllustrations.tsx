import React from 'react';

export interface FloatingGadget {
  id: string;
  name: string;
  shortRole: string;
  description: string;
}

export const HERO_GADGETS: FloatingGadget[] = [
  {
    id: 'web-shooter',
    name: 'Web-Shooter',
    shortRole: 'Connecting Systems',
    description:
      'Linking clean HTML/CSS architecture with sharp visual editing into cohesive web experiences.',
  },
  {
    id: 'spider-tracer',
    name: 'Spider-Tracer',
    shortRole: 'Signal & Debug Tracking',
    description:
      'Pinpointing bugs, edge cases, and layout bottlenecks with methodical Python logic.',
  },
  {
    id: 'holo-visor',
    name: 'Suit HUD Visor',
    shortRole: 'Visual Precision',
    description:
      'Calibrating typography, color grading, and spacing so dark technical interfaces stay crystal clear.',
  },
  {
    id: 'spider-bot',
    name: 'Mini Spider-Bot',
    shortRole: 'AI/ML Exploration',
    description:
      'Testing how intelligent algorithms and automation can assist real-world student workflows.',
  },
];

interface HeroCharacterProps {
  activeGadgetId: string;
  onSelectGadget: (gadgetId: string) => void;
}

export const SpiderHeroCharacter: React.FC<HeroCharacterProps> = ({
  activeGadgetId,
  onSelectGadget,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[380px] select-none">
      <div className="relative w-full max-w-[430px] aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 440 440"
          className="w-full h-full overflow-visible"
          role="img"
          aria-label="Dark technical Spider-Man inspired character illustration surrounded by interactive Spider-Tech HUD gadgets"
        >
          <defs>
            <radialGradient id="spiderDarkAura" cx="50%" cy="48%" r="50%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#E11D48" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#0D1424" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="spiderRedDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="55%" stopColor="#E11D48" />
              <stop offset="100%" stopColor="#9F1239" />
            </linearGradient>
            <linearGradient id="spiderBlueDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="hudLensGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#BAE6FD" />
            </linearGradient>
            <filter id="darkSpiderDrop" x="-18%" y="-18%" width="136%" height="136%">
              <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#020617" floodOpacity="0.65" />
            </filter>
          </defs>

          {/* Technical Deep Aura */}
          <circle cx="220" cy="220" r="196" fill="url(#spiderDarkAura)" />

          {/* Architectural Spider-Tech HUD Web Backdrop */}
          <g stroke="#38BDF8" strokeWidth="1" fill="none" opacity="0.22">
            <circle cx="220" cy="220" r="174" strokeDasharray="6 7" />
            <circle cx="220" cy="220" r="132" />
            <circle cx="220" cy="220" r="88" strokeDasharray="3 5" />
            <line x1="220" y1="30" x2="220" y2="410" />
            <line x1="30" y1="220" x2="410" y2="220" />
            <line x1="88" y1="88" x2="352" y2="352" opacity="0.65" />
            <line x1="352" y1="88" x2="88" y2="352" opacity="0.65" />
          </g>

          {/* Subtle HUD Corner Brackets */}
          <g stroke="#38BDF8" strokeWidth="1.5" fill="none" opacity="0.45">
            <path d="M 38 56 L 38 38 L 56 38" />
            <path d="M 384 38 L 402 38 L 402 56" />
            <path d="M 38 384 L 38 402 L 56 402" />
            <path d="M 384 402 L 402 402 L 402 384" />
          </g>

          {/* Silk Web Line from Top */}
          <line
            x1="220"
            y1="8"
            x2="220"
            y2="78"
            stroke="#38BDF8"
            strokeWidth="1.6"
            strokeDasharray="4 3"
            opacity="0.55"
          />

          {/* Main Character Group */}
          <g filter="url(#darkSpiderDrop)" className="animate-float-slow">
            {/* Soft ground shadow */}
            <ellipse cx="220" cy="368" rx="68" ry="11" fill="#020617" opacity="0.55" />

            {/* Legs / Boots */}
            <path
              d="M 184 316 L 176 346 C 174 352, 198 354, 200 346 L 206 318 Z"
              fill="url(#spiderRedDark)"
            />
            <path
              d="M 256 316 L 264 346 C 266 352, 242 354, 240 346 L 234 318 Z"
              fill="url(#spiderRedDark)"
            />
            <ellipse cx="187" cy="350" rx="22" ry="10" fill="url(#spiderRedDark)" />
            <ellipse cx="253" cy="350" rx="22" ry="10" fill="url(#spiderRedDark)" />

            {/* Left & Right Arms */}
            <path
              d="M 162 246 C 128 242, 112 222, 116 198"
              fill="none"
              stroke="url(#spiderBlueDark)"
              strokeWidth="22"
              strokeLinecap="round"
            />
            <circle cx="116" cy="196" r="14" fill="url(#spiderRedDark)" />
            {/* Wrist Web-Shooter Cuff Left */}
            <rect x="108" y="206" width="16" height="8" rx="3" fill="#020617" stroke="#38BDF8" strokeWidth="1" />
            <circle cx="116" cy="210" r="2.2" fill="#38BDF8" />

            <path
              d="M 278 246 C 312 246, 326 268, 318 290"
              fill="none"
              stroke="url(#spiderBlueDark)"
              strokeWidth="22"
              strokeLinecap="round"
            />
            <circle cx="317" cy="292" r="14" fill="url(#spiderRedDark)" />
            {/* Wrist Web-Shooter Cuff Right */}
            <rect x="309" y="276" width="16" height="8" rx="3" fill="#020617" stroke="#38BDF8" strokeWidth="1" />
            <circle cx="317" cy="280" r="2.2" fill="#38BDF8" />

            {/* Suit Torso */}
            <rect x="158" y="222" width="124" height="104" rx="46" fill="url(#spiderBlueDark)" stroke="#1E3A8A" strokeWidth="1.5" />
            {/* Red Chest V-Panel */}
            <path
              d="M 168 230 C 194 222, 246 222, 272 230 L 254 294 C 242 308, 198 308, 186 294 Z"
              fill="url(#spiderRedDark)"
            />
            {/* Red Waist Belt */}
            <path
              d="M 162 296 Q 220 310 278 296 L 274 312 Q 220 324 166 312 Z"
              fill="url(#spiderRedDark)"
            />

            {/* Technical Spider Emblem on Chest */}
            <g transform="translate(220, 266)" fill="#020617">
              <ellipse cx="0" cy="2" rx="7" ry="10" />
              <circle cx="0" cy="-10" r="4.5" />
              <path d="M -6 -4 L -16 -12 L -18 -5" fill="none" stroke="#020617" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 6 -4 L 16 -12 L 18 -5" fill="none" stroke="#020617" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M -7 1 L -18 -2 L -20 6" fill="none" stroke="#020617" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 7 1 L 18 -2 L 20 6" fill="none" stroke="#020617" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M -6 6 L -15 12 L -14 20" fill="none" stroke="#020617" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 6 6 L 15 12 L 14 20" fill="none" stroke="#020617" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Head / Mask */}
            <circle cx="220" cy="154" r="76" fill="url(#spiderRedDark)" stroke="#FB7185" strokeOpacity="0.25" strokeWidth="1.5" />

            {/* Clean Radial Mask Web Lines */}
            <g stroke="#4C0519" strokeWidth="1.4" fill="none" opacity="0.65">
              <line x1="220" y1="78" x2="220" y2="230" />
              <line x1="144" y1="154" x2="296" y2="154" />
              <line x1="166" y1="100" x2="274" y2="208" />
              <line x1="274" y1="100" x2="166" y2="208" />
              <circle cx="220" cy="154" r="24" />
              <circle cx="220" cy="154" r="48" />
            </g>

            {/* Specular Rim Highlight */}
            <ellipse
              cx="190"
              cy="104"
              rx="26"
              ry="10"
              transform="rotate(-24 190 104)"
              fill="#FFFFFF"
              opacity="0.2"
            />

            {/* Expressive Technical Spider-Mask HUD Lenses */}
            <g>
              <path
                d="M 164 138 C 176 126, 202 136, 206 164 C 186 170, 166 160, 164 138 Z"
                fill="url(#hudLensGlow)"
                stroke="#020617"
                strokeWidth="4.5"
                strokeLinejoin="round"
              />
              <path
                d="M 276 138 C 264 126, 238 136, 234 164 C 254 170, 274 160, 276 138 Z"
                fill="url(#hudLensGlow)"
                stroke="#020617"
                strokeWidth="4.5"
                strokeLinejoin="round"
              />
              {/* HUD Micro Reticle Detail inside Eyes */}
              <path d="M 173 142 Q 186 138 196 152" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M 267 142 Q 254 138 244 152" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />
            </g>
          </g>

          {/* Interactive Floating Gadget 1: Web-Shooter (Top Left) */}
          <g
            transform="translate(62, 100)"
            className="cursor-pointer animate-float-reverse"
            onClick={() => onSelectGadget('web-shooter')}
            role="button"
            tabIndex={0}
            aria-label="Inspect Web-Shooter gadget"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectGadget('web-shooter');
              }
            }}
          >
            <circle
              cx="0"
              cy="0"
              r="30"
              fill={activeGadgetId === 'web-shooter' ? '#E11D48' : '#0B1221'}
              stroke={activeGadgetId === 'web-shooter' ? '#FB7185' : '#334155'}
              strokeWidth="2"
            />
            <rect
              x="-13"
              y="-7"
              width="26"
              height="14"
              rx="5"
              fill={activeGadgetId === 'web-shooter' ? '#FFFFFF' : '#1E293B'}
              stroke={activeGadgetId === 'web-shooter' ? 'none' : '#38BDF8'}
              strokeWidth="1.2"
            />
            <circle
              cx="0"
              cy="0"
              r="4"
              fill={activeGadgetId === 'web-shooter' ? '#E11D48' : '#38BDF8'}
            />
            <line
              x1="-18"
              y1="0"
              x2="-13"
              y2="0"
              stroke={activeGadgetId === 'web-shooter' ? '#FECDD3' : '#F43F5E'}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>

          {/* Interactive Floating Gadget 2: Spider-Tracer (Top Right) */}
          <g
            transform="translate(378, 100)"
            className="cursor-pointer animate-float-slow"
            onClick={() => onSelectGadget('spider-tracer')}
            role="button"
            tabIndex={0}
            aria-label="Inspect Spider-Tracer gadget"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectGadget('spider-tracer');
              }
            }}
          >
            <circle
              cx="0"
              cy="0"
              r="30"
              fill={activeGadgetId === 'spider-tracer' ? '#E11D48' : '#0B1221'}
              stroke={activeGadgetId === 'spider-tracer' ? '#FB7185' : '#334155'}
              strokeWidth="2"
            />
            <circle
              cx="0"
              cy="0"
              r="7"
              fill={activeGadgetId === 'spider-tracer' ? '#FFFFFF' : '#F43F5E'}
            />
            <path
              d="M -12 -8 L -5 -3 M 12 -8 L 5 -3 M -14 0 L -7 0 M 14 0 L 7 0 M -12 8 L -5 3 M 12 8 L 5 3"
              stroke={activeGadgetId === 'spider-tracer' ? '#FECDD3' : '#38BDF8'}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Interactive Floating Gadget 3: Suit HUD Visor (Bottom Left) */}
          <g
            transform="translate(60, 296)"
            className="cursor-pointer animate-float-slow"
            onClick={() => onSelectGadget('holo-visor')}
            role="button"
            tabIndex={0}
            aria-label="Inspect Suit HUD Visor gadget"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectGadget('holo-visor');
              }
            }}
          >
            <circle
              cx="0"
              cy="0"
              r="30"
              fill={activeGadgetId === 'holo-visor' ? '#2563EB' : '#0B1221'}
              stroke={activeGadgetId === 'holo-visor' ? '#60A5FA' : '#334155'}
              strokeWidth="2"
            />
            <path
              d="M -15 -4 C -10 -10, -3 -6, -2 4 C -9 6, -14 3, -15 -4 Z"
              fill={activeGadgetId === 'holo-visor' ? '#FFFFFF' : '#38BDF8'}
            />
            <path
              d="M 15 -4 C 10 -10, 3 -6, 2 4 C 9 6, 14 3, 15 -4 Z"
              fill={activeGadgetId === 'holo-visor' ? '#FFFFFF' : '#38BDF8'}
            />
          </g>

          {/* Interactive Floating Gadget 4: Mini Spider-Bot (Bottom Right) */}
          <g
            transform="translate(380, 296)"
            className="cursor-pointer animate-float-reverse"
            onClick={() => onSelectGadget('spider-bot')}
            role="button"
            tabIndex={0}
            aria-label="Inspect Mini Spider-Bot gadget"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectGadget('spider-bot');
              }
            }}
          >
            <circle
              cx="0"
              cy="0"
              r="30"
              fill={activeGadgetId === 'spider-bot' ? '#2563EB' : '#0B1221'}
              stroke={activeGadgetId === 'spider-bot' ? '#60A5FA' : '#334155'}
              strokeWidth="2"
            />
            <rect
              x="-9"
              y="-9"
              width="18"
              height="18"
              rx="6"
              fill={activeGadgetId === 'spider-bot' ? '#FFFFFF' : '#1E293B'}
              stroke={activeGadgetId === 'spider-bot' ? 'none' : '#475569'}
              strokeWidth="1.2"
            />
            <circle cx="-3.5" cy="-1" r="2" fill={activeGadgetId === 'spider-bot' ? '#E11D48' : '#38BDF8'} />
            <circle cx="3.5" cy="-1" r="2" fill={activeGadgetId === 'spider-bot' ? '#E11D48' : '#38BDF8'} />
            <path
              d="M -9 -3 L -15 -7 M -9 3 L -15 7 M 9 -3 L 15 -7 M 9 3 L 15 7"
              stroke={activeGadgetId === 'spider-bot' ? '#BAE6FD' : '#F43F5E'}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export const SkillGadgetIcon: React.FC<{ skillId: string }> = ({ skillId }) => {
  switch (skillId) {
    case 'html':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
          <rect x="6" y="8" width="36" height="32" rx="8" fill="#0B1221" stroke="#3B82F6" strokeWidth="2" />
          <path d="M 18 19 L 13 24 L 18 29" fill="none" stroke="#38BDF8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 30 19 L 35 24 L 30 29" fill="none" stroke="#38BDF8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="26" y1="17" x2="22" y2="31" stroke="#F43F5E" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
          <rect x="6" y="11" width="36" height="26" rx="7" fill="#0B1221" stroke="#F43F5E" strokeWidth="2" />
          <path d="M 11 19 C 16 14, 21 18, 22 25 C 16 27, 12 24, 11 19 Z" fill="#F8FAFC" />
          <path d="M 37 19 C 32 14, 27 18, 26 25 C 32 27, 36 24, 37 19 Z" fill="#F8FAFC" />
          <circle cx="24" cy="31" r="2" fill="#38BDF8" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
          <rect x="13" y="10" width="22" height="28" rx="6" fill="#0B1221" stroke="#38BDF8" strokeWidth="2" />
          <rect x="17" y="16" width="14" height="16" rx="3" fill="#E11D48" />
          <rect x="18" y="6" width="12" height="4" rx="2" fill="#3B82F6" />
          <line x1="20" y1="22" x2="28" y2="22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="26" x2="26" y2="26" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'aiml':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
          <circle cx="24" cy="24" r="17" fill="#0B1221" stroke="#F43F5E" strokeWidth="2" />
          <circle cx="24" cy="24" r="5" fill="#38BDF8" />
          <circle cx="15" cy="16" r="2.8" fill="#F8FAFC" />
          <circle cx="33" cy="16" r="2.8" fill="#F8FAFC" />
          <circle cx="15" cy="32" r="2.8" fill="#F8FAFC" />
          <circle cx="33" cy="32" r="2.8" fill="#F8FAFC" />
          <line x1="17" y1="18" x2="21" y2="21" stroke="#F43F5E" strokeWidth="1.6" />
          <line x1="31" y1="18" x2="27" y2="21" stroke="#F43F5E" strokeWidth="1.6" />
          <line x1="17" y1="30" x2="21" y2="27" stroke="#F43F5E" strokeWidth="1.6" />
          <line x1="31" y1="30" x2="27" y2="27" stroke="#F43F5E" strokeWidth="1.6" />
        </svg>
      );
    case 'creative-thinking':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
          <circle cx="24" cy="24" r="17" fill="#0B1221" stroke="#3B82F6" strokeWidth="2" />
          <polygon points="24,10 27,21 38,24 27,27 24,38 21,27 10,24 21,21" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="4.5" fill="#F43F5E" />
        </svg>
      );
    case 'communication':
    default:
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
          <path
            d="M 9 16 C 9 11, 13 9, 24 9 C 35 9, 39 11, 39 16 L 39 27 C 39 32, 35 34, 24 34 L 18 34 L 11 40 L 13 34 C 10 33, 9 30, 9 27 Z"
            fill="#0B1221"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="18" cy="22" r="2.2" fill="#F43F5E" />
          <circle cx="24" cy="22" r="2.2" fill="#F8FAFC" />
          <circle cx="30" cy="22" r="2.2" fill="#38BDF8" />
        </svg>
      );
  }
};

export const MultiverseWebVisual: React.FC<{
  activeIndex: number;
  totalSteps: number;
  activeYear: string;
}> = ({ activeIndex, totalSteps, activeYear }) => {
  const angle = -60 + (activeIndex / Math.max(1, totalSteps - 1)) * 120;

  return (
    <div className="w-full flex flex-col items-center">
      <svg
        viewBox="0 0 360 280"
        className="w-full max-w-[340px]"
        role="img"
        aria-label={`Spider-Tech Multiverse Compass dial set to ${activeYear}`}
      >
        <defs>
          <linearGradient id="mvPlateDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="mvGlowDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0B1221" />
          </linearGradient>
        </defs>

        {/* Concentric Spider-Web HUD Portal */}
        <ellipse cx="180" cy="140" rx="146" ry="102" fill="#0B1221" stroke="#1E293B" strokeWidth="1.5" />
        <ellipse cx="180" cy="140" rx="114" ry="78" fill="none" stroke="#38BDF8" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="6 6" />
        <line x1="66" y1="140" x2="294" y2="140" stroke="#38BDF8" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="180" y1="42" x2="180" y2="238" stroke="#38BDF8" strokeOpacity="0.2" strokeWidth="1" />

        {/* Base Console */}
        <rect x="66" y="194" width="228" height="36" rx="18" fill="url(#mvPlateDark)" stroke="#3B82F6" strokeOpacity="0.4" strokeWidth="1" />
        <rect x="82" y="202" width="196" height="20" rx="10" fill="#070B14" />

        {/* Spider-Tech Chrono Ring */}
        <circle cx="180" cy="126" r="52" fill="#070B14" stroke="#334155" strokeWidth="3" />
        <circle cx="180" cy="126" r="40" fill="url(#mvGlowDark)" stroke="#F43F5E" strokeWidth="2.2" />

        {/* Rotating Chrono Needle */}
        <g
          transform={`translate(180, 126) rotate(${angle})`}
          style={{ transition: 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <line x1="0" y1="8" x2="0" y2="-30" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="0" cy="-30" r="4.5" fill="#F43F5E" />
        </g>
        <circle cx="180" cy="126" r="6" fill="#F8FAFC" />

        {/* Side Signal Nodes */}
        <line x1="108" y1="194" x2="96" y2="148" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="96" cy="144" r="6.5" fill="#F43F5E" />
        <line x1="252" y1="194" x2="264" y2="148" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="264" cy="144" r="6.5" fill="#F43F5E" />

        {/* Year Readout Badge */}
        <rect x="134" y="199" width="92" height="26" rx="13" fill="#0F172A" stroke="#334155" strokeWidth="1" />
        <text
          x="180"
          y="216"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="#38BDF8"
          fontFamily="JetBrains Mono, monospace"
        >
          {activeYear}
        </text>
      </svg>
    </div>
  );
};

export const SkylinePortalIllustration: React.FC<{ isSent: boolean }> = ({ isSent }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full select-none">
      <svg
        viewBox="0 0 260 320"
        className="w-full max-w-[235px]"
        role="img"
        aria-label="Dark technical Spider-Man skyline portal and web-signal illustration"
      >
        <defs>
          <linearGradient id="portalFrameDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="100%" stopColor="#9F1239" />
          </linearGradient>
          <linearGradient id="nightSkyDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#070B14" />
            <stop offset="60%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        <ellipse cx="130" cy="292" rx="84" ry="12" fill="#020617" opacity="0.65" />

        {/* Outer Crimson Portal Arch */}
        <rect x="44" y="24" width="172" height="264" rx="18" fill="url(#portalFrameDark)" />
        <rect x="58" y="38" width="144" height="236" rx="10" fill="url(#nightSkyDark)" />

        {/* City Skyline Silhouette inside Portal */}
        <path
          d="M 58 274 L 58 194 L 82 194 L 82 162 L 106 162 L 106 206 L 124 206 L 124 142 L 148 142 L 148 188 L 172 188 L 172 170 L 202 170 L 202 274 Z"
          fill="#070B14"
          opacity="0.92"
        />
        {/* Lit Windows */}
        <rect x="88" y="174" width="6" height="6" fill="#38BDF8" opacity="0.9" />
        <rect x="132" y="154" width="6" height="6" fill="#FDE047" opacity="0.85" />
        <rect x="132" y="168" width="6" height="6" fill="#38BDF8" opacity="0.85" />
        <rect x="178" y="182" width="6" height="6" fill="#F43F5E" opacity="0.85" />

        {/* Glowing Spider-Signal Beacon */}
        <circle
          cx="154"
          cy="94"
          r={isSent ? 26 : 20}
          fill="#F43F5E"
          opacity={isSent ? 0.95 : 0.78}
          style={{ transition: 'all 300ms ease' }}
        />
        <circle cx="154" cy="94" r="9" fill="#FFFFFF" opacity="0.95" />

        {/* Swinging Silk Line */}
        <path
          d="M 58 58 Q 112 118 154 94"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeDasharray="4 3"
          opacity="0.85"
        />

        {/* Portal Door Leaf */}
        <g
          style={{
            transformOrigin: '58px 156px',
            transform: isSent ? 'scaleX(0.28)' : 'scaleX(0.72)',
            transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <rect x="58" y="38" width="144" height="236" rx="8" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1.5" />
          <rect x="74" y="56" width="112" height="86" rx="4" fill="none" stroke="#60A5FA" strokeWidth="2" />
          <rect x="74" y="158" width="112" height="96" rx="4" fill="none" stroke="#60A5FA" strokeWidth="2" />
          <circle cx="182" cy="156" r="7.5" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
        </g>

        <rect x="34" y="282" width="192" height="12" rx="6" fill="#1E293B" />
      </svg>
    </div>
  );
};
