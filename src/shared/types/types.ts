export interface Response<T> {
  data: T
  limit: number
  page: number
  total: number
}
