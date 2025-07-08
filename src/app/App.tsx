import { Suspense } from 'react'
import { AppRouter } from './providers/router/ui/AppRouter'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="Loading..">
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
