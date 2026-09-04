import './Footer.scss'
import { useLanguage } from '@/context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer>
      <p>&copy; 2026 Marc van de Bovenkamp Font. {t.footer.rights}</p>
      <p className="footer-subtitle">{t.footer.subtitle}</p>
    </footer>
  )
}

export default Footer
