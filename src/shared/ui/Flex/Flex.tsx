import React from 'react'
import cls from './Flex.module.scss'

type FlexProps = {
  children: React.ReactNode
  justify?: React.CSSProperties['justifyContent']
  align?: React.CSSProperties['alignItems']
  direction?: React.CSSProperties['flexDirection']
  wrap?: React.CSSProperties['flexWrap']
  gap?: React.CSSProperties['gap']
  style?: React.CSSProperties
  className?: string
}

export function Flex({
  children,
  justify = 'flex-start',
  align = 'stretch',
  direction = 'row',
  wrap = 'nowrap',
  gap = '0',
  style = {},
  className = '',
}: FlexProps) {
  const combinedStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
    flexWrap: wrap,
    gap,
    ...style,
  }

  return (
    <div className={`${cls.flexContainer} ${className}`} style={combinedStyles}>
      {children}
    </div>
  )
}
