import { baseApi } from '@/shared/api/baseApi'
import type { GetNewMockQuizResponse, Quiz } from '../model/types'
import { quizApiUrls } from '../model/const/quizApiUrls'

export const quizApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getNewMockQuiz: build.query<GetNewMockQuizResponse, void>({
      query: () => ({
        url: quizApiUrls.getNewMockQuiz,
        params: { complexity: [1, 2, 6], limit: 9, skills: ['58'] },
      }),
    }),
  }),
})

// export const questionApi = baseApi.injectEndpoints({
//   endpoints: build => ({
//     getQuestions: build.query<GetQuestionListResponse, Array<Question>>({
//       query: params => ({
//         url: questionApiUrls.getQuestions,
//         params: { page: 1, limit: 10, ...params },
//       }),
//     }),
//   }),
// })

export const { useGetNewMockQuizQuery } = quizApi
