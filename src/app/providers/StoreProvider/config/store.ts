import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi'
import { quizSetupReducer } from '@/features/quiz/configureQuiz/model/slices/quizSetup.slice'
import { quizSliceReducer } from '@/entities/quiz/slices/quizSlice'

export const store = configureStore({
  reducer: {
    quizSetup: quizSetupReducer,
    quizResults: quizSliceReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
