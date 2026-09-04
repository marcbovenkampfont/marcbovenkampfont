import type { Language } from '@/i18n/types'
import type { Experience } from '@/types/content'

const experiencesByLanguage: Record<Language, Experience[]> = {
  es: [
    {
      id: 'free',
      date: '2023 - Presente',
      company: 'Freelance',
      projects: [
        {
          id: 'vizpro',
          projectName: 'VizPro - Software de Gestion de Analisis',
          title: 'Full Stack Developer',
          description:
            'Desarrollo de software para analisis individuales de futbolistas, clientes, analistas y venta. Proyecto desarrollado con React.js, Node.js y Supabase.',
        },
        {
          id: 'invoices',
          projectName: 'Self - Software de Gestion de Facturas',
          title: 'Full Stack Developer',
          description: 'Desarrollo de web para creacion de facturas personalizadas. Proyecto desarrollado con React.js.',
        },
        {
          id: 'tmc-allfunds',
          projectName: 'Allfunds - Plataforma de Gestion de Fondos',
          title: 'Frontend Developer',
          description:
            'Desarrollo y gestion de herramientas custom para clientes de Allfunds. Incluye flujos de blockchain, fondos de inversion y contratos inteligentes.',
        },
      ],
    },
    {
      id: 'tmc',
      date: '2024 - Presente',
      company: 'TMC',
      projects: [
        {
          id: 'tmc-inditex',
          projectName: 'TMC - INDITEX',
          title: 'Frontend Developer',
          description: 'Creacion y desarrollo de una herramienta transversal para la gestion de presupuestos en Inditex.',
        },
        {
          id: 'tmc-airbus',
          projectName: 'TMC - AIRBUS',
          title: 'Full Stack Developer',
          description:
            'Desarrollo de herramienta interna para supply officers de Airbus. Integre flujos de datos masivos con PySpark y disene vistas operativas con HTML, CSS y JavaScript para optimizar distribucion de piezas.',
        },
      ],
    },
    {
      id: 'nayar',
      date: '2022 - 2024',
      title: 'Frontend Developer',
      company: 'Nayar',
      description:
        'Desarrollo de soluciones IoT y creacion de Pulse, una app movil inclusiva impulsada con Flutter, Bluetooth y Dialogflow para control de ascensores por voz y tacto.',
    },
  ],
  en: [
    {
      id: 'free',
      date: '2023 - Present',
      company: 'Freelance',
      projects: [
        {
          id: 'vizpro',
          projectName: 'VizPro - Analytics Management Software',
          title: 'Full Stack Developer',
          description:
            'Built software for individual analytics of players, clients, analysts, and sales workflows. Project developed with React.js, Node.js, and Supabase.',
        },
        {
          id: 'invoices',
          projectName: 'Self - Invoice Management Software',
          title: 'Full Stack Developer',
          description: 'Built a web app for custom invoice creation. Project developed with React.js.',
        },
        {
          id: 'tmc-allfunds',
          projectName: 'Allfunds - Fund Management Platform',
          title: 'Frontend Developer',
          description:
            'Developed and maintained custom tools for Allfunds clients, including blockchain workflows, investment fund operations, and smart contracts.',
        },
      ],
    },
    {
      id: 'tmc',
      date: '2024 - Present',
      company: 'TMC',
      projects: [
        {
          id: 'tmc-inditex',
          projectName: 'TMC - INDITEX',
          title: 'Frontend Developer',
          description: 'Created and developed a cross-functional tool for budget management at Inditex.',
        },
        {
          id: 'tmc-airbus',
          projectName: 'TMC - AIRBUS',
          title: 'Full Stack Developer',
          description:
            'Built an internal tool for Airbus supply officers. Integrated large-scale data flows with PySpark and designed efficient operational views with HTML, CSS, and JavaScript.',
        },
      ],
    },
    {
      id: 'nayar',
      date: '2022 - 2024',
      title: 'Frontend Developer',
      company: 'Nayar',
      description:
        'Developed IoT solutions and built Pulse, an inclusive mobile app powered by Flutter, Bluetooth, and Dialogflow for voice and touch elevator control.',
    },
  ],
}

export const getExperiences = (language: Language): Experience[] => experiencesByLanguage[language]