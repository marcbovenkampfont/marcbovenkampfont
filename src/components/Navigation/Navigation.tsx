import './Navigation.scss'

type Section = 'inicio' | 'proyectos' | 'experiencia' | 'habilidades' | 'contacto'

interface NavigationProps {
  activeSection: Section
  onSectionChange: (section: Section) => void
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const sections: { id: Section; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' },
  ]

  return (
    <nav>
      {sections.map((section) => (
        <button
          key={section.id}
          className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => onSectionChange(section.id)}
        >
          {section.label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
