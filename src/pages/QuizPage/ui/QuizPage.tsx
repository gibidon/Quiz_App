// import cls from './QuizPage.module.scss'
import { useGetNewMockQuizQuery } from '@/entities/quiz/api/quizApi'
import { selectQuizSettings } from '@/features/quizSetup/model/selectors/selectQuizSettings'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { mapQuizSettingsToRequest } from '@/features/quizSetup'

export function QuizPage() {
  const rawSettings = useAppSelector(selectQuizSettings)
  console.log('raw', rawSettings)
  const requestParams = mapQuizSettingsToRequest(rawSettings)
  console.log('r par', requestParams)
  const { data } = useGetNewMockQuizQuery(requestParams)
  console.log('data', data)

  return <div>Data on quiz page: {JSON.stringify(data)}</div>
}
