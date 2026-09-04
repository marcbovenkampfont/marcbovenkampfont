import { useState } from 'react'
import './ProjectCard.scss'
import type { Project } from '@/types/content'
import { useLanguage } from '@/context/LanguageContext'
import { getSkills } from '@/util/skills'

interface ProjectCardProps {
  project: Project
}

const images = import.meta.glob<{ default: string }>('../../assets/images/*', { eager: true });

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language, t } = useLanguage()
  const skills = getSkills(language)
  const imagePath = images[`../../assets/images/${project.image}`]?.default;
  const [imageError, setImageError] = useState(imagePath == undefined);

  return (
    <div className="project-card">
      <div className="project-header">
        {!imageError ? (
          <div className="project-image-container">
            <div className="project-bg-blur" style={{ backgroundImage: `url(${imagePath})` }}/>
            <img
              src={imagePath}
              alt={project.title}
              onError={() => {
                console.log("image", project.image)
                setImageError(true)
              }}
              />
          </div>
        ) : (
          <div className="project-fallback">
            <span>{project.fallbackIcon}</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {skills.find((skill) => skill.id === tag)?.title}
            </span>
          ))}
        </div>
        <div className="project-details">
          <p>
            <strong>{t.projectCard.role}:</strong> {project.role}
          </p>
          <p>
            <strong>{t.projectCard.vinculo}:</strong> {project.vinculo}
          </p>
          {project.achievements && <p>
            <strong>{t.projectCard.achievements}:</strong> {project.achievements}
          </p>}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
