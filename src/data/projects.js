export const AREA_LABEL = { fe: 'FE', design: 'DESIGN', ai: 'AI', nocode: 'NO-CODE' }

export const PROJECTS = [
  {
    slug: 'gestionale-enterprise',
    num: '01',
    title: { it: 'Gestionale Enterprise', en: 'Enterprise ERP' },
    role: { it: 'Full-Stack', en: 'Full-Stack' },
    year: '2024',
    desc: {
      it: 'UI/UX e frontend per applicazione gestionale interna.',
      en: 'UI/UX and frontend for an internal ERP application.',
    },
    longDesc: {
      it: 'Ridisegno completo dell\'interfaccia e sviluppo del frontend per un gestionale interno usato quotidianamente dai team operativi. L\'obiettivo era ridurre gli step ripetitivi, rendere i dati leggibili a colpo d\'occhio e velocizzare le azioni più frequenti.',
      en: 'Complete UI redesign and frontend build for an internal ERP used daily by operational teams. Goal was cutting repeated steps, making data legible at a glance and speeding up the most frequent actions.',
    },
    stack: ['React', 'TypeScript', 'Design System', 'REST API'],
    area: 'fe',
    featured: true,
    filters: ['fullstack'],
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    slug: 'gestionale-react',
    num: '02',
    title: { it: 'Gestionale React', en: 'React ERP' },
    role: { it: 'Full-Stack', en: 'Full-Stack' },
    year: '2025',
    desc: {
      it: 'Architettura frontend con React e Vite per CRM aziendale.',
      en: 'Frontend architecture with React and Vite for a company CRM.',
    },
    longDesc: {
      it: 'Architettura frontend from-scratch per un CRM aziendale: setup Vite, struttura a moduli, routing, data layer, componenti condivisi. Attenzione specifica a build time, DX e manutenibilità.',
      en: 'From-scratch frontend architecture for a company CRM: Vite setup, modular structure, routing, data layer, shared components. Specific focus on build time, DX and maintainability.',
    },
    stack: ['React', 'Vite', 'TypeScript', 'Zustand', 'Tailwind'],
    area: 'fe',
    featured: true,
    filters: ['fullstack', 'fe'],
    cover: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
  },
  {
    slug: 'portfolio-lorenzo-piovani',
    num: '03',
    title: { it: 'Portfolio Lorenzo Piovani', en: 'Lorenzo Piovani Portfolio' },
    role: { it: 'Design', en: 'Design' },
    year: '2024',
    desc: {
      it: 'Portfolio interattivo sviluppato in Framer.',
      en: 'Interactive portfolio built in Framer.',
    },
    longDesc: {
      it: 'Portfolio personale del cliente costruito interamente in Framer — dalle interazioni alle animazioni di scroll, fino al sistema di pubblicazione senza codice custom.',
      en: "Client's personal portfolio built entirely in Framer — from interactions to scroll animations, down to a no-custom-code publishing flow.",
    },
    stack: ['Framer', 'UI Design', 'Motion', 'CMS'],
    area: 'nocode',
    featured: true,
    filters: ['design'],
    cover: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    slug: 'strane-donne',
    num: '04',
    title: { it: 'Strane Donne', en: 'Strane Donne' },
    role: { it: 'Web', en: 'Web' },
    year: '2023',
    desc: {
      it: 'Sito aziendale WordPress.',
      en: 'WordPress company website.',
    },
    longDesc: {
      it: 'Sito aziendale su WordPress: struttura editoriale, tema custom, gestione contenuti autonoma da parte del team. Focus su chiarezza e velocità.',
      en: 'Company website on WordPress: editorial structure, custom theme, team-autonomous content management. Focus on clarity and speed.',
    },
    stack: ['WordPress', 'PHP', 'Custom Theme', 'SEO'],
    area: 'nocode',
    featured: true,
    filters: ['design'],
    cover: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
  },
]

export const SKILLS = [
  {
    num: '01',
    title: { it: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'React',       icon: 'react' },
      { name: 'TypeScript',  icon: 'typescript' },
      { name: 'Next.js',     icon: 'nextdotjs' },
      { name: 'Tailwind',    icon: 'tailwindcss' },
      { name: 'Vite',        icon: 'vite' },
      { name: 'GSAP',        icon: 'greensock' },
    ],
  },
  {
    num: '02',
    title: { it: 'Design', en: 'Design' },
    items: [
      { name: 'Figma',   icon: 'figma' },
      { name: 'Framer',  icon: 'framer' },
      { name: 'Webflow', icon: 'webflow' },
    ],
  },
  {
    num: '03',
    title: { it: 'AI', en: 'AI' },
    items: [
      { name: 'Python',     icon: 'python' },
      { name: 'OpenAI',     icon: 'openai' },
      { name: 'Claude',     icon: 'anthropic' },
      { name: 'n8n',        icon: 'n8n' },
      { name: 'LangChain',  icon: 'langchain' },
    ],
  },
]
