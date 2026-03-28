export const en = {
  site: {
    brand: 'Oscar Nathaniel Ruiz Pérez',
  },

  header: {
    tagline: 'Portfolio Lab',
    navAriaLabel: 'Main',
    localeAriaLabel: 'Change language',
  },

  navigation: {
    items: [
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Selected Work', href: '#work' },
      { label: 'Stack', href: '#stack' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  hero: {
    eyebrow: 'Tech Lead / Fullstack Developer',
    title: 'I build scalable web products.',
    description:
      'I combine frontend, backend, and architecture to build resilient systems with real business impact.',
    actions: [
      { label: 'Email me', href: 'mailto:oscnathanielrp@gmail.com', variant: 'primary' },
      {
        label: 'Download CV',
        href: '/downloads/en_cv.pdf',
        variant: 'secondary',
        download: 'Oscar-Nathaniel-Ruiz-CV-EN.pdf',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      { label: 'View experience', href: '#experience', variant: 'secondary' },
      { label: 'Contact', href: '#contact', variant: 'secondary' },
    ],
    highlights: ['Web Apps', 'Architecture', 'Performance', 'Fullstack'],
    metrics: [
      { label: 'Experience', value: '8+ years' },
      { label: 'Focus', value: 'Systems & product' },
      { label: 'Brands', value: '10+ international' },
      { label: 'Location', value: 'Atlixco, Puebla' },
    ],
    snapshotLabel: 'Quick summary',
  },

  about: {
    eyebrow: 'About',
    title: 'Product-driven engineering with strong technical judgment.',
    description:
      'I have worked in high-impact environments where technical quality, adaptability, and delivery speed directly affect business outcomes. Frontend is where I contribute most strongly, but I actively participate in backend, architecture, and integrations when the product requires it.',
    cards: [
      {
        eyebrow: 'Focus',
        title: 'High-impact product work',
        description:
          'I work on critical product flows with strong attention to performance, stability, and user experience.',
        meta: ['UX', 'Performance', 'LCP / CLS'],
      },
      {
        eyebrow: 'Scope',
        title: 'Technical leadership',
        description:
          'I help define scalable solutions, align technical decisions, and collaborate directly with teams and stakeholders.',
        meta: ['Architecture', 'Systems', 'Delivery'],
      },
      {
        eyebrow: 'Capability',
        title: 'Adaptable fullstack',
        description:
          'I move across frontend, backend, and tooling when it adds real value to the product or accelerates delivery.',
        meta: ['Node.js', 'Python', 'Go', 'PHP'],
      },
    ],
  },

  experience: {
    eyebrow: 'Experience',
    title: 'Recent roles focused on delivery, technical clarity, and operational impact.',
    description:
      'A selected view of recent experience, focused on context, contribution, and outcomes.',
    roles: [
      {
        role: 'Tech Lead Frontend',
        company: 'Vinneren (Grupo AXO)',
        period: 'Nov 2024 - Present',
        summary:
          'Leads a technical cell responsible for implementations across multiple international brands within the Grupo AXO ecosystem.',
        highlights: [
          'Coordinates the team and defines scalable frontend solutions on VTEX.',
          'Works directly with clients to shape requirements and technical decisions.',
          'Built an internal CLI to improve delivery workflows and team productivity.',
        ],
        impact:
          'Contributed across more than 10 international brands, including Guess, Tommy Hilfiger, Coach, Victoria’s Secret, and Bath & Body Works.',
      },
      {
        role: 'Senior Fullstack Developer',
        company: 'Corebiz',
        period: 'Feb 2023 - Nov 2024',
        summary:
          'Built frontend and backend solutions for digital products, combining implementation, technical definition, and direct client collaboration.',
        highlights: [
          'Delivered fullstack solutions on top of VTEX.',
          'Participated in requirements gathering, estimations, and solution definition.',
          'Implemented new functionality for Chedraui from the ground up.',
        ],
        impact:
          'Helped improve performance and scalability across multiple projects.',
      },
      {
        role: 'Frontend Developer',
        company: 'Factumex',
        period: 'Nov 2022 - Feb 2023',
        summary:
          'Worked on feature development for Baz, the Grupo Salinas application.',
        highlights: [
          'Contributed to frontend delivery of new product functionality.',
          'Participated in a technical restructuring phase of the application.',
        ],
        impact:
          'Helped strengthen the project’s technical foundation during a key transition phase.',
      },
      {
        role: 'Frontend Developer',
        company: 'Corebiz',
        period: 'Mar 2021 - Nov 2022',
        summary:
          'Built interfaces and features for digital products with a strong focus on React and VTEX IO.',
        highlights: [
          'Implemented React views and worked directly on VTEX IO.',
          'Contributed to projects for Elektra, Walmart, Chedraui, and Grainger.',
          'Worked on OnCity and modules for internal tools and integrated applications.',
        ],
        impact:
          'Supported migrations and multi-client delivery in an international, high-volume environment.',
      },
    ],
    impactLabel: 'Impact',
  },

  work: {
    eyebrow: 'Selected Work',
    title: 'Selected work focused on impact, technical judgment, and execution.',
    description:
      'This is a short selection of relevant work. The goal is not to list tasks, but to show the problems I helped solve and where I created the most value.',
    impactLabel: 'Outcome',
    items: [
      {
        title: 'Multi-brand VTEX implementations',
        description:
          'Led and delivered e-commerce implementations for multiple international brands within the same ecosystem, maintaining technical consistency and delivery speed.',
        tags: ['VTEX', 'Frontend Architecture', 'Delivery'],
        impact:
          'Direct work across more than 10 international brands in the Grupo AXO context.',
      },
      {
        title: 'Internal CLI for VTEX workflows',
        description:
          'Built an internal tool to reduce operational friction in repetitive tasks and speed up team workflows on VTEX.',
        tags: ['CLI', 'Automation', 'VTEX'],
        impact:
          'Improved team productivity and made delivery flows more consistent.',
      },
      {
        title: 'New functionality for Chedraui',
        description:
          'Helped implement new e-commerce functionality from the ground up, combining technical definition with fullstack execution.',
        tags: ['VTEX', 'Fullstack', 'E-commerce'],
        impact:
          'Supported new product capabilities on top of a more scalable foundation.',
      },
      {
        title: 'VTEX IO migration and internal modules',
        description:
          'Contributed to initiatives like OnCity and to modules for admin tools and integrated applications on VTEX IO.',
        tags: ['React', 'VTEX IO', 'Migration'],
        impact:
          'Supported migration work and multi-client operations in an international setup.',
      },
      {
        title: 'Performance work on critical flows',
        description:
          'Worked on high-impact experiences such as PLP, PDP, and checkout, with focus on stability, UX, and performance.',
        tags: ['Performance', 'LCP / CLS', 'UX'],
        impact:
          'Aimed at delivering faster and more consistent e-commerce experiences.',
      },
    ],
  },

  stack: {
    eyebrow: 'Stack',
    title: 'Technical capabilities organized by working context, not by trend.',
    description:
      'The stack is grouped to show how I work and where I usually create the most value, instead of turning the section into a flat technology list.',
    groups: [
      {
        eyebrow: 'Frontend',
        title: 'Frontend',
        description:
          'Building critical interfaces, e-commerce experiences, and UI systems with a strong focus on performance.',
        items: ['React', 'Vue', 'Angular', 'VTEX IO / Legacy', 'Vite', 'Tailwind CSS'],
      },
      {
        eyebrow: 'Backend',
        title: 'Backend',
        description:
          'Backend support for integrations, APIs, automation, and targeted product needs.',
        items: ['Node.js', 'Python', 'Go', 'PHP'],
      },
      {
        eyebrow: 'Architecture & Delivery',
        title: 'Architecture & Delivery',
        description:
          'Technical definition, tooling, and operational practices that support consistent delivery across complex projects.',
        items: ['Solution Architecture', 'CI/CD', 'Docker', 'Git', 'Jira', 'CLI Tooling'],
      },
      {
        eyebrow: 'Product Domains',
        title: 'Product Domains',
        description:
          'Areas where technical work connects most directly with business goals and user experience.',
        items: ['E-commerce', 'PLP / PDP / Checkout', 'Performance', 'Integrations', 'UX'],
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Direct professional contact.',
    description:
      'Available channels for opportunities, collaboration, and technical conversations.',
    channels: [
      {
        title: 'Email',
        value: 'oscnathanielrp@gmail.com',
        description: 'Primary channel for opportunities and collaboration.',
        href: 'mailto:oscnathanielrp@gmail.com',
      },
      {
        title: 'Phone',
        value: '55 4695 9000',
        description: 'Available in Mexico for direct follow-up.',
        href: 'tel:+525546959000',
      },
      {
        title: 'Location',
        value: 'Atlixco, Puebla',
        description: 'Currently based in Mexico.',
      },
      {
        title: 'LinkedIn',
        value: 'linkedin.com/in/oscar-nathaniel-ruiz-perez',
        description: 'Professional background, experience, and work context.',
        href: 'https://www.linkedin.com/in/oscar-nathaniel-ruiz-perez-8841a316a/',
      },
      {
        title: 'GitHub',
        value: 'github.com/Nathaniel-Cros',
        description: 'Projects, code, and technical explorations.',
        href: 'https://github.com/Nathaniel-Cros/',
      },
    ],
  },
}
