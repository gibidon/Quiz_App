import { classNames } from '@/shared/lib/classNames/classNames'
import manPhoto from '@/shared/assets/images/man.png'
import cls from './BannerBlock.module.scss'

export function BannerBlock() {
  return (
    <section className={classNames(cls.banner, {}, [])}>
      <span className={cls.Goal}>YEAHUB ПОМОГАЕТ РАСТИ И ДОСТИГАТЬ ЦЕЛЕЙ</span>
      <img src={manPhoto} alt="goal_photo" />
    </section>
  )
}
