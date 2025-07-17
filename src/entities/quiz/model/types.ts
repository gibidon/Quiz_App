import { Question } from '@/entities/question/@x/quiz.ts'

export interface Quiz {
  answers: Array<QuestionAnswer>
}

export type QuestionAnswer = {
  answer: 'known' | 'unknown' | null
  questionId: number
}

export type DefinedAnswer = NonNullable<QuestionAnswer['answer']>

export type QuizState = {
  results: Array<QuestionAnswer>
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
    answers: Array<{ questionId: number; questionTitle: string }>
  }
  startDate: string
}
