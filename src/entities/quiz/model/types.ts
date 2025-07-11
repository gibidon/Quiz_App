export interface Quiz {
  id: string
  startDate: string
  fullCount: number
  skills: string[]
  response: Response
  questions: QuizQuestion[]
}

export type GetNewMockQuizResponse = Omit<Quiz, 'skills'>

// another approach is to move Question interface to shared. But?
//another one is to use it upstairs- in features or pages/widgets
interface QuizQuestion {
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
  questionSpecializations: QuestionSpecialization[]
  questionSkills: QuestionSkill[]
  createdAt: string
  updatedAt: string
  createdBy: QuizAuthor
  updatedBy: QuizAuthor
}

interface QuizAuthor {
  id: string
  username: string
}

interface Response {
  answers: QuizAnswer[]
}

interface QuizAnswer {
  questionId: number
  questionTitle: string
  // answer: string
}

interface QuestionSpecialization {
  id: number
  title: string
  description: string
  imageSrc: string
  createdAt: string
  updatedAt: string
}

interface QuestionSkill {
  id: number
  title: string
  description: string
  imageSrc: string
  createdAt: string
  updatedAt: string
}
