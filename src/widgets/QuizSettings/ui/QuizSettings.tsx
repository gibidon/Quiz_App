import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@/shared/const/router'
import { SkillSelector } from '@/features/quiz/configureQuiz'
import { Button } from '@/shared/ui/Button'
import { ParameterSelector } from '@/features/quiz/configureQuiz/ui/ParameterSelector/ParameterSelector'
import cls from './QuizSettings.module.scss'

export function QuizSettings() {
  const navigate = useNavigate()

  return (
    <div className={cls.quizSettings}>
      <SkillSelector />
      <ParameterSelector />
      <Button title={'Начать'} onClick={() => navigate(`${AppRoutes.QUIZ}`)} />
    </div>
  )
}
