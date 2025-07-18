// import { Container } from "../Container/Container"
// import cls from './Progress.module.scss'

// interface ProgressProps {
//   total: number
//   current: number
// }

// export const Progress = ({ total, current }: ProgressProps) => {
//   const percentage = Math.min((current / total) * 100, 100)

//   return (
//     <Container>
//       <div className={cls.questions}>
//         <span>Вопросы собеседования</span>
//         <span>
//           Выполнено: {current} / {total}
//         </span>
//       </div>
//       <div
//         style={{
//           height: '1rem',
//           width: '100%',
//           borderRadius: '.2rem',
//           overflow: 'hidden',
//         }}
//       >
//         <div
//           style={{
//             height: '20%',
//             width: `${percentage}%`,
//             backgroundColor: '#6A0BFF',
//             transition: 'width 0.3s ease-in-out',
//           }}
//         />
//       </div>
//     </Container>
//   )
// }


import { Container } from "../Container/Container"
import cls from './Progress.module.scss'

interface ProgressProps {
  total: number
  current: number
}

export const Progress = ({ total, current }: ProgressProps) => {
  const percentage = Math.min((current / total) * 100, 100)

  return (
    <Container>
      <div className={cls.questions}>
        <span>Вопросы собеседования</span>
        <span>
          Выполнено: {current} / {total}
        </span>
      </div>

      <div className={cls.progressBar}>
        <div
          className={cls.progressFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </Container>
  )
}
