import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectQuizMode = (state: RootState) => state.quizSetup.settings.mode
