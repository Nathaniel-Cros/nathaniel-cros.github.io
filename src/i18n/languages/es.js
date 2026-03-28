export const es = {
  site: {
    brand: 'Oscar Nathaniel Ruiz Pérez',
  },

  header: {
    tagline: 'Portfolio Lab',
    navAriaLabel: 'Principal',
    localeAriaLabel: 'Cambiar idioma',
  },

  navigation: {
    items: [
      { label: 'Sobre mí', href: '#about' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Contacto', href: '#contact' },
    ],
  },

  hero: {
    eyebrow: 'Tech Lead / Fullstack Developer',
    title: 'Construyo productos web escalables.',
    description:
      'Combino frontend, backend y arquitectura para construir sistemas sólidos, adaptables y con impacto real en negocio.',
    actions: [
      { label: 'Escríbeme', href: 'mailto:oscnathanielrp@gmail.com', variant: 'primary' },
      { label: 'Ver experiencia', href: '#experience', variant: 'secondary' },
      { label: 'Contacto', href: '#contact', variant: 'secondary' },
    ],
    highlights: ['Web Apps', 'Arquitectura', 'Performance', 'Fullstack'],
    metrics: [
      { label: 'Experiencia', value: '8+ años' },
      { label: 'Enfoque', value: 'Sistemas y producto' },
      { label: 'Marcas', value: '10+ internacionales' },
      { label: 'Ubicación', value: 'Atlixco, Puebla' },
    ],
    snapshotLabel: 'Resumen rápido',
  },

  about: {
    eyebrow: 'Sobre mí',
    title: 'Construcción de productos con criterio técnico y enfoque de sistema.',
    description:
      'He trabajado en entornos de alto impacto donde la calidad técnica, la adaptabilidad y la velocidad de entrega son clave. Mi fortaleza está en frontend, pero participo activamente en backend, arquitectura e integraciones cuando el producto lo requiere.',
    cards: [
      {
        eyebrow: 'Enfoque',
        title: 'Experiencias de alto impacto',
        description:
          'Trabajo sobre flujos críticos de producto, priorizando performance, estabilidad y experiencia de usuario.',
        meta: ['UX', 'Performance', 'LCP / CLS'],
      },
      {
        eyebrow: 'Alcance',
        title: 'Liderazgo técnico',
        description:
          'Defino soluciones escalables, alineo decisiones técnicas y colaboro directamente con equipos y stakeholders.',
        meta: ['Arquitectura', 'Sistemas', 'Delivery'],
      },
      {
        eyebrow: 'Capacidad',
        title: 'Fullstack adaptable',
        description:
          'Me muevo entre frontend, backend y tooling cuando aporta valor real al producto o acelera la entrega.',
        meta: ['Node.js', 'Python', 'Go', 'PHP'],
      },
    ],
  },

  experience: {
    eyebrow: 'Experiencia',
    title: 'Roles recientes enfocados en delivery, claridad técnica e impacto operativo.',
    description:
      'Una selección de experiencia reciente enfocada en contexto, contribución y resultados.',
    roles: [
      {
        role: 'Tech Lead Frontend',
        company: 'Vinneren (Grupo AXO)',
        period: 'Nov 2024 - Actual',
        summary:
          'Lidero una célula técnica responsable de implementaciones para múltiples marcas internacionales dentro del ecosistema de Grupo AXO.',
        highlights: [
          'Coordino al equipo y defino soluciones frontend escalables sobre VTEX.',
          'Trabajo directamente con clientes para aterrizar requerimientos y decisiones técnicas.',
          'Desarrollé un CLI interno para optimizar flujos de entrega y mejorar la productividad del equipo.',
        ],
        impact:
          'He contribuido en más de 10 marcas internacionales, incluyendo Guess, Tommy Hilfiger, Coach, Victoria’s Secret y Bath & Body Works.',
      },
      {
        role: 'Senior Fullstack Developer',
        company: 'Corebiz',
        period: 'Feb 2023 - Nov 2024',
        summary:
          'Desarrollé soluciones frontend y backend para proyectos digitales, combinando implementación, definición técnica y colaboración directa con cliente.',
        highlights: [
          'Entregué soluciones fullstack sobre VTEX.',
          'Participé en levantamiento de requerimientos, estimaciones y definición de soluciones.',
          'Implementé nuevas funcionalidades para Chedraui desde cero.',
        ],
        impact:
          'Contribuí a mejorar performance y escalabilidad en distintos proyectos.',
      },
      {
        role: 'Frontend Developer',
        company: 'Factumex',
        period: 'Nov 2022 - Feb 2023',
        summary:
          'Participé en el desarrollo de funcionalidades para Baz, la aplicación de Grupo Salinas.',
        highlights: [
          'Colaboré en la entrega de nuevas funcionalidades de producto.',
          'Participé en una etapa de reestructuración técnica de la aplicación.',
        ],
        impact:
          'Ayudé a fortalecer la base técnica del proyecto durante una fase clave.',
      },
      {
        role: 'Frontend Developer',
        company: 'Corebiz',
        period: 'Mar 2021 - Nov 2022',
        summary:
          'Desarrollé interfaces y funcionalidades para proyectos digitales con foco en React y VTEX IO.',
        highlights: [
          'Implementé vistas en React y trabajé directamente sobre VTEX IO.',
          'Participé en proyectos para Elektra, Walmart, Chedraui y Grainger.',
          'Colaboré en OnCity y en módulos para herramientas internas y aplicaciones integradas.',
        ],
        impact:
          'Apoyé migraciones y entregas multi-cliente en un entorno internacional y de alto volumen.',
      },
    ],
    impactLabel: 'Impacto',
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Contacto profesional directo.',
    description:
      'Canales disponibles para oportunidades, colaboración y conversaciones técnicas.',
    channels: [
      {
        title: 'Email',
        value: 'oscnathanielrp@gmail.com',
        description: 'Canal principal para oportunidades y colaboración.',
        href: 'mailto:oscnathanielrp@gmail.com',
      },
      {
        title: 'Teléfono',
        value: '+5255 4695 9000',
        description: 'Disponible en México para seguimiento directo.',
        href: 'tel:+525546959000',
      },
      {
        title: 'Ubicación',
        value: 'Atlixco, Puebla',
        description: 'Base actual en México.',
      },
      {
        title: 'LinkedIn',
        value: 'Pendiente',
        description: 'Se puede agregar en la siguiente iteración.',
      },
      {
        title: 'GitHub',
        value: 'Pendiente',
        description: 'Se puede agregar en la siguiente iteración.',
      },
    ],
  },
}