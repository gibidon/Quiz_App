import type { ReactNode } from 'react'
import cls from './Flex.module.scss'

interface FlexProps {
  classes?: string
  children: ReactNode
}

export function Flex({ classes = '', children }: FlexProps) {
  return <div className={`${classes} ${cls.flex}`}>{children}</div>
}
