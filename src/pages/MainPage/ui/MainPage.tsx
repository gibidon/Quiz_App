import { classNames } from '@/shared/lib/classNames/classNames'
import { BannerBlock } from './BannerBlock/BannerBlock'
import { AdvantagesBlock } from './AdvantagesBlock/AdvantagesBlock'
import { PrepareInterviewBlock } from './PrepareInterviewBlock/PrepareInterviewBlock'
import { InterviewModeBlock } from './InterviewModeBlock/InterviewModeBlock'
import { StatisticsBlock } from './StatisticsBlock/StatisticsBlock'
import cls from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={classNames(cls.mainPage, {}, ['container'])}>
      <BannerBlock />
      <AdvantagesBlock />
      <PrepareInterviewBlock />
      <InterviewModeBlock />
      <StatisticsBlock />
    </div>
  )
}

export default MainPage
