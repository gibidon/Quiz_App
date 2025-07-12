import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/app/providers/StoreProvider/config/store'

const selectSettings = (state: RootState) => state.quizSetup.settings

export const selectSkillIDs = createSelector([selectSettings], settings => settings.skillIDs ?? [])
