import ProjectCard from '@/components/ProjectCard/ProjectCard'
import './Proyectos.scss'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  fallbackIcon: string
  tags: string[]
  role: string
  vinculo: string
  achievements?: string
}
import projects from '@/util/projects'

const Proyectos = () => {
  return (
    <div className="section proyectos-section">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Proyectos
