import { ImageCard } from '@/shared/ui/ImageCard/ImageCard'
import checkMark from '@/shared/assets/images/CheckMark.svg'

export function JoinUsBlock() {
  return (
    <>
      <p>
        <ImageCard src={checkMark} alt={'check mark'} />
        Развивайтесь с нами!
      </p>
      <p>Станьте членов нашего сообщества и получите доступ ко всем возможностям платформы</p>
      <div className="links"></div>
    </>
  )
}
