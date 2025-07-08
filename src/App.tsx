import { useTheme } from './app/providers/ThemeProvider/lib/useTheme'
import { classNames } from './shared/lib/classNames/classNames'
import './app/styles/index.scss'

function App() {
  const { theme, toggleTheme } = useTheme()

  let a
  return (
    <div className={classNames('app', {}, [theme])}>
      <div>Click on the Vite and React logos to learn more</div>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default App
