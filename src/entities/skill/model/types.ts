export interface Skill {
  id: number
  title: string
  description: string
  imageSrc?: string | null
  createdAt?: string
  updatedAt?: string
  specializationIds?: SkillSpecialization[]
}

//not for export, avoid cross-import
interface SkillSpecialization {
  id: number
  title: string
  description: string
  imageSrc: string
  createdAt: string
  updatedAt: string
}
export interface GetSkillsResponse {
  page: number
  limit: number
  data: Skill[]
  total: number
}
