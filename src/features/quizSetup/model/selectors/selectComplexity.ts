import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectComplexity = (state: RootState) => state.quizSetup.settings.complexity
