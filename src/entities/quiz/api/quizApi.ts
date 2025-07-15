import { baseApi } from '@/shared/api/baseApi'
import type { GetMockQuizRequest, GetMockQuizResponse, Quiz } from '../model/types'
import { quizApiUrls } from '../model/const/quizApiUrls'

export const quizApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getNewMockQuiz: build.query<GetMockQuizResponse, GetMockQuizRequest>({
      // providesTags: () => [{ type: 'quiz', id: 'NEW' }],
      query: params => ({
        url: quizApiUrls.getNewMockQuiz,
        // params: { limit: 10, skills: ['6', '7'] },
        params,
      }),
    }),
  }),
})

export const { useGetNewMockQuizQuery } = quizApi
