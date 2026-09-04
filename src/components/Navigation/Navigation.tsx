import './Navigation.scss'
import { useLanguage } from '@/context/LanguageContext'
import type { Section } from '@/types/navigation'

interface NavigationProps {
  activeSection: Section
  onSectionChange: (section: Section) => void
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const { language, setLanguage, t } = useLanguage()

  const sections: { id: Section; label: string }[] = [
    { id: 'inicio', label: t.navigation.inicio },
    { id: 'proyectos', label: t.navigation.proyectos },
    { id: 'experiencia', label: t.navigation.experiencia },
    { id: 'habilidades', label: t.navigation.habilidades },
    { id: 'contacto', label: t.navigation.contacto },
  ]

  return (
    <nav className="main-nav">
      <div className="nav-links">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => onSectionChange(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
      <div className="language-switcher" role="group" aria-label={t.languageSwitcher.ariaLabel}>
        <button
          className={`lang-btn es ${language === 'es' ? 'active' : ''}`}
          onClick={() => setLanguage('es')}
          aria-pressed={language === 'es'}
        >
          ES
        </button>
        <button
          className={`lang-btn en ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
        >
          EN
        </button>
      </div>
    </nav>
  )
}

export default Navigation
