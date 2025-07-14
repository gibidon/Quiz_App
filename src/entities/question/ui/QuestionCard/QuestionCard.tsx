import { Question } from '../../model/types'
import type { ReactNode } from 'react'

interface QuestionCardProps {
  question: Question
  render: (question: Question) => ReactNode
}

export function QuestionCard({ question, render }: QuestionCardProps) {
  return <>{render(question)}</>
}
