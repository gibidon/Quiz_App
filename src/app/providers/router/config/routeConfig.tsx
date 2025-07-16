import { AppRoutes } from '@/shared/const/router'
import type { AppRoutesProps } from '@/shared/types/router'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { QuizPage } from '@/pages/QuizPage'
import { QuizSettingsPage } from '@/pages/QuizSettingsPage'
import { QuizResultsPage } from '@/pages/QuizResultsPage'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: AppRoutes.MAIN,
    element: <MainPage />,
  },
  [AppRoutes.QUIZ_SETTINGS]: {
    path: AppRoutes.QUIZ_SETTINGS,
    element: <QuizSettingsPage />,
  },
  [AppRoutes.QUESTION_LIST]: {
    path: AppRoutes.QUESTION_LIST,
    element: <div>Question list page</div>,
  },
  [AppRoutes.QUIZ_RESULTS]: {
    path: AppRoutes.QUIZ_RESULTS,
    element: <QuizResultsPage />,
  },
  [AppRoutes.QUIZ]: {
    path: AppRoutes.QUIZ,
    element: <QuizPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundPage />,
  },
}
