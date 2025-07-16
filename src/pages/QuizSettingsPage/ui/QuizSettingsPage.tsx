import { classNames } from '@/shared/lib/classNames/classNames'
import { QuizSettings } from '@/widgets/QuizSettings'
import cls from './QuizSettingsPage.module.scss'

export default function QuizSettingsPage() {
  return (
    <div className={classNames(cls.quiz_settings_page, {}, ['container'])}>
      <h1>Собеседование</h1>
      <QuizSettings />
      <div>Parameters settings</div>
    </div>
  )
}
