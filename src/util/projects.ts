import type { Language } from '@/i18n/types'
import type { Project } from '@/types/content'

const projectsByLanguage: Record<Language, Project[]> = {
  es: [
    {
      id: 'cost-control',
      title: 'Cost Control',
      description:
        'Aplicación móvil multiplataforma de gestión financiera personal y familiar. Arquitectura robusta que integra Firebase para sincronización en tiempo real y un sistema de almacenamiento basado en ficheros de texto (.txt) utilizando path_provider y dart:io. Implementa análisis predictivo de gastos, categorización inteligente de transacciones y generación de informes detallados con visualizaciones interactivas.',
      image: 'cost_control.jpg',
      fallbackIcon: '💰',
      tags: ['flutter', 'dart', 'firebase'],
      role: 'Creador, Arquitecto y Desarrollador Principal',
      vinculo: 'Creación propia para gestión financiera personal y familiar',
      achievements:
        'Diseño, desarrollo y publicación exitosa de mi primera aplicación móvil en Google Play Store.',
    },
    {
      id: 'vizpro',
      title: 'VizPro Intranet',
      description:
        'Plataforma B2B de visualización y análisis de datos empresariales. Stack completo con React, Node.js y Supabase. Implementación de sistema de autenticación OAuth 2.0. La aplicación centraliza flujos de trabajo complejos, permitiendo un control de datos eficiente y una visualización optimizada para la toma de decisiones estratégicas.',
      image: 'vizpro.png',
      fallbackIcon: '📊',
      tags: ['react', 'nodejs', 'supabase'],
      role: 'Tech Lead y Full Stack Developer',
      vinculo: 'Cliente como freelance',
    },
    {
      id: 'invoice-creator',
      title: 'Invoice Creator',
      description:
        'Aplicación web minimalista e intuitiva para la creación y exportación de facturas. Permite generar documentos en PDF de forma rápida, con diseño responsive y persistencia automática de datos en el navegador.',
      image: 'invoice-creator.png',
      fallbackIcon: '📄',
      tags: ['react', 'pdfjs', 'scss', 'responsive'],
      role: 'Creador y Desarrollador Frontend',
      vinculo: 'Creación propia para gestión de facturación',
    },
    {
      id: 'afb-frontend',
      title: 'Allfunds Bank Frontend',
      description:
        'Plataforma empresarial de banca digital para gestión de fondos de inversión. Desarrollo de interfaz compleja con React y TypeScript. Gestión de herramientas custom para clientes de la plataforma Allfunds, incluyendo iniciativas de blockchain y contratos inteligentes.',
      image: 'afb-frontend.png',
      fallbackIcon: '🏦',
      tags: ['react', 'typescript', 'performance-optimization'],
      role: 'Senior Frontend Developer',
      vinculo: 'Cliente a través de la consultora TMC, como freelance',
    },
    // {
    //   id: 'grupo-life',
    //   title: 'Grupo Life - Pausas Activas (UJI)',
    //   description: 'Plataforma web responsive desarrollada para el Grupo Life de la Universitat Jaume I (UJI). Permite al profesorado guiar sesiones de pausas activas con los alumnos en clase, mientras recopila y almacena datos de uso para que el equipo investigador analice los resultados.',
    //   image: 'grupo-life.png',
    //   fallbackIcon: '🏃‍♂️',
    //   tags: ['react', 'nodejs', 'supabase', 'responsive'],
    //   role: 'Desarrollador FullStack',
    //   vinculo: 'Grupo Life UJI como freelance'
    // },
  ],
  en: [
    {
      id: 'cost-control',
      title: 'Cost Control',
      description:
        'Cross-platform mobile app for personal and family financial management. It uses Firebase for real-time sync and a file-based text storage system (.txt) with path_provider and dart:io. Includes predictive expense analysis, smart transaction categorization, and detailed reporting with interactive visualizations.',
      image: 'cost_control.jpg',
      fallbackIcon: '💰',
      tags: ['flutter', 'dart', 'firebase'],
      role: 'Creator, Architect and Lead Developer',
      vinculo: 'Personal product for individual and family finance management',
      achievements: 'Designed, built, and successfully published my first mobile app on Google Play Store.',
    },
    {
      id: 'vizpro',
      title: 'VizPro Intranet',
      description:
        'B2B platform for business data visualization and analytics. Full stack built with React, Node.js, and Supabase, including OAuth 2.0 authentication. The app centralizes complex workflows and enables efficient data control for strategic decision-making.',
      image: 'vizpro.png',
      fallbackIcon: '📊',
      tags: ['react', 'nodejs', 'supabase'],
      role: 'Tech Lead and Full Stack Developer',
      vinculo: 'Freelance client project',
    },
    {
      id: 'invoice-creator',
      title: 'Invoice Creator',
      description:
        'Minimal and intuitive web app for invoice creation and export. It generates PDF documents quickly, with responsive design and automatic browser persistence to keep user data after reloads.',
      image: 'invoice-creator.png',
      fallbackIcon: '📄',
      tags: ['react', 'pdfjs', 'scss', 'responsive'],
      role: 'Creator and Frontend Developer',
      vinculo: 'Personal product for invoicing workflows',
    },
    {
      id: 'afb-frontend',
      title: 'Allfunds Bank Frontend',
      description:
        'Enterprise digital banking platform for investment fund management. Built complex UI features with React and TypeScript. Delivered custom tools for Allfunds clients, including blockchain-related fund management and smart-contract workflows.',
      image: 'afb-frontend.png',
      fallbackIcon: '🏦',
      tags: ['react', 'typescript', 'performance-optimization'],
      role: 'Senior Frontend Developer',
      vinculo: 'Freelance engagement through TMC consulting',
    },
    // {
    //   id: 'grupo-life',
    //   title: 'Grupo Life - Active Breaks (UJI)',
    //   description:
    //     'Responsive web platform developed for the Life Group at Universitat Jaume I (UJI). It allows teachers to guide active-break sessions with students in class, while collecting and storing usage data so the research team can analyze outcomes.',
    //   image: 'grupo-life.png',
    //   fallbackIcon: '🏃‍♂️',
    //   tags: ['react', 'nodejs', 'supabase', 'responsive'],
    //   role: 'Full Stack Developer',
    //   vinculo: 'Freelance project for Grupo Life at UJI',
    // },
  ],
}

export const getProjects = (language: Language): Project[] => projectsByLanguage[language]