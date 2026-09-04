import SkillsCategory from '@/components/SkillsCategory/SkillsCategory'
import './Habilidades.scss'
import { getSkills } from '@/util/skills'
import { useLanguage } from '@/context/LanguageContext'
import type { SkillGroup } from '@/types/content'

export interface SkillCategory {
  id: string
  title: string
  skills: string[]
}

const Habilidades = () => {
  const { language, t } = useLanguage()
  const skills = getSkills(language)

  const groupLabels: Record<SkillGroup, string> = {
    frontend: t.sections.habilidades.groups.frontend,
    backendData: t.sections.habilidades.groups.backendData,
    toolsDevops: t.sections.habilidades.groups.toolsDevops,
  }

  const skillCategories = skills.reduce((skillsCategory, skill) => {
    const category = skillsCategory.find((c) => c.id === skill.group)
    if (category) {
      category.skills.push(skill.title)
    } else {
      skillsCategory.push({
        id: skill.group,
        title: groupLabels[skill.group],
        skills: [skill.title]
      })
    }
    return skillsCategory;
  }, [] as SkillCategory[])

  return (
    <div className="section habilidades-section">
      <h2>{t.sections.habilidades.title}</h2>
      <div className="skills-section">
        {skillCategories.map((category) => (
          <SkillsCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Habilidades
