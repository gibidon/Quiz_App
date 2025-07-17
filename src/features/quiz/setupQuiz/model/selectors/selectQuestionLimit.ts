import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectQuestionLimit = (state: RootState) => state.quizSetup.settings.limit
