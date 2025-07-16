import { RootState } from '@/app/providers/StoreProvider/config/store'

//reselect later
export const selectAnsweredQuantity = (state: RootState) => state.quizResults.results.length
