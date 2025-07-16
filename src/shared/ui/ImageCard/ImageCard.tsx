import cls from './ImageCard.module.scss'

export interface ImageCardProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}

export const ImageCard = ({ src, alt, className = '', imgClassName = '' }: ImageCardProps) => {
  return (
    <div className={`${cls.card} ${className}`}>
      <img src={src} alt={alt} className={`${cls.image} ${imgClassName}`} />
    </div>
  )
}
