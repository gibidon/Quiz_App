import type { ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { QuestionAnswer } from '@/entities/quiz'
import cls from './QuestionCard.module.scss'

interface QuestionCardProps {
  question: QuestionAnswer
  className?: string
  render: (question: QuestionAnswer) => ReactNode
}

export function QuestionCard({ question, render, className = '' }: QuestionCardProps) {
  return <div className={classNames(cls.questionCard, {}, [...className])}>{render(question)}</div>
}
