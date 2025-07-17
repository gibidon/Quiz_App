import { Specialization } from '@/entities/specialization/@x/skill.ts'
import { Response } from '@/shared/types/types'

export interface Skill {
  id: number
  title: string
  description: string
  imageSrc?: string | null
  createdAt?: string
  updatedAt?: string
  specializations: Specialization[]
}

export type GetSkillsResponse = Response<Array<Skill>>
export interface GetSkillsRequest {
  page?: number
  limit?: number
  specializations?: Array<number>
  authorId?: Array<string>
}
