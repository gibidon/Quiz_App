import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/app/providers/StoreProvider/config/store'
import { DefinedAnswer } from '../types'

const selectResults = (state: RootState) => state.quizResults.results

export const selectAnswerByQuestionId = (questionId: number) =>
  createSelector([selectResults], (results): DefinedAnswer | null => {
    const answer = results.find(result => result.questionId === questionId)?.answer
    return answer === 'known' || answer === 'unknown' ? answer : null
  })
