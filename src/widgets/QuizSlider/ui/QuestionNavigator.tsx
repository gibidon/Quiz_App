import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './QuestionNavigator.module.scss'

interface QuestionNavigatorProps {
  onPrev: () => void
  onNext: () => void
  disablePrev: boolean
  disableNext: boolean
}

export function QuestionNavigator({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}: QuestionNavigatorProps) {
  return (
    <div className={cls.navigator}>
      <button
        className={classNames(cls.navButton, {}, [cls.prev])}
        onClick={onPrev}
        disabled={disablePrev}
      >
        Назад
      </button>
      <button
        className={classNames(cls.navButton, {}, [cls.next])}
        onClick={onNext}
        disabled={disableNext}
      >
        Далее
      </button>
    </div>
  )
}
