import { Flex } from '@/shared/ui/Flex'
import cls from './InterviewModeBlock.module.scss'

export function InterviewModeBlock() {
  return (
    <section className={cls.quizMode}>
      <h2>Режим прохождения собеседований</h2>
      <Flex>виджет подготовки / steps to learn</Flex>
    </section>
  )
}
