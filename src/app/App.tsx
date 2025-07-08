import { AppRouter } from './providers/router/ui/AppRouter'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from '@/shared/lib/classNames/classNames'
import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <header>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>
          <button onClick={toggleTheme}>Toggle theme!</button>
        </div>
      </header>

      <AppRouter />
      <footer>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, voluptate.</footer>
    </div>
  )
}

export default App
