import cls from './Footer.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

export function Footer() {
  return (
    <footer className={classNames(cls.Footer, {}, [])}>
      <div className={classNames('container', {}, [])}>
        <div>YeaHub</div>
        <div>Выбери, каким будет IT завтра вместе с нами</div>
        <div>Icons</div>
        <div>
          YeaHub - это полностью открытый проект, призванный обьединить и улучшить IT-сферу. Наш
          исходный код доступен
        </div>
        <div>&copy; 2024 YeaHub</div>
      </div>
    </footer>
  )
}
