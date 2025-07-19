import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectQuizResults = (state: RootState) => state.quizResults.results
