import './ScrollIndicator.scss'

interface ScrollIndicatorProps {
  progress: number
}

const ScrollIndicator = ({ progress }: ScrollIndicatorProps) => {
  return <div className="scroll-indicator" style={{ width: `${progress}%` }} />
}

export default ScrollIndicator
