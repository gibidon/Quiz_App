import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { AppRoutes } from '@/shared/const/router'
import { Logo } from '@/shared/ui/Logo/Logo'
import { Button } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import cls from './Header.module.scss'

export function Header() {
  const { toggleTheme } = useTheme()
  const navigate = useNavigate()

  return (
    <header className={classNames(cls.header, {}, ['container'])}>
      <div className={cls.header_nav}>
        <Logo width="50" height="50" />
        <AppLink path={`${AppRoutes.QUIZ_SETTINGS}`} title="Тренажер" />
        <AppLink path={`${AppRoutes.QUESTION_LIST}`} title="База вопросов" />
      </div>

      <div className="buttons">
        <Button title="Change theme" onClick={toggleTheme} />
        <Button title="Вход" onClick={() => navigate('/login')} />
        <Button title="Регистрация" onClick={() => navigate('/register')} />
      </div>
    </header>
  )
}
