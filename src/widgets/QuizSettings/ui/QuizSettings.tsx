import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@/shared/const/router'
import { SkillSelector } from '@/features/quizSetup'
import { Button } from '@/shared/ui/Button'
import cls from './QuizSettings.module.scss'

export function QuizSettings() {
  const navigate = useNavigate()

  return (
    <div className={cls.quizSettings}>
      <SkillSelector />
      <Button title={'Начать'} onClick={() => navigate(`${AppRoutes.QUIZ}`)} />
    </div>
  )
}
