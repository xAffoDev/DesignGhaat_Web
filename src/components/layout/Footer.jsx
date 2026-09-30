import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'
import { companyInfo } from '../../data/companyInfo'
import { Container } from '../common/Container'

export function Footer() {
  return (
    <footer className="bg-ghaat-sand-100/80 border-t border-ghaat-sand-200 mt-20 pt-16 pb-12 text-ghaat-charcoal">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-ghaat-sand-200">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo/designghaat-logo.png"
                alt="DesignGhaat Logo"
                className="h-10 w-auto"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-ghaat-charcoal">
                DesignGhaat
              </span>
            </Link>
            <p className="text-sm text-ghaat-stone max-w-sm leading-relaxed">
              Design, signage, fabrication, and retail-branding studio based in Kharghar, Navi Mumbai. We combine dimensional craft with modern architectural aesthetics.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center text-xs font-devanagari text-ghaat-terracotta tracking-wider font-semibold">
                डिजाइन घाट • खारघर, नवी मुंबई
              </span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-ghaat-stone">
              <li>
                <Link to="/services" className="hover:text-ghaat-terracotta transition-colors">
                  Architectural & 3D Signage
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-ghaat-terracotta transition-colors">
                  Retail Storefronts & Facades
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-ghaat-terracotta transition-colors">
                  Custom Metal & Acrylic Fabrication
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-ghaat-terracotta transition-colors">
                  Wayfinding & Environmental Graphics
                </Link>
              </li>
              <li>
                <Link to="/materials" className="hover:text-ghaat-terracotta transition-colors">
                  Materials & Finishes Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-ghaat-stone">
              <li>
                <Link to="/work" className="hover:text-ghaat-terracotta transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/materials" className="hover:text-ghaat-terracotta transition-colors">
                  Materials & Finishes
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-ghaat-terracotta transition-colors">
                  Our Kharghar Workshop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ghaat-terracotta transition-colors">
                  Request an Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Workshop & Location Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-4">
              Workshop Studio
            </h4>
            <div className="space-y-3 text-sm text-ghaat-stone">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-ghaat-terracotta shrink-0 mt-0.5" />
                <span>{companyInfo.location.addressLine}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-ghaat-terracotta shrink-0 mt-0.5" />
                <span>{companyInfo.hours.weekdays}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-ghaat-terracotta shrink-0" />
                <span>{companyInfo.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Integrity Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ghaat-stone">
          <p>
            © {new Date().getFullYear()} DesignGhaat. All rights reserved. Kharghar, Navi Mumbai.
          </p>
          <p className="text-center sm:text-right text-[11px] text-ghaat-stone/80">
            Sales-demo preview • Authentic craft & fabrication capabilities
          </p>
        </div>
      </Container>
    </footer>
  )
}
