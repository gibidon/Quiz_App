import type { Question } from '@/entities/question'
import type { QuestionAnswer } from '@/entities/quiz'
import { useAnswerQuestion } from '../model/answerQuestion'
import cls from './AnswerButton.module.scss'

interface AnswerQuestionButtonProps {
  value: QuestionAnswer
  onClick: (answer: QuestionAnswer) => void
  questionTitle: Question['title']
  questionId: Question['id']
  answerValue: QuestionAnswer
}

export function AnswerQuestionButton({
  value,
  // onClick,
  questionId,
  questionTitle,
  answerValue,
}: AnswerQuestionButtonProps) {
  const answerQuestion = useAnswerQuestion()

  const onClick = () => {
    answerQuestion(questionId, answerValue, questionTitle)
  }

  return (
    // <button className={`${cls.btn} ${isActive && cls.active}`} onClick={onClick}>
    <button onClick={onClick}>{answerValue}</button>
  )
}
