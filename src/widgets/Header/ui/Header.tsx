import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme'

export function Header() {
  const { toggleTheme } = useTheme()

  return (
    <header className={classNames(cls.Header, {}, [])}>
      <span>Logo</span>
      <div className="buttons">
        <button onClick={toggleTheme}>Change theme</button>
        <button>Log in</button>
      </div>
    </header>
  )
}
