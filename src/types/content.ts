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

export interface ExperienceProject {
  id: string
  title: string
  projectName: string
  description: string
}

export interface Experience {
  id: string
  date: string
  company: string
  title?: string
  description?: string
  projects?: ExperienceProject[]
}

export type SkillGroup = 'frontend' | 'backendData' | 'toolsDevops'

export interface Skill {
  id: string
  title: string
  group: SkillGroup
}
