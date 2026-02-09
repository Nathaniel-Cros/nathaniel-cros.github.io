const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.hidden = isOpen;
  });
}

const imagePlaceholders = document.querySelectorAll('.image-placeholder');
imagePlaceholders.forEach((placeholder) => {
  const img = placeholder.querySelector('img');
  if (!img) return;

  img.addEventListener('error', () => {
    placeholder.classList.add('is-empty');
  });

  img.addEventListener('load', () => {
    placeholder.classList.remove('is-empty');
  });

  if (img.complete && img.naturalWidth === 0) {
    placeholder.classList.add('is-empty');
  }
});

const translations = {
  es: {
    skip: 'Saltar al contenido',
    nav: {
      caseStudies: 'Case studies',
      brands: 'Marcas',
      repos: 'Repos',
      contact: 'Contacto',
      menu: 'Menu',
      menuToggle: 'Abrir menu',
    },
    hero: {
      eyebrow: 'Disponible para proyectos freelance y contract',
      title: 'Tech Lead Front-End | VTEX | React/Vite | Go',
      summary: 'Especializado en e-commerce VTEX y construccion de SaaS (NalyHist).',
      cv: 'Descargar CV',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    focus: {
      title: 'Enfoque',
      item1: {
        title: 'Arquitectura Front-End Escalable',
        body: 'Diseno y mantenimiento de arquitecturas front-end orientadas a e-commerce y productos digitales, con componentes reutilizables, control de estado claro y codigo facil de escalar.',
      },
      item2: {
        title: 'Performance, UX y conversion',
        body: 'Optimizacion de experiencias criticas (PLP, PDP y Checkout), enfocada en tiempos de carga, manejo de estados edge y reduccion de friccion para el usuario final.',
      },
      item3: {
        title: 'Customizacion e Integracion en VTEX',
        body: 'Desarrollo sobre VTEX Legacy y Store Framework: variantes, filtros, promociones e integracion con APIs, tracking y herramientas externas.',
      },
      item4: {
        title: 'Arquitectura Back-End y servicios',
        body: 'Implementacion de APIs y logica de negocio en Go, Node y PHP, con contratos claros y soporte a arquitecturas front-end modernas.',
      },
      item5: {
        title: 'DevOps y mejora de procesos',
        body: 'Automatizacion de flujos de desarrollo y despliegue mediante Docker, CI/CD y scripts, con el objetivo de reducir fallas humanas, mejorar la estabilidad y acelerar la entrega a produccion.',
      },
    },
    availability: {
      title: 'Disponibilidad',
      text: 'Proyectos remotos para equipos de producto y e-commerce.',
    },
    caseStudies: {
      title: 'Case studies',
      intro: 'Trabajos bajo NDA presentados como casos de estudio.',
      imageFallback: 'Anade tu captura aqui',
      nda: 'Repositorio y detalles protegidos por NDA.',
      case1: {
        title: 'VTEX PDP: Selector de Variantes',
        context: 'Contexto: PDP con catalogos complejos y variaciones por SKU.',
        bullet1: 'Disene un selector accesible con estados claros.',
        bullet2: 'Integre validaciones de stock en tiempo real.',
        bullet3: 'Reduje errores de seleccion en mobile.',
        stack: 'Stack: VTEX IO, React, TypeScript',
        impact: 'Impacto: Se mejoro la visualizacion de combinaciones de producto, evitando que opciones disponibles quedaran ocultas al cambiar talla o color, lo que redujo confusion del usuario y mejoro la claridad del estado del inventario.',
        imageAlt: 'Preview del case study VTEX PDP',
      },
      case2: {
        title: 'VTEX PLP: Filtros y UX',
        context: 'Contexto: PLP con alto volumen de productos y necesidad de integrar campanas comerciales sin afectar la experiencia de busqueda.',
        bullet1: 'Customizacion del search y logica de resultados.',
        bullet2: 'Integracion de banners dinamicos dentro del grid del PLP.',
        bullet3: 'Adaptacion responsive (desktop y mobile).',
        stack: 'Stack: VTEX IO, React, GraphQL',
        impact: 'Impacto: Se personalizo el flujo de busqueda y el layout del PLP, integrando banners comerciales sin afectar filtros ni navegacion, mejorando la visibilidad de campanas y la experiencia de exploracion.',
        imageAlt: 'Preview del case study VTEX PLP',
      },
      case3: {
        title: 'Checkout: Personalizacion UI',
        context: 'Contexto: checkout con requerimientos de marca y experimentos A/B.',
        bullet1: 'Unifique componentes para reducir debt.',
        bullet2: 'Mejore mensajes de error y feedback.',
        bullet3: 'Colabore con UX para iteraciones rapidas.',
        stack: 'Stack: VTEX Checkout, React, CSS Modules',
        impact: 'Impacto: [por completar]',
        imageAlt: 'Preview del case study Checkout',
      },
      case4: {
        title: 'Performance: Optimizacion LCP/CLS',
        context: 'Contexto: Sitio con latencia en vistas criticas (PLP y PDP) y problemas de estabilidad visual causados por carga de media y dependencias de renderizado.',
        bullet1: 'Auditoria de metricas LCP y CLS en flujos criticos.',
        bullet2: 'Optimizacion del critical rendering path.',
        bullet3: 'Implementacion de estrategias de carga para imagenes y media.',
        bullet4: 'Correccion de layout shifts mediante control de dimensiones y orden de render.',
        bullet5: 'Coordinacion de mejoras con backend y CDN.',
        stack: 'Stack: VTEX',
        impact: 'Impacto: Mejora en la estabilidad visual y tiempos de carga percibidos en PLP y PDP, reduciendo layout shifts y mejorando la experiencia de navegacion, especialmente en mobile.',
        imageAlt: 'Preview del case study Performance',
      },
      case5: {
        title: 'Infra: Deploy Docker + CI/CD',
        context: 'Contexto: pipelines manuales y despliegues inconsistentes.',
        bullet1: 'Disene pipelines con validaciones de calidad.',
        bullet2: 'Containerice servicios criticos.',
        bullet3: 'Estandarice la entrega continua.',
        stack: 'Stack: Docker, GitHub Actions, Go',
        impact: 'Impacto: [por completar]',
        imageAlt: 'Preview del case study Infra',
      },
    },
    brands: {
      title: 'Marcas y experiencia',
      disclaimer: 'Marcas mencionadas con fines descriptivos; no implica afiliacion.',
    },
    projects: {
      title: 'Proyectos en GitHub',
      intro: 'Puedes encontrar un indice de mis proyectos en GitHub. Algunos repositorios se mantienen privados o protegidos por NDA.',
      cta: 'Ver proyectos',
      index: 'Ver indice curado',
    },
    repos: {
      title: 'Repos publicos',
      intro: 'Espacio para compartir herramientas o snippets abiertos.',
      repo1: 'Utilidades para proyectos VTEX.',
      repo2: 'Plantillas para documentar proyectos.',
      repo3: 'CLI para automatizar tareas internas.',
    },
    contact: {
      title: 'Contacto',
      text: 'Listo para colaborar en productos e-commerce y SaaS.',
      cta: 'Hablemos',
    },
    footer: {
      text: '2024 © Nathaniel Ruiz. Todos los derechos reservados.',
    },
    cvHref: 'assets/cv/cv-es.pdf',
  },
  en: {
    skip: 'Skip to content',
    nav: {
      caseStudies: 'Case studies',
      brands: 'Brands',
      repos: 'Repos',
      contact: 'Contact',
      menu: 'Menu',
      menuToggle: 'Open menu',
    },
    hero: {
      eyebrow: 'Available for freelance and contract work',
      title: 'Tech Lead Front-End | VTEX | React/Vite | Go',
      summary: 'Specialized in VTEX e-commerce and SaaS building (NalyHist).',
      cv: 'Download CV',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    focus: {
      title: 'Focus',
      item1: {
        title: 'Scalable Front-End Architecture',
        body: 'Design and maintenance of front-end architectures for e-commerce and digital products, with reusable components, clear state management, and easy-to-scale code.',
      },
      item2: {
        title: 'Performance, UX, and conversion',
        body: 'Optimization of critical experiences (PLP, PDP, and Checkout), focused on load times, edge case handling, and reducing friction for end users.',
      },
      item3: {
        title: 'VTEX Customization and Integration',
        body: 'Development on VTEX Legacy and Store Framework: variants, filters, promotions, and integration with APIs, tracking, and external tools.',
      },
      item4: {
        title: 'Back-end architecture and services',
        body: 'Implementation of APIs and business logic in Go, Node, and PHP, with clear contracts and support for modern front-end architectures.',
      },
      item5: {
        title: 'DevOps and Process Improvement',
        body: 'Automation of development and deployment flows using Docker, CI/CD, and scripts to reduce human error, improve stability, and speed up production delivery.',
      },
    },
    availability: {
      title: 'Availability',
      text: 'Remote projects for product and e-commerce teams.',
    },
    caseStudies: {
      title: 'Case studies',
      intro: 'NDA work presented as case studies.',
      imageFallback: 'Add your screenshot here',
      nda: 'Repository and details protected by NDA.',
      case1: {
        title: 'VTEX PDP: Variant Selector',
        context: 'Context: PDP with complex catalogs and SKU variations.',
        bullet1: 'Designed an accessible selector with clear states.',
        bullet2: 'Integrated real-time stock validation.',
        bullet3: 'Reduced selection errors on mobile.',
        stack: 'Stack: VTEX IO, React, TypeScript',
        impact: 'Impact: Improved visibility of product combinations, preventing available options from being hidden when switching size or color, reducing user confusion and clarifying inventory state.',
        imageAlt: 'Preview of VTEX PDP case study',
      },
      case2: {
        title: 'VTEX PLP: Filters and UX',
        context: 'Context: PLP with high product volume and the need to integrate commercial campaigns without hurting search experience.',
        bullet1: 'Search customization and result logic.',
        bullet2: 'Integrated dynamic banners inside the PLP grid.',
        bullet3: 'Responsive adaptation (desktop and mobile).',
        stack: 'Stack: VTEX IO, React, GraphQL',
        impact: 'Impact: Personalized the search flow and PLP layout, integrating commercial banners without affecting filters or navigation, improving campaign visibility and exploration experience.',
        imageAlt: 'Preview of VTEX PLP case study',
      },
      case3: {
        title: 'Checkout: UI Customization',
        context: 'Context: checkout with brand requirements and A/B tests.',
        bullet1: 'Unified components to reduce debt.',
        bullet2: 'Improved error messaging and feedback.',
        bullet3: 'Partnered with UX for rapid iteration.',
        stack: 'Stack: VTEX Checkout, React, CSS Modules',
        impact: 'Impact: Optimized the checkout experience with reusable components and clear feedback messages, improving flow comprehension and reducing friction in the payment process.',
        imageAlt: 'Preview of Checkout case study',
      },
      case4: {
        title: 'Performance: LCP/CLS Optimization',
        context: 'Context: latency on critical views (PLP and PDP) and visual stability issues caused by media loading and render dependencies.',
        bullet1: 'Audited LCP and CLS metrics on critical flows.',
        bullet2: 'Optimized the critical rendering path.',
        bullet3: 'Implemented loading strategies for images and media.',
        bullet4: 'Fixed layout shifts by controlling dimensions and render order.',
        bullet5: 'Coordinated improvements with backend and CDN.',
        stack: 'Stack: VTEX',
        impact: 'Impact: Improved visual stability and perceived load times on PLP and PDP, reducing layout shifts and improving navigation, especially on mobile.',
        imageAlt: 'Preview of Performance case study',
      },
      case5: {
        title: 'Infra: Docker Deploy + CI/CD',
        context: 'Context: manual pipelines and inconsistent deployments.',
        bullet1: 'Designed pipelines with quality validations.',
        bullet2: 'Containerized critical services.',
        bullet3: 'Standardized continuous delivery.',
        stack: 'Stack: Docker, GitHub Actions, Go',
        impact: 'Impact: Automated the build and deploy process with Docker and CI/CD, reducing human errors and improving reliability in continuous delivery of critical services.',
        imageAlt: 'Preview of Infra case study',
      },
    },
    brands: {
      title: 'Brands and experience',
      disclaimer: 'Brands mentioned for descriptive purposes; no affiliation implied.',
    },
    projects: {
      title: 'Projects on GitHub',
      intro: 'You can find an index of my projects on GitHub. Some repositories are private or protected by NDA.',
      cta: 'View projects',
      index: 'View curated index',
    },
    repos: {
      title: 'Public repositories',
      intro: 'Space to share open tools and snippets.',
      repo1: 'Utilities for VTEX projects.',
      repo2: 'Templates to document projects.',
      repo3: 'CLI to automate internal tasks.',
    },
    contact: {
      title: 'Contact',
      text: 'Ready to collaborate on e-commerce and SaaS products.',
      cta: 'Let us talk',
    },
    footer: {
      text: '2024 © Nathaniel Ruiz. All rights reserved.',
    },
    cvHref: 'assets/cv/cv-en.pdf',
  },
};

const langButtons = document.querySelectorAll('.lang-btn');
const i18nTargets = document.querySelectorAll('[data-i18n]');
const i18nHrefTargets = document.querySelectorAll('[data-i18n-href]');
const i18nAltTargets = document.querySelectorAll('[data-i18n-alt]');

const getValue = (dict, key) =>
  key.split('.').reduce((acc, part) => (acc ? acc[part] : null), dict);

const setLanguage = (lang) => {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;

  i18nTargets.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = key ? getValue(dict, key) : null;
    if (typeof value === 'string') {
      el.textContent = value;
    }
  });

  i18nHrefTargets.forEach((el) => {
    const key = el.getAttribute('data-i18n-href');
    const value = key ? dict[key] : null;
    if (typeof value === 'string') {
      el.setAttribute('href', value);
    }
  });

  i18nAltTargets.forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    const value = key ? getValue(dict, key) : null;
    if (typeof value === 'string') {
      el.setAttribute('alt', value);
    }
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  localStorage.setItem('site-lang', lang);
};

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const savedLang = localStorage.getItem('site-lang');
setLanguage(savedLang || 'es');
