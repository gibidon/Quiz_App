import { Link } from "react-router-dom"
import { Container } from '@/shared/ui/Container/Container'
import hornIcon from '@/shared/assets/images/horn.svg'
import chatIcon from '@/shared/assets/images/chat.svg'
import cls from './YeaHubBlock.module.scss'

export function YeahubBlock() {
  return (
    <Container>
      <div className={cls.yeahubBlock}>
        <h2>YeaHub обьединяет специалистов</h2>
        <p>Подпишитесь на наш канал и станьте частью IT-сообщества, которое растет вместе с вами.</p>
        <div className={cls.links}>
          <Link to='/'><span><img src={hornIcon}/></span> Тренажер собеседований</Link>
          <Link to='/'><span><img src={chatIcon}/></span> Тренажер собеседований</Link>
        </div>
      </div>
    </Container>
  )
}
