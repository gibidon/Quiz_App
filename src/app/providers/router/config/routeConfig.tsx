import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { QuizPage } from '@/pages/QuizPage'
import { AppRoutes } from '@/shared/const/router'
import type { AppRoutesProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: AppRoutes.MAIN,
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
  [AppRoutes.QUIZ]: {
    path: '/quiz',
    element: <QuizPage />,
  },
  [AppRoutes.QUESTION_LIST]: {
    path: '/question_list',
    element: <div>Question list page</div>,
  },
}
