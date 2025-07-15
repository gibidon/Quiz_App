import { createSlice } from '@reduxjs/toolkit'
import { QuizState, QuizResult } from '../model/types'
import { PayloadAction } from '@reduxjs/toolkit'
import { Question } from '@/entities/question/@x/quiz'

const initialState: QuizState = {
  questions: [],
  results: [],
}

export const quizSlice = createSlice({
  name: 'quizSlice',
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<QuizResult>) => {
      state.results.push(action.payload)
    },
    resetResults: state => {
      state.results = []
    },
    addQuestions: (state, action: PayloadAction<Array<Question>>) => {
      state.questions = action.payload
    },
  },
})

export const quizSliceReducer = quizSlice.reducer
export const { addResult, resetResults } = quizSlice.actions
