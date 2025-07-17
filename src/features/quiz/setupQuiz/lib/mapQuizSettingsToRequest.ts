import { QuizSetupState } from '../model/types/types'
import { GetMockQuizRequest } from '@/entities/quiz/model/types'

export function mapQuizSettingsToRequest(settings: QuizSetupState['settings']): GetMockQuizRequest {
  return {
    skills: settings.skillIDs?.map(String),
    complexity: settings.complexity,
    limit: settings.limit,
  }
}
