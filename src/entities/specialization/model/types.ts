import { Response } from '@/shared/types/types'

export interface Specialization {
  id: number
  title: string
  description: string
  imageSrc: string
  createdAt: string
  updatedAt: string
}

export type GetSpecializationsResponse = Response<Specialization>
