import ContactItem from './ContactItem'
import './Contacto.scss'
import { useLanguage } from '@/context/LanguageContext'

const Contacto = () => {
  const { t } = useLanguage()

  const handleEmail = () => {
    window.location.href = 'mailto:marc@bovenkamp.es'
  }

  const handlePhoneES = () => {
    window.location.href = 'tel:+34663450646'
  }

  const handlePhoneMT = () => {
    window.location.href = 'tel:+35699493813'
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/marc-van-de-bovenkamp-font', '_blank', 'noopener,noreferrer')
  }

  const handleGitHub = () => {
    window.open('https://github.com/marcbovenkampfont', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="section intro-section">
      <h2>{t.sections.contacto.title}</h2>
      <p>
        {t.sections.contacto.intro}
      </p>
      <div className="contact-info">
        <ContactItem
          label="Email"
          value="marc@bovenkamp.es"
          action={handleEmail}
        />
        <ContactItem
          label={t.sections.contacto.phoneEs}
          value="+34 663 450 646"
          action={handlePhoneES}
        />
        <ContactItem
          label={t.sections.contacto.phoneMt}
          value="+356 99 49 38 13"
          action={handlePhoneMT}
        />
        <ContactItem
          label="LinkedIn"
          value="Marc van de Bovenkamp Font"
          action={handleLinkedIn}
        />
        <ContactItem
          label="GitHub"
          value="github.com/marcbovenkampfont"
          action={handleGitHub}
        />
      </div>
    </div>
  )
}

export default Contacto
