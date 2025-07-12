import { Question } from '@/entities/question/@x/quiz.ts'

export interface Quiz {
  startDate: string
  fullCount: number
  response: QuizResponse
  questions: Question[]
}

export type QuizFilterState = {
  quizFilters: Record<string, unknown>
}

export interface GetMockQuizRequest {
  complexity?: Array<number>
  skills?: Array<string>
  limit?: number
  // specialiazation?: Array<string>
}

interface QuizResponse {
  answers: QuizAnswer[]
}

interface QuizAnswer {
  questionId: number
  questionTitle: string
}
