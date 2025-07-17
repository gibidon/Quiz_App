import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

interface ButtonProps {
  title: string
  isActive: boolean
  onClick: () => void
}

export function Button({ title, isActive, onClick }: ButtonProps) {
  console.log('ia', isActive)
  const mods: Mods = {
    [cls.active]: isActive,
  }

  return (
    <button className={classNames(cls.button, mods, [])} onClick={onClick}>
      {title}
    </button>
  )
}
