import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, MessageSquare, Phone } from 'lucide-react'
import { Button } from '../common/Button'
import { companyInfo } from '../../data/companyInfo'
import { cn } from '../../utils/cn'

export function Navbar({ onOpenEstimate }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { label: 'Services', to: '/services' },
    { label: 'Work', to: '/work' },
    { label: 'Materials & Craft', to: '/materials' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300 border-b',
          isScrolled
            ? 'bg-ghaat-sand/90 backdrop-blur-md border-ghaat-sand-200/90 shadow-warm-sm py-3'
            : 'bg-ghaat-sand/75 backdrop-blur-sm border-transparent py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Tag */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="/images/logo/designghaat-logo.png"
              alt="DesignGhaat Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ghaat-charcoal leading-none">
                DesignGhaat
              </span>
              <span className="text-[11px] tracking-wider text-ghaat-stone uppercase font-medium mt-1">
                Kharghar, Navi Mumbai
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'px-3.5 py-2 rounded-full text-sm font-medium transition-colors',
                    isActive
                      ? 'text-ghaat-terracotta bg-ghaat-terracotta-50/80 font-semibold'
                      : 'text-ghaat-charcoal/80 hover:text-ghaat-terracotta hover:bg-ghaat-sand-100'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              to="/contact"
              iconRight={ArrowUpRight}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ghaat-charcoal hover:bg-ghaat-sand-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-ghaat-sand border-b border-ghaat-sand-300 px-6 pt-6 pb-8 shadow-warm-xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-ghaat-sand-200">
            <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/images/logo/designghaat-logo.png"
                alt="DesignGhaat Logo"
                className="h-10 w-auto"
              />
              <span className="font-serif text-xl font-bold text-ghaat-charcoal">
                DesignGhaat
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-ghaat-stone hover:text-ghaat-charcoal"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 py-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                cn(
                  'px-4 py-3 rounded-xl text-base font-medium transition-colors',
                  isActive ? 'bg-ghaat-terracotta-50 text-ghaat-terracotta font-semibold' : 'text-ghaat-charcoal hover:bg-ghaat-sand-100'
                )
              }
            >
              Home
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    isActive ? 'bg-ghaat-terracotta-50 text-ghaat-terracotta font-semibold' : 'text-ghaat-charcoal hover:bg-ghaat-sand-100'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-ghaat-sand-200 flex flex-col gap-3">
            <Button
              variant="primary"
              size="lg"
              to="/contact"
              className="w-full"
            >
              Request Free Estimate
            </Button>
            <p className="text-center text-xs text-ghaat-stone mt-2">
              Kharghar, Navi Mumbai • Mon – Sat
            </p>
          </div>
        </div>
      )}
    </>
  )
}
