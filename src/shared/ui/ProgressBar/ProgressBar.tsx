import type { Question } from '@/entities/question'
import { Container } from '../Container/Container'
import cls from './ProgressBar.module.scss'

interface ProgressBarProps {
  questions: Array<Question>
}

export function ProgressBar({ questions }: ProgressBarProps) {
  return (
    <Container className={cls.progressBar}>Total number of questions: {questions.length}</Container>
  )
}
