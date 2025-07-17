import { createSlice } from '@reduxjs/toolkit'
import { QuizState, QuestionAnswer, DefinedAnswer } from '../model/types'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: QuizState = {
  results: [],
}

export const quizSlice = createSlice({
  name: 'quizSlice',
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<QuestionAnswer>) => {
      state.results.push(action.payload)
    },
    resetResults: state => {
      state.results = []
    },
    updateResult: (state, action: PayloadAction<{ id: number; answer: DefinedAnswer }>) => {
      const existingAnswer = state.results.find(answer => answer.questionId === action.payload.id)

      if (existingAnswer) {
        existingAnswer.answer = action.payload.answer
      }
    },
  },
})

export const quizSliceReducer = quizSlice.reducer
export const { addResult, resetResults, updateResult } = quizSlice.actions
