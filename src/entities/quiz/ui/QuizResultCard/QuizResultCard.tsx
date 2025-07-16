import { classNames } from '@/shared/lib/classNames/classNames'
import { QuizResult } from '../../model/types'

import cls from './QuizResultCard.module.scss'

interface QuizResultCardProps {
  result: QuizResult
}

export function QuizResultCard({ result }: QuizResultCardProps) {
  return (
    <div className={classNames(cls.card, {}, [])}>
      {/* <Image /> */}
      <div>{result.questionTitle}</div>
      <div>{result.answer}</div>
    </div>
  )
}
