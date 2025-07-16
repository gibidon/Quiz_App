import { AppRoutes } from '@/shared/const/router'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { resetResults, selectQuizResults } from '@/entities/quiz'
import { QuizResults } from '@/widgets/QuizResults/ui/QuizResults'
import { useNavigate } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { QuestionCard } from '@/entities/question/ui/QuestionCard/QuestionCard'
import cls from './QuizResultsPage.module.scss'

export default function QuizResultsPage() {
  const results = useAppSelector(selectQuizResults)

  console.log('r', results)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const startNewQuiz = () => {
    dispatch(resetResults())
    navigate(`${AppRoutes.QUIZ_SETTINGS}`)
  }

  return (
    <div className={classNames(cls.resultPage, {}, ['container'])}>
      <div className="joinUs">join us</div>
      <div className="yeahub">yeahub</div>
      <QuizResults results={results} />

      <button onClick={startNewQuiz}>Пройти заново</button>
    </div>
  )
}
