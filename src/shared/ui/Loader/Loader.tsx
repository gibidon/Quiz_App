import cls from './Loader.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

export const Loader = () => {
  return (
    <div className={classNames(cls.loaderContainer, {}, [])}>
      <div className={cls.spinner}></div>
    </div>
  )
}
