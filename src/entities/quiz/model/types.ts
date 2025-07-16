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
}

export interface GetMockQuizResponse {
  fullCount: number
  questions: Array<Question>
  response: {
    answers: Array<QuizAnswer>
  }
  startDate: string
}

export interface QuizState {
  results: Array<QuizResult>
}
interface QuizResponse {
  answers: QuizAnswer[]
}

export interface QuizAnswer {
  questionId: number
  questionTitle: string
}

export type QuestionAnswer = 'known' | 'unknown' | null
export interface QuizResult {
  questionId: Question['id']
  questionTitle: Question['title']
  answer: QuestionAnswer
}
