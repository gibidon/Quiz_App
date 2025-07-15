import React from 'react'

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
  maxWidth = '1024px',
  padding = '0 1rem',
  margin = '0 auto',
  style = {},
  className = '',
}: ContainerProps) {
  const combinedStyle: React.CSSProperties = {
    maxWidth,
    width: '100%',
    padding,
    margin,
    ...style,
  }

  return (
    <div className={className} style={combinedStyle}>
      {children}
    </div>
  )
}
