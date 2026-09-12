import type { Language } from './types'

export interface AppTranslations {
  navigation: {
    inicio: string
    proyectos: string
    experiencia: string
    habilidades: string
    contacto: string
  }
  languageSwitcher: {
    ariaLabel: string
  }
  header: {
    subtitle: string
  }
  sections: {
    inicio: {
      title: string
      paragraphOne: string
      paragraphTwo: string
    }
    proyectos: {
      title: string
    }
    experiencia: {
      title: string
    }
    habilidades: {
      title: string
      groups: {
        frontend: string
        backendData: string
        toolsDevops: string
      }
    }
    contacto: {
      title: string
      intro: string
      phoneEs: string
      phoneMt: string
    }
  }
  projectCard: {
    role: string
    vinculo: string
    achievements: string
  }
  footer: {
    rights: string
    subtitle: string
  }
}

export const translations: Record<Language, AppTranslations> = {
  es: {
    navigation: {
      inicio: 'Inicio',
      proyectos: 'Proyectos',
      experiencia: 'Experiencia',
      habilidades: 'Habilidades',
      contacto: 'Contacto',
    },
    languageSwitcher: {
      ariaLabel: 'Selector de idioma',
    },
    header: {
      subtitle: 'Frontend & Full-Stack Developer',
    },
    sections: {
      inicio: {
        title: 'Acerca de mí',
        paragraphOne:
          'Matemático computacional y desarrollador Frontend especializado con sólidas competencias Full-Stack. Mi enfoque combina una rigurosa base analítica con el dominio de tecnologías modernas para diseñar interfaces de alto rendimiento y experiencias de usuario cuidadas al detalle, garantizando aplicaciones intuitivas, rápidas y visualmente impecables.',
        paragraphTwo:
          'Más allá de la capa visual, cuento con una sólida experiencia en el desarrollo integral de productos de software. Esto me permite abordar y resolver problemas complejos de principio a fin, conectando arquitecturas backend robustas, procesamiento de datos y APIs con interfaces limpias para construir soluciones escalables que responden con precisión a las necesidades del negocio.',
      },
      proyectos: {
        title: 'Proyectos Destacados',
      },
      experiencia: {
        title: 'Experiencia Profesional',
      },
      habilidades: {
        title: 'Habilidades Técnicas',
        groups: {
          frontend: 'Frontend',
          backendData: 'Backend y Datos',
          toolsDevops: 'Herramientas y DevOps',
        },
      },
      contacto: {
        title: 'Contacto',
        intro:
          'Abierto a colaboraciones en proyectos de desarrollo Frontend y Full Stack, así como consultoría técnica. Si tienes una idea o un reto tecnológico en mente, hablemos.',
        phoneEs: 'Teléfono (ES)',
        phoneMt: 'Teléfono (MT)',
      },
    },
    projectCard: {
      role: 'Rol',
      vinculo: 'Vínculo',
      achievements: 'Logros',
    },
    footer: {
      rights: 'Todos los derechos están reservados.',
      subtitle: 'Portfolio Profesional - Desarrollador Frontend y Full Stack',
    },
  },
  en: {
    navigation: {
      inicio: 'Home',
      proyectos: 'Projects',
      experiencia: 'Experience',
      habilidades: 'Skills',
      contacto: 'Contact',
    },
    languageSwitcher: {
      ariaLabel: 'Language switcher',
    },
    header: {
      subtitle: 'Frontend & Full-Stack Developer',
    },
    sections: {
      inicio: {
        title: 'About Me',
        paragraphOne:
          'Computational mathematician and Frontend developer with strong Full-Stack capabilities. My approach combines a rigorous analytical foundation with modern technologies to design high-performance interfaces and polished user experiences, delivering intuitive, fast, and visually refined applications.',
        paragraphTwo:
          'Beyond the visual layer, I bring solid experience building software products end-to-end. This allows me to solve complex problems from start to finish, connecting robust backend architectures, data processing, and APIs with clean interfaces to create scalable solutions aligned with business needs.',
      },
      proyectos: {
        title: 'Featured Projects',
      },
      experiencia: {
        title: 'Professional Experience',
      },
      habilidades: {
        title: 'Technical Skills',
        groups: {
          frontend: 'Frontend',
          backendData: 'Backend and Data',
          toolsDevops: 'Tools and DevOps',
        },
      },
      contacto: {
        title: 'Contact',
        intro:
          'Open to collaborations on Frontend and Full-Stack development projects, as well as technical consulting. If you have an idea or a technical challenge in mind, let us talk.',
        phoneEs: 'Phone (ES)',
        phoneMt: 'Phone (MT)',
      },
    },
    projectCard: {
      role: 'Role',
      vinculo: 'Context',
      achievements: 'Achievements',
    },
    footer: {
      rights: 'All rights reserved.',
      subtitle: 'Professional Portfolio - Frontend and Full-Stack Developer',
    },
  },
}
