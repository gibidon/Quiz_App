// import cls from './QuizPage.module.scss'
import { useGetNewMockQuizQuery } from '@/entities/quiz/api/quizApi'

export function QuizPage() {
  const { data } = useGetNewMockQuizQuery()
  console.log('data', data)

  return <div>Data on quiz page: {JSON.stringify(data)}</div>
}
