import { RootState } from '@/app/providers/StoreProvider/config/store' //TODO, fsd!

export const selectQuizResults = (state: RootState) => state.quizResults.results
