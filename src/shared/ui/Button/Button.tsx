import cls from './Button.module.scss'

interface ButtonProps {
  title: string
  onClick: () => void
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button className={cls.button} onClick={onClick}>
      {title}
    </button>
  )
}
