import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { addResult, updateResult } from '@/entities/quiz'
import { selectAnsweredResults } from '@/entities/quiz'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { DefinedAnswer } from '@/entities/quiz/model/types'

export function useAnswerQuestion() {
  const dispatch = useAppDispatch()
  const currentAnswers = useAppSelector(selectAnsweredResults)

  return (id: number, answer: DefinedAnswer) => {
    const answerExists = currentAnswers.find(answer => answer.questionId === id)

    if (answerExists) {
      dispatch(updateResult({ id, answer }))
    } else {
      dispatch(addResult({ questionId: id, answer }))
    }
  }
}
