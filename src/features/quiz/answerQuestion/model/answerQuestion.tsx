import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { addResult } from '@/entities/quiz'
import type { QuestionAnswer } from '@/entities/quiz'

export function useAnswerQuestion() {
  const dispatch = useAppDispatch()

  return (questionId: number, answer: QuestionAnswer, questionTitle: string) =>
    dispatch(addResult({ questionId, answer, questionTitle }))
}
