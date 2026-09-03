import type { Project } from '@/sections/Projects/Proyectos'

const projects: Project[] = [
  {
    id: 'cost-control',
    title: 'Cost Control',
    description: `Aplicación móvil multiplataforma de gestión financiera personal y familiar.
    Arquitectura robusta que integra Firebase para sincronización en tiempo real y un sistema de almacenamiento basado en ficheros de text(.txt) utilizando path_provider y dart:io.
    Implementa análisis predictivo de gastos, categorización inteligente de transacciones, y generación de informes detallados con visualizaciones interactivas.`,
    image: 'cost_control.jpg',
    fallbackIcon: '💰',
    tags: ['flutter', 'dart', 'firebase'],
    role: 'Creador & Arquitecto & Desarrollador Principal',
    vinculo: 'Creación propia para gestión financiera personal y familiar',
    achievements: 'Diseño, desarrollo y publicación exitosa de mi primera aplicación móvil en Google Play Store.'
  },
  {
    id: 'vizpro',
    title: 'VizPro Extranet',
    description: 'Plataforma B2B de visualización y análisis de datos empresariales. Stack completo con React, Node.js y Supabase. Implementación de sistema de autenticación OAuth 2.0. La aplicación centraliza flujos de trabajo complejos, permitiendo un control de datos eficiente y una visualización optimizada para la toma de decisiones estratégicas. Un proyecto desarrollado con un fuerte enfoque en la arquitectura Frontend y la robustez del Backend para dar soporte a operaciones del mundo real.',
    image: 'vizpro.png',
    fallbackIcon: '📊',
    tags: ['react', 'nodejs', 'supabase'],
    role: 'Tech Lead & Full Stack Developer',
    vinculo: 'Cliente como freelance',
  },
  {
    id: 'invoice-creator',
    title: 'Invoice Creator',
    description: 'Aplicación web minimalista e intuitiva para la creación y exportación de facturas. Permite generar documentos en PDF de forma rápida, con diseño responsive y persistencia automática de datos en el navegador para que no pierdas tu información al recargar.',
    image: 'invoice-creator.png',
    fallbackIcon: '📄',
    tags: ['react', 'pdfjs', 'scss', 'responsive'],
    role: 'Creador & Desarrollador Frontend',
    vinculo: 'Creación propia para gestión de facturación'
  },
  {
    id: 'afb-frontend',
    title: 'Allfunds Bank Frontend',
    description: 'Plataforma empresarial de banca digital para gestión de fondos de inversión. Desarrollo de interfaz compleja con React y TypeScript. Gestión de herrimientas custom para los clientes de la plataforma Allfunds - Blockchain, gestión de fondos de inversión mediante el uso de tecnología blockchain y contratos inteligentes.',
    image: 'afb-frontend.png',
    fallbackIcon: '🏦',
    tags: ['react', 'typescript', 'performance-optimization'],
    role: 'Senior Frontend Developer',
    vinculo: 'Cliente a través de la consultora TMC, como freelance',
    achievements: 'Reducción del 40% en tiempo de carga mediante optimización de bundles y lazy loading'
  },
  {
    id: 'grupo-life',
    title: 'Grupo Life - Pausas Activas (UJI)',
    description: 'Plataforma web responsive desarrollada para el Grupo Life de la Universitat Jaume I (UJI). Permite al profesorado guiar sesiones de pausas activas con los alumnos en clase, mientras recopila y almacena datos de uso para que el equipo investigador analice los resultados.',
    image: 'grupo-life.png',
    fallbackIcon: '🏃‍♂️',
    tags: ['react', 'nodejs', 'supabase', 'responsive'],
    role: 'Desarrollador FullStack',
    vinculo: 'Grupo Life UJI como freelance'
  },
]

export default projects