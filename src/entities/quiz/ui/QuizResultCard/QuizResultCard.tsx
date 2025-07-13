import { QuizResult } from '../../model/types'

interface QuizResultCardProps {
  result: QuizResult
}

export function QuizResultCard({ result }: QuizResultCardProps) {
  return (
    <>
      <div>{result.question.title}</div>
      <div>{result.answer}</div>
    </>
  )
}
