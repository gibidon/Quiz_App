import { useGetNewMockQuizQuery } from '@/entities/quiz/api/quizApi'
import { selectQuizSettings } from '@/features/quiz/configureQuiz/model/selectors/selectQuizSettings'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { mapQuizSettingsToRequest } from '@/features/quiz/configureQuiz'
import { QuizSlider } from '@/widgets/QuizSlider/ui/Slider/QuizSlider'
import { Container } from '@/shared/ui/Container/Container'
import { ProgressBar } from '@/shared/ui/ProgressBar/ProgressBar'
import { Flex } from '@/shared/ui/Flex'
import cls from './QuizPage.module.scss'

export function QuizPage() {
  const rawSettings = useAppSelector(selectQuizSettings)
  const requestParams = mapQuizSettingsToRequest(rawSettings)
  const { data, isFetching, isLoading } = useGetNewMockQuizQuery(requestParams)

  if (!data || isFetching || isLoading) {
    return <div>Quiz page skeleton</div>
  }

  return (
    <Flex direction="column" className={cls.quizPage}>
      <Container>
        <ProgressBar questions={data.questions} />
      </Container>
      <Container>
        <QuizSlider questions={data.questions} />
      </Container>
    </Flex>
  )
}
