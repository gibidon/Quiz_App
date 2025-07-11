import { baseApi } from '@/shared/api/baseApi'
import { specializationApiUrls } from '../model/const/specializationApiUrls'
import { GetSpecializationsResponse } from '../model/types'

export const specializationApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getSpecializations: build.query<GetSpecializationsResponse, void>({
      query: () => ({
        url: specializationApiUrls.specializations,
      }),
    }),
  }),
})

export const { useGetSpecializationsQuery } = specializationApi
