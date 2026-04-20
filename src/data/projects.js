export const AREA_LABEL = { fe: 'FE', design: 'DESIGN', ai: 'AI', nocode: 'NO-CODE' }

export const PROJECTS = [
  {
    slug: 'stratos',
    num: '01',
    title: { it: 'Stratos', en: 'Stratos' },
    role: { it: 'Full-Stack', en: 'Full-Stack' },
    client: { it: 'Stratos Labs', en: 'Stratos Labs' },
    year: '2024',
    desc: {
      it: 'Dashboard operativa per team enterprise — dati in tempo reale, zero rumore.',
      en: 'Operational dashboard for enterprise teams — real-time data, zero noise.',
    },
    problem: {
      it: 'Il team operativo perdeva ore in processi manuali e interfacce datate — dati frammentati, zero visibilità in tempo reale, flussi ridondanti che rallentavano ogni azione.',
      en: 'The ops team was losing hours to manual workflows and outdated interfaces — fragmented data, zero real-time visibility, redundant flows that slowed every action.',
    },
    approach: {
      it: 'Ridisegno completo dell\'interfaccia e sviluppo del frontend con React e un design system interno. Priorità alle azioni più frequenti, layout a colpo d\'occhio, zero ridondanza.',
      en: 'Complete UI redesign and frontend build with React and an internal design system. Priority given to the most frequent actions, glanceable layouts, zero redundancy.',
    },
    result: {
      it: 'Riduzione degli step per le operazioni comuni, adozione immediata senza formazione, interfaccia che oggi il team usa ogni giorno senza frizioni.',
      en: 'Fewer steps for common operations, immediate adoption without training, an interface the team uses daily without friction.',
    },
    longDesc: {
      it: 'Ridisegno completo dell\'interfaccia e sviluppo del frontend per un gestionale interno usato quotidianamente dai team operativi. L\'obiettivo era ridurre gli step ripetitivi, rendere i dati leggibili a colpo d\'occhio e velocizzare le azioni più frequenti.',
      en: 'Complete UI redesign and frontend build for an internal ERP used daily by operational teams. Goal was cutting repeated steps, making data legible at a glance and speeding up the most frequent actions.',
    },
    stack: ['React', 'TypeScript', 'Design System', 'REST API'],
    area: 'fe',
    featured: true,
    filters: ['fullstack'],
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    ],
  },
  {
    slug: 'vella',
    num: '02',
    title: { it: 'Vella', en: 'Vella' },
    role: { it: 'Full-Stack', en: 'Full-Stack' },
    client: { it: 'Vella Inc.', en: 'Vella Inc.' },
    year: '2025',
    desc: {
      it: 'Architettura frontend modulare per una piattaforma CRM in rapida crescita.',
      en: 'Modular frontend architecture for a fast-growing CRM platform.',
    },
    problem: {
      it: 'Il CRM esistente era lento, difficile da manutenere e non scalabile. Il team di sviluppo perdeva tempo su una base di codice fragile invece di costruire funzionalità.',
      en: 'The existing CRM was slow, hard to maintain and not scalable. The dev team was losing time on a fragile codebase instead of building features.',
    },
    approach: {
      it: 'Architettura frontend from-scratch con Vite, struttura a moduli, routing dichiarativo, data layer con Zustand e componenti condivisi. Attenzione specifica a build time, DX e manutenibilità a lungo termine.',
      en: 'From-scratch frontend architecture with Vite, modular structure, declarative routing, Zustand data layer and shared components. Specific focus on build time, DX and long-term maintainability.',
    },
    result: {
      it: 'Build time drasticamente ridotto, codebase modulare e facile da estendere, developer experience nettamente migliorata. Onboarding dei nuovi sviluppatori ridotto da giorni a ore.',
      en: 'Drastically reduced build time, modular and easily extensible codebase, significantly improved developer experience. New dev onboarding cut from days to hours.',
    },
    longDesc: {
      it: 'Architettura frontend from-scratch per un CRM aziendale: setup Vite, struttura a moduli, routing, data layer, componenti condivisi. Attenzione specifica a build time, DX e manutenibilità.',
      en: 'From-scratch frontend architecture for a company CRM: Vite setup, modular structure, routing, data layer, shared components. Specific focus on build time, DX and maintainability.',
    },
    stack: ['React', 'Vite', 'TypeScript', 'Zustand', 'Tailwind'],
    area: 'fe',
    featured: true,
    filters: ['fullstack', 'fe'],
    cover: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80',
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    ],
  },
  {
    slug: 'aura',
    num: '03',
    title: { it: 'Aura', en: 'Aura' },
    role: { it: 'Design', en: 'Design' },
    client: { it: 'Studio Aura', en: 'Studio Aura' },
    year: '2024',
    desc: {
      it: 'Portfolio creativo interattivo con animazioni cinematografiche in Framer.',
      en: 'Interactive creative portfolio with cinematic animations in Framer.',
    },
    problem: {
      it: 'Il cliente aveva bisogno di un portfolio online che riflettesse la sua identità visiva, con animazioni fluide, senza dipendere da un developer per ogni piccolo aggiornamento.',
      en: 'The client needed an online portfolio reflecting his visual identity, with smooth animations, without depending on a developer for every small update.',
    },
    approach: {
      it: 'Portfolio costruito interamente in Framer — dalle interazioni alle animazioni di scroll, fino al sistema di pubblicazione autonomo con CMS integrato. Nessun custom code, massima flessibilità.',
      en: 'Portfolio built entirely in Framer — from interactions to scroll animations, down to an autonomous publishing system with integrated CMS. No custom code, maximum flexibility.',
    },
    result: {
      it: 'Sito live in due settimane, cliente autonomo nella gestione dei contenuti, animazioni fluide senza codice custom. Il cliente aggiorna da solo senza passare da me.',
      en: 'Site live in two weeks, client self-sufficient in content management, smooth animations without custom code. The client updates independently without going through me.',
    },
    longDesc: {
      it: 'Portfolio personale del cliente costruito interamente in Framer — dalle interazioni alle animazioni di scroll, fino al sistema di pubblicazione senza codice custom.',
      en: "Client's personal portfolio built entirely in Framer — from interactions to scroll animations, down to a no-custom-code publishing flow.",
    },
    stack: ['Framer', 'UI Design', 'Motion', 'CMS'],
    area: 'design',
    featured: true,
    filters: ['design'],
    cover: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80',
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    ],
  },
  {
    slug: 'solco',
    num: '04',
    title: { it: 'Solco', en: 'Solco' },
    role: { it: 'Web Design', en: 'Web Design' },
    client: { it: 'Solco Collective', en: 'Solco Collective' },
    year: '2023',
    desc: {
      it: 'Sito editoriale per un collettivo creativo — autonomia totale, SEO solida.',
      en: 'Editorial website for a creative collective — full autonomy, solid SEO.',
    },
    problem: {
      it: 'Il team aveva bisogno di una presenza online professionale e aggiornabile in autonomia — senza passare da un developer a ogni modifica, con SEO solida fin da subito.',
      en: 'The team needed a professional online presence they could update independently — without going through a developer for every change, with solid SEO from day one.',
    },
    approach: {
      it: 'Sito su WordPress con struttura editoriale definita, tema custom leggero, ottimizzazione SEO on-page. Focus su chiarezza dei contenuti, velocità di caricamento e autonomia del team.',
      en: 'WordPress site with defined editorial structure, lightweight custom theme, on-page SEO optimization. Focus on content clarity, loading speed and team autonomy.',
    },
    result: {
      it: 'Team autonomo nella gestione da subito, contenuti aggiornati regolarmente senza interventi tecnici, presenza online professionale costruita in tempi rapidi e a costi contenuti.',
      en: 'Team self-sufficient from day one, content regularly updated without technical intervention, professional online presence built quickly and cost-effectively.',
    },
    longDesc: {
      it: 'Sito aziendale su WordPress: struttura editoriale, tema custom, gestione contenuti autonoma da parte del team. Focus su chiarezza e velocità.',
      en: 'Company website on WordPress: editorial structure, custom theme, team-autonomous content management. Focus on clarity and speed.',
    },
    stack: ['WordPress', 'PHP', 'Custom Theme', 'SEO'],
    area: 'nocode',
    featured: true,
    filters: ['design'],
    cover: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80',
    ],
  },
  {
    slug: 'aria',
    num: '05',
    title: { it: 'Aria', en: 'Aria' },
    role: { it: 'AI Developer', en: 'AI Developer' },
    client: { it: 'Aria AI', en: 'Aria AI' },
    year: '2025',
    desc: {
      it: 'Agente conversazionale con RAG su knowledge base proprietaria per supporto clienti.',
      en: 'Conversational agent with RAG on proprietary knowledge base for customer support.',
    },
    problem: {
      it: 'Il team di supporto gestiva centinaia di ticket ripetitivi ogni giorno, con tempi di risposta lenti e alta variabilità nella qualità delle risposte. La knowledge base esisteva ma non era consultabile in modo intelligente.',
      en: 'The support team was handling hundreds of repetitive tickets daily, with slow response times and high variability in answer quality. A knowledge base existed but wasn\'t queryable in a smart way.',
    },
    approach: {
      it: 'Costruzione di un agente RAG con LangChain e OpenAI, knowledge base indicizzata con embedding vettoriali, interfaccia chat in React con streaming delle risposte. Pipeline di ingestione documenti automatizzata.',
      en: 'Built a RAG agent with LangChain and OpenAI, knowledge base indexed with vector embeddings, React chat interface with response streaming. Automated document ingestion pipeline.',
    },
    result: {
      it: '80% dei ticket risolti automaticamente senza intervento umano, tempo medio di risposta da ore a secondi, qualità delle risposte coerente e tracciabile. Il team di supporto si concentra ora solo sui casi complessi.',
      en: '80% of tickets resolved automatically without human intervention, average response time from hours to seconds, consistent and traceable answer quality. The support team now focuses only on complex cases.',
    },
    longDesc: {
      it: 'Agente AI conversazionale con architettura RAG: documenti indicizzati, retrieval semantico, generazione contestuale con OpenAI. Interfaccia chat React con streaming. Pipeline di ingestion automatica.',
      en: 'Conversational AI agent with RAG architecture: indexed documents, semantic retrieval, contextual generation with OpenAI. React chat interface with streaming. Automatic ingestion pipeline.',
    },
    stack: ['Python', 'LangChain', 'OpenAI', 'React', 'Pinecone'],
    area: 'ai',
    featured: true,
    filters: ['ai'],
    wip: true,
    cover: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
      'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80',
      'https://images.unsplash.com/photo-1676277791608-ac54525aa94d?w=800&q=80',
    ],
  },
  {
    slug: 'flux',
    num: '06',
    title: { it: 'Flux', en: 'Flux' },
    role: { it: 'AI Developer', en: 'AI Developer' },
    client: { it: 'Flux Systems', en: 'Flux Systems' },
    year: '2025',
    desc: {
      it: 'Piattaforma di automazione intelligente dei flussi aziendali con agenti AI orchestrati.',
      en: 'Intelligent business workflow automation platform with orchestrated AI agents.',
    },
    problem: {
      it: 'L\'azienda gestiva decine di processi interni su strumenti diversi e disconnessi — email, fogli Excel, notifiche manuali. Ogni handoff tra team richiedeva intervento umano, con errori e ritardi costanti.',
      en: 'The company managed dozens of internal processes across disconnected tools — emails, Excel sheets, manual notifications. Every team handoff required human intervention, with constant errors and delays.',
    },
    approach: {
      it: 'Architettura multi-agente con n8n come orchestratore, agenti specializzati per ogni dominio (HR, finance, ops), integrazione con gli strumenti esistenti via API. Claude per il ragionamento complesso, GPT-4o per le task veloci.',
      en: 'Multi-agent architecture with n8n as orchestrator, specialized agents per domain (HR, finance, ops), integration with existing tools via API. Claude for complex reasoning, GPT-4o for fast tasks.',
    },
    result: {
      it: 'Oltre 30 flussi aziendali automatizzati, riduzione del 60% del tempo speso in task ripetitivi, zero errori di handoff tra team. Il sistema gestisce autonomamente migliaia di eventi ogni settimana.',
      en: 'Over 30 business workflows automated, 60% reduction in time spent on repetitive tasks, zero handoff errors between teams. The system autonomously handles thousands of events every week.',
    },
    longDesc: {
      it: 'Piattaforma di automazione multi-agente: n8n come orchestratore centrale, agenti AI per HR, finance e ops, integrazione con CRM, Slack, Google Workspace. Logica decisionale con Claude e GPT-4o.',
      en: 'Multi-agent automation platform: n8n as central orchestrator, AI agents for HR, finance and ops, integration with CRM, Slack, Google Workspace. Decision logic with Claude and GPT-4o.',
    },
    stack: ['Python', 'n8n', 'Claude', 'OpenAI', 'LangChain'],
    area: 'ai',
    featured: true,
    filters: ['ai'],
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80',
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
    ],
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
