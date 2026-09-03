import ContactItem from './ContactItem'
import './Contacto.scss'

const Contacto = () => {
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
      <h2>Contacto</h2>
      <p>
        Abierto a colaboraciones en proyectos de desarrollo Frontend y Full Stack, así como consultoría técnica.
        Si tienes una idea o un reto tecnológico en mente, hablemos.
      </p>
      <div className="contact-info">
        <ContactItem
          icon="📧"
          label="Email"
          value="marc@bovenkamp.es"
          action={handleEmail}
        />
        <ContactItem
          icon="📱"
          label="Teléfono (ES)"
          value="+34 663 450 646"
          action={handlePhoneES}
        />
        <ContactItem
          icon="📱"
          label="Teléfono (MT)"
          value="+356 99 49 38 13"
          action={handlePhoneMT}
        />
        <ContactItem
          icon="💼"
          label="LinkedIn"
          value="Marc van de Bovenkamp Font"
          action={handleLinkedIn}
        />
        <ContactItem
          icon="🐱"
          label="GitHub"
          value="github.com/marcbovenkampfont"
          action={handleGitHub}
        />
      </div>
    </div>
  )
}

export default Contacto
