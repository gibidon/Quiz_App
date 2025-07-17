import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectQuizSettings = (state: RootState) => state.quizSetup.settings
