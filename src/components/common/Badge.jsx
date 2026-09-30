import React from 'react'
import { cn } from '../../utils/cn'

export function Badge({
  children,
  variant = 'sand',
  className,
  ...props
}) {
  const variants = {
    sand: 'bg-ghaat-sand-100 text-ghaat-sand-800 border-ghaat-sand-300',
    terracotta: 'bg-ghaat-terracotta-50 text-ghaat-terracotta-800 border-ghaat-terracotta-200',
    amber: 'bg-ghaat-amber-50 text-ghaat-amber-700 border-ghaat-amber-200',
    teal: 'bg-ghaat-teal-50 text-ghaat-teal-700 border-ghaat-teal-200',
    charcoal: 'bg-ghaat-charcoal text-ghaat-sand-50 border-ghaat-charcoal',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide uppercase font-sans',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
