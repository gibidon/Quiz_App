import { Question } from '../../model/types'
import type { ReactNode } from 'react'

interface QuestionCardProps {
  question: Question
  className?: string
  render: (question: Question) => ReactNode
}

export function QuestionCard({ question, render, className = '' }: QuestionCardProps) {
  return <div className={className}>{render(question)}</div>
}
