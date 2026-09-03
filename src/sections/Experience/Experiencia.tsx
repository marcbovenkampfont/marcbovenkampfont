import TimelineItem from "@/components/TimelineItem/TimelineItem"
import { experiences } from "@/util/experience"
import './Experiencia.scss'

export interface Experience {
  id: string
  date: string
  company: string
  title?: string
  description?: string
  projects?: {
    id: string,
    title: string,
    projectName: string,
    description: string
  }[]
}

const experienceList: Experience[] = experiences;

const Experiencia = () => {
  return (
    <div className="section experiencia-section">
      <h2>Experiencia Profesional</h2>
      <div className="timeline">
        {experienceList.map((experience, index) => (
          <TimelineItem key={experience.id} experience={experience} index={index} projects={experience.projects} />
        ))}
      </div>
    </div>
  )
}

export default Experiencia
