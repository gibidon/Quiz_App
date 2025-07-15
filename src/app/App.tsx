import { Suspense } from 'react'
import { AppRouter } from './providers/router/ui/AppRouter'
import { Header } from '@/widgets/Header/ui/Header'
import { Footer } from '@/widgets/Footer/ui/Footer'
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Header />
        <AppRouter />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
