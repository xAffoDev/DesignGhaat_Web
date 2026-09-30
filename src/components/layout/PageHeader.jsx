import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Container } from '../common/Container'
import { cn } from '../../utils/cn'

export function PageHeader({
  title,
  subtitle,
  eyebrow,
  breadcrumbs = [],
  className
}) {
  return (
    <div className={cn("pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-ghaat-sand-200/80 bg-gradient-to-b from-ghaat-sand-100/50 to-ghaat-sand", className)}>
      <Container>
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-ghaat-stone mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-ghaat-terracotta transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.label}>
                <ChevronRight className="w-3.5 h-3.5 text-ghaat-stone/60" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-ghaat-terracotta transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-ghaat-charcoal font-medium">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-wider uppercase font-semibold text-ghaat-terracotta">
            <span className="w-5 h-[1.5px] bg-ghaat-terracotta/40 rounded-full" />
            <span>{eyebrow}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ghaat-charcoal tracking-tight leading-[1.15] max-w-3xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-ghaat-stone max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </Container>
    </div>
  )
}
