import './Header.scss'
import { useLanguage } from '@/context/LanguageContext'

const Header = () => {
  const { t } = useLanguage()

  return (
    <header>
      <h1 className="fade-in">Marc van de Bovenkamp Font</h1>
      <p className="subtitle fade-in">{t.header.subtitle}</p>
    </header>
  )
}

export default Header
