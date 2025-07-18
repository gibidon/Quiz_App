import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import type { Mods } from "@/shared/lib/classNames/classNames"
import cls from './Button.module.scss'

export const BUTTON_VARIANTS = ['primary', 'secondary'] as const
export const BUTTON_SIZES = ['S', 'M', 'L'] as const

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]
export type ButtonSize = (typeof BUTTON_SIZES)[number]

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  destructive?: boolean
  preffix?: ReactNode
  suffix?: ReactNode
  isActive?: boolean
  className?: string
  onClick?: () => void
}

type ButtonProps = BaseButtonProps &
  (ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>)

export function Button ({
    variant = 'primary',
    size = 'M',
    fullWidth = false,
    destructive = false,
    preffix,
    suffix,
    children,
    isActive = false,
    className = '',
    onClick
  }: ButtonProps) {

  const mods: Mods = {
  [cls.active]: isActive,
  [cls[variant]]: true,
  [cls[size]]: true,
  [cls.buttonFull]: fullWidth,
  [cls.destructive]: destructive,
}

  return (
    <button 
      className={classNames(cls.button, mods, [className])}
      onClick={onClick}>
        <span className={cls.preffix}>{preffix}</span>
        <span className={cls.mainContent}>{children}</span>
        <span className={cls.suffix}>{suffix}</span>
    </button>
  );
}


