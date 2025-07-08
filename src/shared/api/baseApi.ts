import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'

let accessToken = ''

// local variable, protect from XSS. And only setter function, no getter
function setAccessToken(token: string) {
  accessToken = token
}

const baseQuery = fetchBaseQuery({
  baseUrl: '',
  credentials: 'include',
  prepareHeaders: headers => {
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }

    return headers
  },
})

const baseQueryWithRefresh: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 401 && args.url !== '/auth/refresh') {
    const refreshResult = await baseQuery(
      {
        //TODO
        url: '/auth/refresh',
        method: 'GET',
      },
      api,
      extraOptions
    )

    if (refreshResult.data) {
      const accessToken = (refreshResult.data as Partial<{ access_token: string }>)?.access_token

      if (accessToken) {
        setAccessToken(accessToken)
        // localStorage.setItem('accessToken', accessToken);
      }
      result = await baseQuery(args, api, extraOptions)
    } else {
      //   console.log('Refresh failed');
      //   api.dispatch(apiAccessTokenIsBrokenEvent());
    }
  }

  return result
}

export const baseApi = createApi({
  //   tagTypes: Object.values(ApiTags),
  reducerPath: 'api',
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({}),
})
