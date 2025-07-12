import { baseApi } from '@/shared/api/baseApi'
import { skillApiUrls } from '../model/const/skillApiUrls'
import type { GetSkillsResponse, GetSkillsRequest, Skill } from '../model/types'
// import { GetMockQuizRequest } from '@/entities/quiz/model/types'

export const skillApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getSkills: build.query<Skill[], void | GetSkillsRequest>({
      query: params => {
        return {
          url: skillApiUrls.getSkills,
          params,
        }
      },
      transformResponse: (response: GetSkillsResponse) => response.data,
    }),
  }),
})

export const { useGetSkillsQuery } = skillApi
