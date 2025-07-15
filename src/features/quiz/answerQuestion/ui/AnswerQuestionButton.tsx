import type { Question } from '@/entities/question'
import type { QuestionAnswer } from '@/entities/quiz'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { addResult } from '@/entities/quiz'

interface AnswerQuestionButtonProps {
  title: string
  question: Question
  answerValue: QuestionAnswer
}

export function AnswerQuestionButton({ title, question, answerValue }: AnswerQuestionButtonProps) {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(addResult({ question, answer: answerValue }))
  }

  return <button onClick={onClick}>{title}</button>
}
