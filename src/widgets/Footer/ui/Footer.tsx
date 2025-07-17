import cls from './Footer.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

export function Footer() {
  return (
    <footer className={classNames(cls.Footer, {}, [])}>
      <div className={classNames('container', {}, [])}>
        <p>YeaHub</p>
        <p>Выбери, каким будет IT завтра вместе с нами</p>
        <p>Icons</p>
        <div>
          YeaHub - это полностью открытый проект, призванный обьединить и улучшить IT-сферу. Наш
          исходный код доступен
        </div>
        <p>&copy; 2024 YeaHub</p>
      </div>
    </footer>
  )
}
