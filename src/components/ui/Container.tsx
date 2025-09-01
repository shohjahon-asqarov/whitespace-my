'use client'

import React from 'react'
import { cn } from '@/utils/cn'
import { LayoutProps } from '@/types'

const Container: React.FC<LayoutProps> = ({
  children,
  className,
  container = true,
  maxWidth = 'xl',
  ...props
}) => {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  }
  
  const classes = cn(
    'mx-auto px-4 sm:px-6 lg:px-8',
    container && maxWidthClasses[maxWidth],
    className
  )
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Container
