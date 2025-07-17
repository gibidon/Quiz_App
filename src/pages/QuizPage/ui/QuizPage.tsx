import { useGetNewMockQuizQuery } from '@/entities/quiz/api/quizApi'
import { selectQuizSettings } from '@/features/quiz/configureQuiz/model/selectors/selectQuizSettings'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { mapQuizSettingsToRequest } from '@/features/quiz/configureQuiz'
import { Quiz } from '@/widgets/Quiz/ui/Quiz/Quiz'
import { Container } from '@/shared/ui/Container/Container'
import { Progress } from '@/shared/ui/Progress/Progress'
import { Flex } from '@/shared/ui/Flex'
import { selectAnsweredQuantity } from '@/entities/quiz'
import cls from './QuizPage.module.scss'

export default function QuizPage() {
  const rawSettings = useAppSelector(selectQuizSettings)
  const requestParams = mapQuizSettingsToRequest(rawSettings)
  const { data, isFetching, isLoading } = useGetNewMockQuizQuery(requestParams)
  const answeredQuestionsNumber = useAppSelector(selectAnsweredQuantity)

  console.log('data', data)

  if (!data || isFetching || isLoading) {
    return <div>Quiz page skeleton</div>
  }

  const { fullCount, questions } = data

  return (
    <Flex direction="column" className={cls.quizPage}>
      <Container>
        <Progress total={fullCount} current={answeredQuestionsNumber} />
      </Container>
      <Container>
        <Quiz questions={questions} />
      </Container>
    </Flex>
  )
}
