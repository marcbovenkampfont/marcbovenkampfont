import SkillsCategory from '@/components/SkillsCategory/SkillsCategory'
import './Habilidades.scss'
import { SKILLS } from '@/util/skills'

export interface SkillCategory {
  id: string
  title: string
  skills: string[]
}

export interface Skill {
  id: string
  title: string
  group: 'Frontend' | 'Backend & Data' | 'Herramientas & DevOps'
}

const Habilidades = () => {
  const skillCategories = SKILLS.reduce((skillsCategory, skill) => {
    const category = skillsCategory.find((c) => c.id === skill.group)
    if (category) {
      category.skills.push(skill.title)
    } else {
      skillsCategory.push({
        id: skill.group,
        title: skill.group,
        skills: [skill.title]
      })
    }
    return skillsCategory;
  }, [] as SkillCategory[])

  return (
    <div className="section habilidades-section">
      <h2>Habilidades Técnicas</h2>
      <div className="skills-section">
        {skillCategories.map((category) => (
          <SkillsCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Habilidades
