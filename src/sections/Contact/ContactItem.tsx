import './ContactItem.scss'

interface ContactItemProps {
  icon: string
  label: string
  value: string
  action: () => void
}

const ContactItem = ({ icon, label, value, action }: ContactItemProps) => {
  return (
    <button className="contact-item" onClick={action} aria-label={label}>
      <strong>{icon} {label}:</strong>
      <span>{value}</span>
    </button>
  )
}

export default ContactItem
