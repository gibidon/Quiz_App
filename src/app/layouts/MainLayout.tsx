import { ReactNode } from 'react'
import cls from './MainLayout.module.scss'

export function MainLayout({ children }: { children: ReactNode }) {
  return <div className={cls.mainLayout}>{children}</div>
}
