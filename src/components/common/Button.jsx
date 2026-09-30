import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

/**
 * Premium tactile button component adhering to DesignGhaat's warm aesthetic.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  to,
  href,
  iconLeft: IconLeft,
  iconRight: IconRight,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ghaat-terracotta disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]'

  const variants = {
    primary: 'bg-ghaat-terracotta text-white hover:bg-ghaat-terracotta-600 shadow-warm hover:shadow-warm-lg',
    secondary: 'bg-ghaat-sand-100 text-ghaat-charcoal hover:bg-ghaat-sand-200 border border-ghaat-sand-300',
    outline: 'border border-ghaat-charcoal/20 text-ghaat-charcoal hover:border-ghaat-terracotta hover:text-ghaat-terracotta hover:bg-ghaat-terracotta-50/50',
    ghost: 'text-ghaat-charcoal hover:text-ghaat-terracotta hover:bg-ghaat-sand-100',
    teal: 'bg-ghaat-teal text-white hover:bg-ghaat-teal-600 shadow-warm hover:shadow-warm-lg',
    white: 'bg-white text-ghaat-charcoal hover:bg-ghaat-sand-50 shadow-warm border border-ghaat-sand-200'
  }

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5'
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  const content = (
    <>
      {IconLeft && <IconLeft className={cn("shrink-0", size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4")} />}
      <span>{children}</span>
      {IconRight && <IconRight className={cn("shrink-0", size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4")} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
