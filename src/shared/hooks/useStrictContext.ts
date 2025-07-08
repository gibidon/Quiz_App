import { useContext } from 'react'
import { Context } from 'react'

export function useStrictContext<T>(context: Context<T | null>) {
  const value = useContext(context)

  if (value === null) {
    throw new Error()
  }
  return value
}
