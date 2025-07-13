import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuizMode, quizSetupState } from '../types/types'
import { Skill } from '@/entities/skill'

const initialState: quizSetupState = {
  settings: {},
}

export const quizSetupSlice = createSlice({
  name: 'quizSetup',
  initialState,
  reducers: {
    toggleSkillID: (state, action: PayloadAction<Skill['id']>) => {
      const id = action.payload
      const current = state.settings.skillIDs ?? []

      if (current.includes(id)) {
        state.settings.skillIDs = current.filter(skillId => skillId !== id)
      } else {
        state.settings.skillIDs = [...current, id]
      }
    },
    toggleComplexity: (state, action: PayloadAction<number[]>) => {
      const current = state.settings.complexity ?? []
      const set = new Set(current)

      for (const value of action.payload) {
        if (set.has(value)) {
          set.delete(value)
        } else {
          set.add(value)
        }
      }

      state.settings.complexity = Array.from(set)
    },
    toggleMode: (state, action: PayloadAction<QuizMode>) => {
      state.settings.mode = action.payload
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.settings.limit = action.payload
    },
  },
})

export const quizSetupReducer = quizSetupSlice.reducer
export const { setLimit, toggleComplexity, toggleMode, toggleSkillID } = quizSetupSlice.actions
