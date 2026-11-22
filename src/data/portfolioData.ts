export interface UtilityNote {
  id: string;
  gadgetName: string;
  title: string;
  summary: string;
  highlight: string;
}

export interface SkillItem {
  id: string;
  name: string;
  gadgetInspiration: string;
  category: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
}

export type GalleryCategory = 'all' | 'posters' | 'social' | 'creative';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'all'>;
  categoryLabel: string;
  tool: string;
  year: string;
  aspect: 'portrait' | 'landscape' | 'square';
  imageUrl?: string;
  artworkVariant?: 'hackathon-poster' | 'ai-carousel' | 'spider-blueprint';
  description: string;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  eraLabel: string;
  title: string;
  place: string;
  description: string;
  focus: string;
}

export const PROFILE = {
  name: 'Aastha Singh',
  role: 'Aspiring Software Developer | AI/ML Enthusiast',
  university: 'GLA University, Mathura',
  degree: 'B.Tech CSE (AI/ML) · First Year',
  email: 'aastha.singh_cs.aiml26@gla.ac.in',
  location: 'Mathura, Uttar Pradesh, India',
  heroIntro:
    'I love turning creative ideas into meaningful digital experiences. Currently exploring the world of technology, visual editing, and AI.',
  aboutSummary:
    'I am a first-year B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at GLA University, Mathura. Alongside building my foundation in programming and intelligent systems, I enjoy visual editing, crafting clean posters, and designing digital interfaces that make complex ideas feel sharp and approachable.',
  aboutSecondary:
    'Whether I am writing Python scripts, structuring responsive web pages with HTML and CSS, or refining compositions through visual editing and color grading, I care deeply about precision, thoughtful details, and continuous learning.',
  socials: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'linkedin.com/in/aastha-singh',
      url: 'https://www.linkedin.com',
    },
    {
      id: 'github',
      label: 'GitHub',
      handle: 'github.com/aastha-singh',
      url: 'https://github.com',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@aastha.visuals',
      url: 'https://www.instagram.com',
    },
  ],
};

export const HERO_METRICS = [
  { label: 'Academic Track', value: 'B.Tech CSE (AI/ML)' },
  { label: 'Institution', value: 'GLA University, Mathura' },
  { label: 'Core Stack', value: 'Python · HTML · CSS' },
  { label: 'Creative Focus', value: 'Visual Editing & UI' },
];

export const UTILITY_NOTES: UtilityNote[] = [
  {
    id: 'academics',
    gadgetName: 'Spider-Tracer',
    title: 'First-Year AI/ML Explorer',
    summary:
      'Studying core Computer Science fundamentals, algorithms, and Python programming at GLA University while diving into how machine learning models learn from real-world data.',
    highlight: 'Batch 2026–2030 · CSE (AI/ML)',
  },
  {
    id: 'design',
    gadgetName: 'Holo-Visor',
    title: 'Visual Editing & Composition',
    summary:
      'Passionate about visual editing, color grading, photo retouching, and framing clean digital posters and social media visuals with strong typographic hierarchy.',
    highlight: 'Visual Editing · Posters · UI Concepts',
  },
  {
    id: 'problem-solving',
    gadgetName: 'Web-Shooter',
    title: 'Connecting Logic & Creativity',
    summary:
      'I enjoy weaving together analytical engineering thinking and sharp visual direction—breaking complex problems into clear, structured steps.',
    highlight: 'Problem Solving · Systems Thinking',
  },
  {
    id: 'curiosity',
    gadgetName: 'Spider-Bot',
    title: 'Always Learning Something New',
    summary:
      'From experimenting with CSS grid architectures to building beginner Python utilities, every week is an opportunity to prototype, test, and level up.',
    highlight: 'Continuous Growth Mindset',
  },
];

export const SKILLS: SkillItem[] = [
  {
    id: 'html',
    name: 'HTML',
    gadgetInspiration: 'Web Frame',
    category: 'Web Foundations',
    description:
      'Structuring semantic, accessible, and clean web pages that anchor responsive modern digital experiences.',
  },
  {
    id: 'css',
    name: 'CSS',
    gadgetInspiration: 'Suit HUD',
    category: 'Visual Styling',
    description:
      'Crafting responsive layouts with Flexbox, Grid, crisp contrast, subtle transitions, and dark technical UI themes.',
  },
  {
    id: 'python',
    name: 'Python',
    gadgetInspiration: 'Web-Fluid Lab',
    category: 'Programming',
    description:
      'Writing clean, readable Python programs for problem solving, data handling, automation scripts, and foundational algorithms.',
  },
  {
    id: 'aiml',
    name: 'AI/ML',
    gadgetInspiration: 'Spider-Sense',
    category: 'Specialization',
    description:
      'Exploring core concepts of artificial intelligence, pattern recognition, and how intelligent models assist everyday workflows.',
  },
  {
    id: 'creative-thinking',
    name: 'Creative Thinking',
    gadgetInspiration: 'Skyline Swing',
    category: 'Visual Editing & Mindset',
    description:
      'Blending visual editing instincts with fresh problem-solving angles to turn ordinary student projects into standout work.',
  },
  {
    id: 'communication',
    name: 'Communication',
    gadgetInspiration: 'Comms Tracer',
    category: 'Collaboration',
    description:
      'Presenting ideas clearly across team projects, campus events, and visual presentations so technical concepts stay approachable.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ai-study-companion',
    title: 'WebMind Study Companion',
    category: 'AI/ML Concept · Web App',
    year: '2026',
    shortDescription:
      'A clean student dashboard concept that organizes semester notes, daily study blocks, and quick revision prompts in one focused workspace.',
    fullDescription:
      'Designed as an everyday companion for B.Tech students, WebMind brings together structured topic checklists, focus timers, and a Python-powered keyword summary prototype so exam revision feels organized and sharp.',
    technologies: ['HTML', 'CSS', 'Python', 'UI Design'],
    highlights: [
      'Modular study planner cards with clear visual hierarchy',
      'Python text-summarizer script for condensing lecture bullet points',
      'Responsive grid layout tested across mobile and desktop viewports',
    ],
    imageUrl: '/src/assets/images/project_ai_study_companion_1795370894931.jpg',
    liveUrl: 'https://github.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'campus-navigator',
    title: 'GLA Campus Smart Guide',
    category: 'Frontend · UX Concept',
    year: '2026',
    shortDescription:
      'An interactive campus directory and timetable helper built to help first-year students locate academic blocks, labs, and club rooms easily.',
    fullDescription:
      'Starting university on a large campus can feel overwhelming during the first few weeks. This responsive web concept pairs clear route cards with upcoming lecture reminders and quick links to library and lab timings.',
    technologies: ['HTML', 'CSS', 'Responsive Grid', 'Visual Editing'],
    highlights: [
      'Searchable block & department directory for new students',
      'Clean high-contrast typography for quick mobile lookup between classes',
      'Custom-edited directional graphics and clean map overlays',
    ],
    imageUrl: '/src/assets/images/project_campus_navigator_1795370896340.jpg',
    liveUrl: 'https://github.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'spider-ui-kit',
    title: 'Crimson & Cobalt UI Kit',
    category: 'Design System · Visual Craft',
    year: '2025',
    shortDescription:
      'A lightweight design kit featuring high-contrast crimson red, cobalt blue, and crisp white tokens alongside modular card templates.',
    fullDescription:
      'Built to keep hackathon presentations, club social posts, and personal web experiments visually unified. Includes documented spacing rules, accessible contrast pairs, and reusable HTML/CSS component blueprints.',
    technologies: ['CSS', 'Design Tokens', 'Visual Editing', 'Typography'],
    highlights: [
      'WCAG AA contrast-checked crimson, cobalt, and dark slate palette',
      'Reusable card, header, and form field blueprints',
      'Companion visual editing style guide for event graphics',
    ],
    imageUrl: '/src/assets/images/project_design_system_1795370897568.jpg',
    liveUrl: 'https://github.com',
    repoUrl: 'https://github.com',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-symposium-poster',
    title: 'AI & Computing Symposium Poster',
    category: 'posters',
    categoryLabel: 'Posters',
    tool: 'Visual Editing · Swiss Grid',
    year: '2026',
    aspect: 'portrait',
    imageUrl: '/src/assets/images/gallery_tech_fest_poster_1795370896919.jpg',
    description:
      'Event poster exploration combining bold geometric circles, structured Swiss typography, and a high-contrast cobalt blue, crimson red, and white palette.',
  },
  {
    id: 'gal-dev-club-carousel',
    title: 'Tech + AI Dev Club Carousel',
    category: 'social',
    categoryLabel: 'Social Media',
    tool: 'Visual Editing · Carousel Set',
    year: '2026',
    aspect: 'portrait',
    imageUrl: '/src/assets/images/gallery_social_red_blue_1795370988798.jpg',
    description:
      'Multi-slide social carousel welcoming new freshmen to coding workshops, AI sessions, and campus hackathons with a bold red and cobalt visual grid.',
  },
  {
    id: 'gal-twilight-desk',
    title: 'Skyline Studio Overlooking the City',
    category: 'creative',
    categoryLabel: 'Creative Art',
    tool: 'Visual Editing · Digital Art',
    year: '2025',
    aspect: 'landscape',
    imageUrl: '/src/assets/images/gallery_creative_art_1795370897036.jpg',
    description:
      'Atmospheric city-view workspace composition blending twilight blues, warm desk lighting, and color-graded skyline tones.',
  },
  {
    id: 'gal-hackathon-invite',
    title: 'Code & Create Hackathon Flyer',
    category: 'posters',
    categoryLabel: 'Posters',
    tool: 'Visual Editing · Print & Digital',
    year: '2025',
    aspect: 'portrait',
    artworkVariant: 'hackathon-poster',
    description:
      'Clean editorial flyer designed for a 24-hour beginner-friendly campus buildathon with clear schedule blocks and geometric web-grid accents.',
  },
  {
    id: 'gal-ai-tips-story',
    title: 'Python & AI Tips Story Series',
    category: 'social',
    categoryLabel: 'Social Media',
    tool: 'Visual Editing · Layout Kit',
    year: '2026',
    aspect: 'square',
    artworkVariant: 'ai-carousel',
    description:
      'Bite-sized visual educational cards breaking down Python fundamentals and machine learning concepts for first-year peers.',
  },
  {
    id: 'gal-spider-blueprint',
    title: 'Web-Tech Blueprint Study',
    category: 'creative',
    categoryLabel: 'Creative Art',
    tool: 'Visual Editing · Vector Geometry',
    year: '2026',
    aspect: 'landscape',
    artworkVariant: 'spider-blueprint',
    description:
      'Technical geometric composition inspired by Spider-Tech engineering schematics, radial web grids, and precision drafting.',
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'spark-design',
    year: '2024',
    eraLabel: 'Chapter 01',
    title: 'Discovering Visual Editing & Composition',
    place: 'Visual Editing & Storytelling',
    description:
      'Started crafting event posters, color-graded graphics, and social media visuals. Learned how framing, contrast, and typography turn raw ideas into clear visual stories.',
    focus: 'Visual Editing · Typography · Color Grading',
  },
  {
    id: 'web-foundations',
    year: '2025',
    eraLabel: 'Chapter 02',
    title: 'Weaving Ideas Into the Web',
    place: 'HTML & CSS Explorations',
    description:
      'Translated static visual edits into interactive web pages. Built foundational fluency in semantic HTML, modern CSS grids, and responsive mobile-first layouts.',
    focus: 'HTML5 · CSS3 · Responsive UI',
  },
  {
    id: 'gla-aiml',
    year: '2026',
    eraLabel: 'Chapter 03',
    title: 'B.Tech CSE (AI/ML) at GLA University',
    place: 'Mathura · First Year',
    description:
      'Joined GLA University to pursue Computer Science with a specialization in Artificial Intelligence & Machine Learning. Writing Python programs and strengthening algorithmic thinking.',
    focus: 'Python · CS Core · Problem Solving',
  },
  {
    id: 'future-horizon',
    year: 'Next',
    eraLabel: 'Chapter 04',
    title: 'Intelligent & Human-Centered Systems',
    place: 'Software + AI/ML Horizon',
    description:
      'Combining software engineering, machine learning models, and sharp visual editing to build useful tools, collaborate on student projects, and grow as a developer.',
    focus: 'Full-Stack · Machine Learning · Visual Craft',
  },
];
