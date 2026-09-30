import React from 'react'
import { cn } from '../../utils/cn'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  className,
  titleClassName
}) {
  const isCentered = align === 'center'

  return (
    <div className={cn(
      'mb-10 sm:mb-14',
      isCentered ? 'text-center max-w-2xl mx-auto' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-6',
      className
    )}>
      <div className={isCentered ? '' : 'max-w-2xl'}>
        {eyebrow && (
          <div className={cn(
            'inline-flex items-center gap-2 mb-3 text-xs tracking-wider uppercase font-semibold text-ghaat-terracotta',
            isCentered && 'justify-center'
          )}>
            <span className="w-6 h-[1.5px] bg-ghaat-terracotta/40 rounded-full" />
            <span>{eyebrow}</span>
            <span className="w-6 h-[1.5px] bg-ghaat-terracotta/40 rounded-full" />
          </div>
        )}
        
        <h2 className={cn(
          'text-3xl sm:text-4xl lg:text-4xl font-serif tracking-tight text-ghaat-charcoal leading-[1.18]',
          titleClassName
        )}>
          {title}
        </h2>
        
        {description && (
          <p className="mt-3.5 text-base sm:text-lg text-ghaat-stone leading-relaxed font-sans font-normal">
            {description}
          </p>
        )}
      </div>

      {action && !isCentered && (
        <div className="shrink-0">
          {action}
        </div>
      )}
    </div>
  )
}
