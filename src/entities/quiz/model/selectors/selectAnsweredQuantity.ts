import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectAnsweredQuantity = (state: RootState) => state.quizResults.results.length
