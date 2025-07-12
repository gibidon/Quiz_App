export interface Specialization {
  id: number
  title: string
  description: string
  imageSrc: string
  createdAt: string
  updatedAt: string
}

export interface GetSpecializationsResponse {
  page: number
  limit: number
  data: Specialization[]
  total: number
}
