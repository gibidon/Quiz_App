import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectKnownResults = (state: RootState) =>
  state.quizResults.results.filter(result => result.answer === 'known')
