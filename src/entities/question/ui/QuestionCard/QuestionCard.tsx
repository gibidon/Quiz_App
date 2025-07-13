import { Question } from '../../model/types'

interface QuestionCardProps {
  question: Question
}

export function QuestionCard({ question }: QuestionCardProps) {
  return <div className="">Title: {question.title}</div>
}
