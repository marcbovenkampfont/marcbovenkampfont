import './TimelineItem.scss'
import type { Experience } from '@/types/content'

interface TimelineItemProps {
  experience: Experience
  index: number
  projects?: Experience['projects']
}

const TimelineItem = ({ experience, index, projects }: TimelineItemProps) => {
  const isEven = index % 2 === 1

  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className={`timeline-content ${isEven ? 'even' : 'odd'}`}>
        <div className="timeline-date">{experience.date}</div>
        <p className="timeline-company">
          <strong>{experience.company}</strong>
        </p>
        {projects && projects.length > 0 ? (
          <>
            {projects.map((project) => (
              <div key={project.id}>
                <p>
                  <strong>{project.projectName}</strong>
                </p>
                <h3>{project.title}</h3>
                <p>
                  {project.description}
                </p>
              </div>
            ))}
          </>
        ) : (
          <>
            <h3 className="timeline-title">{experience.title}</h3>
            <p>{experience.description}</p>
          </>
      )}
      </div>
    </div>
  )
}

export default TimelineItem
