import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { resetResults, selectQuizResults } from '@/entities/quiz'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { QuizResults } from '@/widgets/QuizResults/ui/QuizResults'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@/shared/const/router'

export function QuizResultsPage() {
  const results = useAppSelector(selectQuizResults)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  console.log('res', results)
  const startNewQuiz = () => {
    dispatch(resetResults())
    navigate(`${AppRoutes.QUIZ_SETTINGS}`)
  }

  return (
    <>
      <div className="ads">
        <div className="joinUs">join us</div>
        <div className="yeahub">yeahub</div>
        <QuizResults results={results} />
      </div>
      <button onClick={startNewQuiz}>Пройти заново</button>
    </>
  )
}
