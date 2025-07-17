import { Suspense } from 'react'
import { AppRouter } from './providers/router/ui/AppRouter'
import { Header } from '@/widgets/Header/ui/Header'
import { Footer } from '@/widgets/Footer/ui/Footer'
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { MainLayout } from './layouts/MainLayout'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import { useBreadcrumbs } from '@/shared/lib/hooks/useBreadcrumbs'
import { classNames } from '@/shared/lib/classNames/classNames'
import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()
  const breadcrumbs = useBreadcrumbs()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Header />
        <MainLayout>
          <Breadcrumbs items={breadcrumbs} />
          <AppRouter />
        </MainLayout>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
