import { AppRoutes } from '@/shared/const/router'
import { useNavigate } from 'react-router-dom'
import { SkillSelector } from '@/widgets/SkillSelector'
import { Button } from '@/shared/ui/Button'
import { ParameterSelector } from '@/widgets/ParameterSelector/ParameterSelector'
import cls from './QuizSettingsPage.module.scss'

export default function QuizSettings() {
  const navigate = useNavigate()

  return (
    <>
      <h1>Собеседование</h1>
      <div className={cls.settings}>
        <SkillSelector />
        <ParameterSelector />
      </div>
      <button title={'Начать'} onClick={() => navigate(`${AppRoutes.QUIZ}`)}>
        Начать
      </button>
    </>
  )
}
