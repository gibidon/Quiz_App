import { selectQuizResults } from './model/selectors/selectQuizResult'
import { selectAnsweredQuantity } from './model/selectors/selectAnsweredQuantity'
import { selectAnsweredResults } from './model/selectors/selectAnsweredResults'
import { selectKnownResults } from './model/selectors/selectKnownResults'
import { addResult, resetResults, updateResult } from './slices/quizSlice'
import type { QuestionAnswer, QuizResult } from './model/types'

export {
  addResult,
  resetResults,
  updateResult,
  QuestionAnswer,
  QuizResult,
  selectAnsweredQuantity,
  selectAnsweredResults,
  selectQuizResults,
  selectKnownResults,
}
