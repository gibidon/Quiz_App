// import type { ReactNode } from 'react'
// import { classNames } from '@/shared/lib/classNames/classNames'
// import { QuestionAnswer } from '@/entities/quiz'
// import cls from './QuestionCard.module.scss'
// import { DefinedAnswer } from "@/entities/quiz/model/types"

// interface QuestionCardProps {
//   questionTitle: string
//   shortAnswer: string
//   userAnswer: DefinedAnswer | null
//   className?: string
//   render: (questionTitle: string, shortAnswer: string, userAnswer: DefinedAnswer | null) => ReactNode
// }

// export function QuestionCard({ questionTitle, shortAnswer, userAnswer = null, render, className = '' }: QuestionCardProps) {
//   return <div className={classNames(cls.questionCard, {}, [...className])}>
//     {render(questionTitle, shortAnswer, userAnswer)}
//     </div>
// }


import type { ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './QuestionCard.module.scss'

interface QuestionCardProps<T = unknown> {
  data: T
  className?: string
  render: (data: T) => ReactNode
}

export function QuestionCard<T>({ data, render, className = '' }: QuestionCardProps<T>) {
  return (
    <div className={classNames(cls.questionCard, {}, [className])}>
      {render(data)}
    </div>
  )
}
