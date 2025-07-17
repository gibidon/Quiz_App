import type { QuestionAnswer } from '@/entities/quiz'
import { QuestionCard } from '@/entities/question'
import questionImg from '@/shared/assets/images/answer_image.png'

import cls from './QuizResults.module.scss'

interface QuizResultProps {
  results: Array<QuestionAnswer>
}

export function QuizResults({ results }: QuizResultProps) {
  const render = (result: QuestionAnswer) => {
    return (
      <div>
        <img src={questionImg} alt={'answer image'} />
        <p>{result.questionTitle}</p>
        <p>{result.answer}</p>
      </div>
    )
  }

  return (
    <div className={cls.results}>
      {results.map(result => (
        // <QuizResultCard key={result.questionId} result={result} />
        <QuestionCard key={result.questionId} question={result} render={render} />
      ))}
    </div>
  )
}
