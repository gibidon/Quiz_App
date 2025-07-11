import { baseApi } from '@/shared/api/baseApi'
import { skillApiUrls } from '../model/const/skillApiUrls'
import { GetSkillsResponse } from '../model/types'

export const skillApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getSkills: build.query<GetSkillsResponse, void>({
      query: () => ({
        url: skillApiUrls.getSkills,
      }),
    }),
  }),
})

export const { useGetSkillsQuery } = skillApi
