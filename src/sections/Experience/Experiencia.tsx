import TimelineItem from "@/components/TimelineItem/TimelineItem"
import { getExperiences } from "@/util/experience"
import './Experiencia.scss'
import { useLanguage } from '@/context/LanguageContext'
import type { Experience } from '@/types/content'

const Experiencia = () => {
  const { language, t } = useLanguage()
  const experienceList: Experience[] = getExperiences(language)

  return (
    <div className="section experiencia-section">
      <h2>{t.sections.experiencia.title}</h2>
      <div className="timeline">
        {experienceList.map((experience, index) => (
          <TimelineItem key={experience.id} experience={experience} index={index} projects={experience.projects} />
        ))}
      </div>
    </div>
  )
}

export default Experiencia
