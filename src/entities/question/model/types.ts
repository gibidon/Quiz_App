import { Skill } from '@/entities/skill/@x/question.ts'
import { Specialization } from '@/entities/specialization/@x/question.ts'

export interface Question {
  id: number
  title: string
  description: string
  code: string
  imageSrc: string
  keywords: string[]
  longAnswer: string
  shortAnswer: string
  status: string
  rate: number
  complexity: number
  createdById: string
  updatedById: string
  questionSpecializations: Specialization[]
  questionSkills: Skill[]
  createdAt: string
  updatedAt: string
  createdBy: QuizAuthor
  updatedBy: QuizAuthor
}

interface QuizAuthor {
  id: string
  username: string
}
