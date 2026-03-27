export const siteMeta = {
  brand: 'Nathaniel Ruiz',
}

export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Labs', href: '#labs' },
  { label: 'Contact', href: '#contact' },
]

export const heroContent = {
  eyebrow: 'Senior Frontend / Fullstack Engineer',
  title: 'Online CV, portfolio y labs con una base premium, sobria y lista para escalar.',
  description:
    'Esta fase deja armado el foundation del sitio: Vue 3 con Composition API, Vite, Tailwind CSS y una arquitectura orientada a reutilización para ir reemplazando placeholders por contenido real sin rehacer el sistema visual.',
  actions: [
    { label: 'Ver experiencia', href: '#experience', variant: 'primary' },
    { label: 'Explorar labs', href: '#labs', variant: 'secondary' },
  ],
  highlights: ['Vue 3', 'Vite', 'Tailwind CSS', 'Dark UI', 'Reusable Sections'],
  metrics: [
    { label: 'Base stack', value: 'Vue 3 + Tailwind' },
    { label: 'UI direction', value: 'Minimal dark premium' },
    { label: 'Architecture', value: 'Content separate from UI' },
    { label: 'Status', value: 'Phase 1 scaffold ready' },
  ],
}

export const aboutContent = {
  eyebrow: 'About',
  title: 'Narrativa personal, enfoque y propuesta de valor.',
  description:
    'Placeholder para tu resumen profesional: quién eres, en qué tipo de productos aportas más valor y cómo combinas criterio de producto, frontend craft y visión fullstack.',
  cards: [
    {
      eyebrow: 'Profile',
      title: 'Resumen ejecutivo',
      description:
        'Aquí irá una síntesis breve de tu perfil senior, orientada a impacto, liderazgo técnico y sensibilidad por UX.',
      meta: ['Frontend', 'Fullstack', 'Product Thinking'],
    },
    {
      eyebrow: 'Approach',
      title: 'Forma de trabajar',
      description:
        'Espacio para describir tu estilo: ownership, colaboración, velocidad con criterio y foco en sistemas mantenibles.',
      meta: ['Architecture', 'Mentoring', 'Delivery'],
    },
  ],
}

export const experienceContent = {
  eyebrow: 'Experience',
  title: 'Recorrido profesional con foco en impacto y seniority.',
  description:
    'Base para una línea de tiempo o lista editorial con roles, compañías, periodos, responsabilidades clave y resultados medibles.',
  roles: [
    {
      eyebrow: 'Most recent',
      title: 'Senior Frontend Engineer',
      description:
        'Placeholder para tu rol más reciente, destacando ownership técnico, decisiones de arquitectura y mejoras en performance o DX.',
      meta: ['2024 - Hoy', 'Company Name', 'Remote / Hybrid'],
    },
    {
      eyebrow: 'Previous',
      title: 'Fullstack Engineer',
      description:
        'Espacio para un rol con alcance end-to-end: APIs, diseño de features, integración con backend y entrega de producto.',
      meta: ['2021 - 2024', 'Company Name', 'Product Development'],
    },
    {
      eyebrow: 'Foundation',
      title: 'Frontend Engineer',
      description:
        'Placeholder para una etapa donde creciste en craft de UI, sistemas de diseño y colaboración con producto y diseño.',
      meta: ['2018 - 2021', 'Company Name', 'Design Systems'],
    },
  ],
}

export const workContent = {
  eyebrow: 'Selected Work',
  title: 'Casos de estudio seleccionados y proyectos con contexto.',
  description:
    'Sección preparada para mostrar proyectos importantes, el problema a resolver, tu rol, decisiones clave y resultados reales.',
  caseStudies: [
    {
      eyebrow: 'Case study 01',
      title: 'Platform redesign',
      description:
        'Placeholder para un proyecto de rediseño o refactor grande con impacto visible en UX, velocidad o adopción.',
      meta: ['Role', 'Problem', 'Outcome'],
    },
    {
      eyebrow: 'Case study 02',
      title: 'Internal tooling',
      description:
        'Espacio para una herramienta interna o sistema que mejoró operación, productividad del equipo o consistencia de entrega.',
      meta: ['Scope', 'Architecture', 'Efficiency'],
    },
    {
      eyebrow: 'Case study 03',
      title: 'Product launch',
      description:
        'Placeholder para lanzamiento de una feature o producto con narrativa clara desde discovery hasta delivery.',
      meta: ['Launch', 'Experimentation', 'Metrics'],
    },
  ],
}

export const stackContent = {
  eyebrow: 'Tech Stack',
  title: 'Tecnologías, herramientas y áreas de dominio.',
  description:
    'Base para agrupar tu stack por categorías y mostrar amplitud sin convertir la sección en una pared de logos.',
  groups: [
    {
      name: 'Frontend',
      items: ['Vue', 'React', 'TypeScript', 'Tailwind', 'Accessibility', 'Performance'],
    },
    {
      name: 'Backend',
      items: ['Node.js', 'APIs', 'SQL', 'Auth', 'Integrations', 'Server Rendering'],
    },
    {
      name: 'Workflow',
      items: ['Design Systems', 'Testing', 'CI/CD', 'Observability', 'DX', 'Mentoring'],
    },
  ],
}

export const labsContent = {
  eyebrow: 'Labs',
  title: 'Experimentos, playgrounds y exploraciones técnicas.',
  description:
    'Espacio para demos pequeñas, ideas en progreso y piezas más experimentales que complementan el portfolio principal.',
  projects: [
    {
      eyebrow: 'Exploration',
      title: 'Animation studies',
      description:
        'Placeholder para micro-experimentos de motion, interaction design o rendering orientado al frontend craft.',
      meta: ['UI Motion', 'Canvas', 'Interaction'],
    },
    {
      eyebrow: 'Prototype',
      title: 'AI-assisted workflows',
      description:
        'Base para prototipos o herramientas personales donde explores productividad, automatización o UX asistida por IA.',
      meta: ['Automation', 'Prompt UX', 'Developer Tools'],
    },
    {
      eyebrow: 'Sandbox',
      title: 'Component ideas',
      description:
        'Lugar para patrones de interfaz, layouts o conceptos que luego podrían migrar a proyectos reales.',
      meta: ['Components', 'Patterns', 'Systems'],
    },
  ],
}

export const contactContent = {
  eyebrow: 'Contact',
  title: 'Canales, disponibilidad y próximo paso.',
  description:
    'Placeholder para cerrar con una invitación clara: contacto profesional, colaboraciones y enlaces clave.',
  channels: [
    {
      title: 'Email',
      description: 'Reemplaza este placeholder por tu correo principal de contacto.',
      meta: ['hello@yourdomain.dev'],
      href: 'mailto:hello@yourdomain.dev',
    },
    {
      title: 'LinkedIn',
      description: 'Espacio para tu perfil profesional y networking.',
      meta: ['linkedin.com/in/your-profile'],
      href: 'https://linkedin.com',
    },
    {
      title: 'GitHub',
      description: 'Placeholder para repositorios, labs y evidencia técnica pública.',
      meta: ['github.com/your-handle'],
      href: 'https://github.com',
    },
  ],
}
