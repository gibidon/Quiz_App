import { baseApi } from '@/shared/api/baseApi'
import type { GetMockQuizRequest, GetMockQuizResponse } from '../model/types'
import { quizApiUrls } from '../model/const/quizApiUrls'

export const quizApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getNewMockQuiz: build.query<GetMockQuizResponse, GetMockQuizRequest>({
      query: params => ({
        url: quizApiUrls.getNewMockQuiz,
        params,
      }),
    }),
  }),
})

export const { useGetNewMockQuizQuery } = quizApi
