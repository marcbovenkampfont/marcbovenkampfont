import './Inicio.scss'
import { useLanguage } from '@/context/LanguageContext'

const Inicio = () => {
  const { t } = useLanguage()

  return (
    <div className="section intro-section">
      <h2>{t.sections.inicio.title}</h2>
      <p>
        {t.sections.inicio.paragraphOne}
      </p>
      <p>
        {t.sections.inicio.paragraphTwo}
      </p>
    </div>
  )
}

export default Inicio


