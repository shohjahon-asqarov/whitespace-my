'use client'

import React from 'react'
import { cn } from '@/utils/cn'
import { CardProps } from '@/types'

const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = 'md',
  shadow = 'md',
  border = false,
  ...props
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  }
  
  const borderClasses = border ? 'border border-gray-200' : ''
  
  const classes = cn(
    'bg-white rounded-xl',
    paddingClasses[padding],
    shadowClasses[shadow],
    borderClasses,
    className
  )
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
