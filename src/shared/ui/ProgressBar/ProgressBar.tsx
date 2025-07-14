import { Question } from '@/entities/question'

interface ProgressBarProps {
  questions: Array<Question>
}

export function ProgressBar({ questions }: ProgressBarProps) {
  return <div>Total number of questions: {questions.length}</div>
}
