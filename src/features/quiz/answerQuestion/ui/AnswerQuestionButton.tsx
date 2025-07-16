import type { Question } from '@/entities/question'
import type { QuestionAnswer } from '@/entities/quiz'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { addResult } from '@/entities/quiz'
import { useAnswerQuestion } from '../model/answerQuestion'

interface AnswerQuestionButtonProps {
  questionTitle: Question['title']
  questionId: Question['id']
  answerValue: QuestionAnswer
}

export function AnswerQuestionButton({
  questionId,
  questionTitle,
  answerValue,
}: AnswerQuestionButtonProps) {
  const answerQuestion = useAnswerQuestion()

  const onClick = () => {
    answerQuestion(questionId, answerValue, questionTitle)
  }

  return <button onClick={onClick}>{answerValue}</button>
}
