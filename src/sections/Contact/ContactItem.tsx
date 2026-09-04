import './ContactItem.scss'

interface ContactItemProps {
  label: string
  value: string
  action: () => void
}

const ContactItem = ({ label, value, action }: ContactItemProps) => {
  return (
    <button className="contact-item" onClick={action} aria-label={label}>
      <strong>{label}:</strong>
      <span>{value}</span>
    </button>
  )
}

export default ContactItem
