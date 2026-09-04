import ProjectCard from '@/components/ProjectCard/ProjectCard'
import './Proyectos.scss'
import { useLanguage } from '@/context/LanguageContext'
import { getProjects } from '@/util/projects'

const Proyectos = () => {
  const { language, t } = useLanguage()
  const projects = getProjects(language)

  return (
    <div className="section proyectos-section">
      <h2>{t.sections.proyectos.title}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Proyectos
