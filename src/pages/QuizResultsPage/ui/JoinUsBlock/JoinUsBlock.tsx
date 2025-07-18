import { Link } from "react-router-dom"
import { ImageCard } from '@/shared/ui/ImageCard/ImageCard'
import { Container } from '@/shared/ui/Container/Container'
import { Flex } from "@/shared/ui/Flex"
import checkMark from '@/shared/assets/images/CheckMark.svg'
import manIcon from '@/shared/assets/images/man.svg'
import noteIcon from '@/shared/assets/images/note.svg'
import arrowIcon from '@/shared/assets/images/arrow.svg'
import pencilIcon from '@/shared/assets/images/pencil.svg'
import cls from './JoinUsBlock.module.scss'

export function JoinUsBlock() {
  return (
    <Container>
      <Flex wrap="nowrap" align="center" gap={20}>
        <ImageCard src={checkMark} alt={'check mark'} />
        <span>  
          Развивайтесь с нами!
        </span>
      </Flex>
      <p>Станьте членов нашего сообщества и получите доступ ко всем возможностям платформы</p>
      <div className={cls.links}>
        <Link to='/'><span><img src={manIcon}/></span> Тренажер собеседований</Link>
        <Link to='/'><span><img src={pencilIcon}/></span> Тренажер собеседований</Link>
        <Link to='/'><span><img src={arrowIcon}/></span> Тренажер собеседований</Link>
        <Link to='/'><span><img src={noteIcon}/></span> Тренажер собеседований</Link>
      </div>
      <Flex justify="end">
        <Link to='/' className={cls.membershipLink}>
          Стать членом сообщества
        </Link>
      </Flex>
    </Container>
  )
}
