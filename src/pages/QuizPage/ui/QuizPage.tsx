// import cls from './QuizPage.module.scss'
import { useGetNewMockQuizQuery } from '@/entities/quiz/api/quizApi'
import { selectQuizSettings } from '@/features/quiz/configureQuiz/model/selectors/selectQuizSettings'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { mapQuizSettingsToRequest } from '@/features/quiz/configureQuiz'
import { QuizSlider } from '@/widgets/QuizSlider/ui/QuizSlider'

export function QuizPage() {
  const rawSettings = useAppSelector(selectQuizSettings)
  const requestParams = mapQuizSettingsToRequest(rawSettings)
  const { data, isFetching, isLoading } = useGetNewMockQuizQuery(requestParams)

  if (!data || isFetching || isLoading) {
    return <div>Quiz page skeleton</div>
  }

  console.log('quest', data?.questions)

  return <QuizSlider questions={data.questions} />
}
