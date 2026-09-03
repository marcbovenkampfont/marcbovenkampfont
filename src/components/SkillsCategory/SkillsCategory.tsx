import './SkillsCategory.scss'
import type { SkillCategory } from '@/sections/Skills/Habilidades'

interface SkillsCategoryProps {
  category: SkillCategory
}

const SkillsCategory = ({ category }: SkillsCategoryProps) => {
  return (
    <div className="skills-category">
      <h3>{category.title}</h3>
      <div className="skills-list">
        {category.skills.map((skill) => (
          <div key={skill} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsCategory
