import React from 'react'
import cls from './Container.module.scss'

type ContainerProps = {
  children: React.ReactNode
  maxWidth?: string | number
  padding?: string
  margin?: string
  style?: React.CSSProperties
  className?: string
}

export function Container({
  children,
  padding = '1rem',
  style = {},
  className = '',
}: ContainerProps) {
  const combinedStyle: React.CSSProperties = {
    padding,
    borderRadius: '1rem',
    ...style,
  }

  return (
    <div className={`${cls.container} ${className}`} style={combinedStyle}>
      {children}
    </div>
  )
}
