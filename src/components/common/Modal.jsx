import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '../../utils/cn'

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-xl'
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-ghaat-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <div 
          className={cn(
            "relative w-full transform rounded-2xl bg-ghaat-sand-50 p-6 sm:p-8 text-left shadow-warm-xl transition-all border border-ghaat-sand-200",
            maxWidth
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-ghaat-sand-200/80">
            <div>
              {title && (
                <h3 className="text-xl sm:text-2xl font-serif text-ghaat-charcoal">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="mt-1 text-sm text-ghaat-stone">
                  {subtitle}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-1.5 text-ghaat-stone hover:text-ghaat-charcoal hover:bg-ghaat-sand-200 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
