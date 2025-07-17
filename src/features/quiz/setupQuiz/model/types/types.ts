export type QuizMode = 'REPEAT' | 'NEW' | 'RANDOM'

export type QuizSetupState = {
  settings: {
    complexity?: Array<number>
    skillIDs?: Array<number>
    limit?: number
    mode?: QuizMode
  }
}

export type QuizSetupKey = keyof QuizSetupState['settings']
export type QuizSetupValue = number | number[]
