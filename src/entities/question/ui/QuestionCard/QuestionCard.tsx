import type { ReactNode } from 'react'
import { Question } from '../../model/types'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './QuestionCard.module.scss'

interface QuestionCardProps {
  question: Question
  className?: string
  render: (question: Question) => ReactNode
}

export function QuestionCard({ question, render, className = '' }: QuestionCardProps) {
  return <div className={classNames(cls.questionCard, {}, [...className])}>{render(question)}</div>
}
