import cls from './Progress.module.scss'

interface ProgressProps {
  total: number
  current: number
}

export const Progress = ({ total, current }: ProgressProps) => {
  const percentage = Math.min((current / total) * 100, 100)

  return (
    <>
      <div className={cls.questions}>
        <span>Вопросы собеседования</span>
        <span>
          Выполнено: {current} / {total}
        </span>
      </div>
      <div
        style={{
          height: '1rem',
          width: '100%',
          borderRadius: '.2rem',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '20%',
            width: `${percentage}%`,
            backgroundColor: '#6A0BFF',
            transition: 'width 0.3s ease-in-out',
          }}
        />
      </div>
    </>
  )
}
