import { AppRoutes } from '@/shared/const/router'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { resetResults, selectQuizResults } from '@/entities/quiz'
import { QuizResults } from '@/widgets/QuizResults/ui/QuizResults'
import { useNavigate } from 'react-router-dom'
import { JoinUsBlock } from './JoinUsBlock/JoinUsBlock'
import { YeahubBlock } from './YeaHubBlock/YeaHubBlock'
import { QuizResultsSkeleton } from "./QuizResultsSkeleton"
import { Flex } from '@/shared/ui/Flex'
import { Container } from '@/shared/ui/Container/Container'
import { Button } from "@/shared/ui/Button"
import cls from './QuizResultsPage.module.scss'


export default function QuizResultsPage() {
  const results = useAppSelector(selectQuizResults)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const startNewQuiz = () => {
    dispatch(resetResults())
    navigate(`${AppRoutes.QUIZ_SETTINGS}`)
  }

  const isLoading = !results || results.length === 0

  return (
    <>
      <div className={cls.resultsPage}>
        <div className={cls.ads}>
          <JoinUsBlock />
          <YeahubBlock />
        </div>

        <Container>
          {isLoading ? (
            <QuizResultsSkeleton />
          ) : (
            <QuizResults results={results} />
          )}
        </Container>
      </div>

      <Flex justify="flex-end">
        <Button onClick={startNewQuiz}>Пройти заново</Button>
      </Flex>
    </>
  )
}
