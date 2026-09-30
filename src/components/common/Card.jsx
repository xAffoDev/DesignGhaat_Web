import React from 'react'
import { cn } from '../../utils/cn'

export function Card({
  children,
  className,
  hover = false,
  bordered = true,
  ...props
}) {
  return (
    <div
      className={cn(
        'bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden',
        bordered && 'border border-ghaat-sand-200/90',
        'shadow-warm-sm',
        hover && 'transition-all duration-300 hover:shadow-warm hover:-translate-y-0.5 hover:border-ghaat-sand-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
