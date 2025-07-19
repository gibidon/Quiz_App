// export enum AppRoutes {
//   MAIN = '/',
//   QUIZ_SETTINGS = '/quiz_settings',
//   QUIZ = '/interview/quiz',
//   QUIZ_RESULTS = '/interview/results',
//   QUESTION_LIST = '/interview/question_list',
//   NOT_FOUND = '*',
// }


export const AppRoutes = {
  MAIN: '/',
  QUIZ_SETTINGS: '/quiz_settings',
  QUIZ: '/interview/quiz',
  QUIZ_RESULTS: '/interview/results',
  QUESTION_LIST: '/interview/question_list',
  NOT_FOUND: '*',
} as const;

export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];