import { useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { toggleComplexity, setLimit } from '../slices/quizSetup.slice'

type QuizSetupKey = 'complexity' | 'limit'
type QuizSetupValue = number | number[]

export function useSetting(key: QuizSetupKey) {
  const dispatch = useAppDispatch()

  const updateField = useCallback(
    (value: QuizSetupValue) => {
      switch (key) {
        case 'limit': {
          if (typeof value === 'number') {
            dispatch(setLimit(value))
          } else {
            console.warn(`Expected number for 'limit', got ${typeof value}`)
          }
          break
        }
        case 'complexity': {
          if (Array.isArray(value)) {
            dispatch(toggleComplexity(value))
          } else {
            console.warn(`Expected number[] for 'complexity', got ${typeof value}`)
          }
          break
        }
        default:
          console.warn(`Unhandled quiz setup key: ${key}`)
      }
    },
    [dispatch, key]
  )

  return updateField
}
