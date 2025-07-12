import { Specialization } from '@/entities/specialization/@x/skill.ts'

export interface Skill {
  id: number
  title: string
  description: string
  imageSrc?: string | null
  createdAt?: string
  updatedAt?: string
  specializations: Specialization[]
}

export interface GetSkillsResponse {
  page: number
  limit: number
  data: Skill[]
  total: number
}
