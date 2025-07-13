import { QuizResult } from '@/entities/quiz'
import { QuizResultCard } from '@/entities/quiz/ui/QuizResultCard/QuizResultCard'

interface QuizResultProps {
  results: Array<QuizResult>
}

export function QuizResults({ results }: QuizResultProps) {
  return (
    <>
      {results.map(result => (
        <QuizResultCard key={result.question.id} result={result} />
      ))}
    </>
  )
}
