import { QuizResult } from '@/entities/quiz'
import { QuizResultCard } from '@/entities/quiz/ui/QuizResultCard/QuizResultCard'
import cls from './QuizResults.module.scss'

interface QuizResultProps {
  results: Array<QuizResult>
}

export function QuizResults({ results }: QuizResultProps) {
  return (
    <div className={cls.results}>
      {results.map(result => (
        <QuizResultCard key={result.questionId} result={result} />
      ))}
    </div>
  )
}
