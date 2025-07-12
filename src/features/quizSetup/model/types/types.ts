export type QuizMode = 'REPEAT' | 'NEW' | 'RANDOM'

export type quizSetupState = {
  settings: {
    complexity?: Array<number>
    skillIDs?: Array<number>
    limit?: number
    mode?: QuizMode
  }
}
