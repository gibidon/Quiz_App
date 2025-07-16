import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import type { QuestionAnswer } from '@/entities/quiz'
import { addResult, updateResult } from '@/entities/quiz'
import { selectAnsweredResults } from '@/entities/quiz'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'

export function useAnswerQuestion() {
  const dispatch = useAppDispatch()
  const currentAnswers = useAppSelector(selectAnsweredResults)

  return (id: number, answer: QuestionAnswer, questionTitle: string) => {
    const answerExists = currentAnswers.find(answer => answer.questionId === id)

    if (answerExists) {
      dispatch(updateResult({ id, answer }))
    } else {
      dispatch(addResult({ questionId: id, answer, questionTitle }))
    }
  }
}
