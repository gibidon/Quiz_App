import { AppRouter } from './providers/router/ui/AppRouter'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import logo from '../shared/assets/images/logo.png'
import { classNames } from '@/shared/lib/classNames/classNames'
import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      {/* header */}
      <h1>Hello from QuizSimulator</h1>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <button onClick={toggleTheme}>Toggle theme!</button>
      </div>
      <AppRouter />
      {/* footer */}
    </div>
  )
}

export default App
