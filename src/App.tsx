import { useState, useEffect } from 'react'
import Header from '@/components/Header/Header'
import Navigation from '@/components/Navigation/Navigation'
import ScrollIndicator from '@/components/ScrollIndicator/ScrollIndicator'
import Inicio from '@/sections/Index/Inicio'
import Proyectos from '@/sections/Projects/Proyectos'
import Experiencia from '@/sections/Experience/Experiencia'
import Habilidades from '@/sections/Skills/Habilidades'
import Contacto from '@/sections/Contact/Contacto'
import Footer from '@/components/Footer/Footer'
import './styles/App.scss'

type Section = 'inicio' | 'proyectos' | 'experiencia' | 'habilidades' | 'contacto'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('inicio')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calcular progreso del scroll
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)

      // Detectar qué sección está visible
      const sections = ['inicio', 'proyectos', 'experiencia', 'habilidades', 'contacto']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId as Section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionChange = (section: Section) => {
    const element = document.getElementById(section)
    if (element) {
      const headerOffset = 210 // Altura aproximada del header + nav
      const elementPosition = element.offsetTop - headerOffset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <ScrollIndicator progress={scrollProgress} />
      <div className="container">
        <div className="header-wrapper">
          <Header />
          <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
        </div>
        
        <main className="content">
          <section id="inicio" className="section">
            <Inicio />
          </section>
          
          <section id="proyectos" className="section">
            <Proyectos />
          </section>
          
          <section id="experiencia" className="section">
            <Experiencia />
          </section>
          
          <section id="habilidades" className="section">
            <Habilidades />
          </section>
          
          <section id="contacto" className="section">
            <Contacto />
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
