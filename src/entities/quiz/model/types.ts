import { Question } from '@/entities/question/@x/quiz.ts'

export interface Quiz {
  id: string
  startDate: string
  fullCount: number
  skills: string[]
  response: QuizResponse
  questions: Question[]
}

export type GetNewMockQuizResponse = Omit<Quiz, 'skills'>

interface QuizResponse {
  answers: QuizAnswer[]
}

interface QuizAnswer {
  questionId: number
  questionTitle: string
}
