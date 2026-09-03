import type { Experience } from "@/sections/Experience/Experiencia"

export const experiences: Experience[] = [
  {
    id: 'free',
    date: '2023 - Presente',
    company: 'Freelance',
    projects: [
      {
        id: "vizpro",
        projectName: 'VizPro - Software de Gestión de Análisis',
        title: 'Full Stack Developer',
        description: 'Desarrollo de software de gestión de análisis individuales de futbolistas, clientes, analistas y venta. Projecto desarrollado con React.js, Node.js y Supabase.'
      },
      {
        id: "invoices",
        projectName: 'Self - Software de Gestión de Facturas',
        title: 'Full Stack Developer',
        description: 'Desarrollo de web para creación de facturas personalizadas. Proyecto desarrollado con React.js.'
      },
      {
        id: "tmc-allfunds",
        projectName: 'Allfunds - Plataforma de Gestión de Fondos',
        title: 'Frontend Developer',
        description: 'Desarrollo y gestión de herrimientas custom para los clientes de la plataforma Allfunds - Blockchain, gestión de fondos de inversión mediante el uso de tecnología blockchain y contratos inteligentes.'
      }
    ]
  },
  {
    id: 'tmc',
    date: '2024 - Presente',
    company: 'TMC',
    projects: [
      {
        id: "tmc-inditex",
        projectName: 'TMC - INDITEX',
        title: 'Frontend Developer',
        description: 'Creación y desarrollo de una herramienta transversal para la gestión de presupuestos en Inditex.'
      },
      {
        id: "tmc-airbus",
        projectName: 'TMC - AIRBUS',
        title: 'Full Stack Developer',
        description: 'Desarrollo de herramienta interna para supply officers de Airbus. Integré flujos de datos masivos con PySpark y diseñé vistas operativas y eficientes con HTML, CSS y JavaScript para optimizar la distribución de piezas de aviones.'
      }
    ]
  },
  {
    id: 'nayar',
    date: '2022 - 2024',
    title: 'Frontend Developer',
    company: 'Nayar',
    description: 'Desarrollo de soluciones IoT y creación de Pulse, una app móvil inclusiva impulsada con Flutter, Bluetooth y Dialogflow para control de ascensores por voz y tacto.'
  },
]