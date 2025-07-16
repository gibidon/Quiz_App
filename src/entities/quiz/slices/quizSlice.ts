import { createSlice } from '@reduxjs/toolkit'
import { QuizState, QuizResult } from '../model/types'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: QuizState = {
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
  },
})

export const quizSliceReducer = quizSlice.reducer
export const { addResult, resetResults } = quizSlice.actions
