import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectAnsweredResults = (state: RootState) =>
  state.quizResults.results.filter(result => result.answer !== null)
