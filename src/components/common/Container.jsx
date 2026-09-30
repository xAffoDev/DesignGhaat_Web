import React from 'react'
import { cn } from '../../utils/cn'

export function Container({
  children,
  className,
  size = 'default',
  ...props
}) {
  const sizes = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full'
  }

  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8 w-full',
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
