import React from 'react'
import { ArrowRight, Hammer, MapPin, Sparkles, CheckCircle2 } from 'lucide-react'
import { Button } from '../common/Button'
import { Badge } from '../common/Badge'
import { Container } from '../common/Container'
import { companyInfo } from '../../data/companyInfo'

export function HeroSection({ onOpenEstimate }) {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      {/* Subtle warm architectural texture / gradients */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-ghaat-terracotta-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 -z-10 w-80 h-80 bg-ghaat-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ghaat-sand-100 border border-ghaat-sand-300 text-xs font-medium text-ghaat-charcoal/90">
            <span className="w-2 h-2 rounded-full bg-ghaat-terracotta" />
            <span className="font-devanagari font-semibold text-ghaat-terracotta">डिजाइन घाट</span>
            <span className="text-ghaat-stone/60">•</span>
            <span className="text-ghaat-stone">Kharghar, Navi Mumbai Workshop</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-ghaat-charcoal tracking-tight leading-[1.12]">
            Architectural Signage, Handcrafted Fabrication &amp; Retail Presence.
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-lg sm:text-xl text-ghaat-stone max-w-2xl mx-auto font-sans font-normal leading-relaxed">
            We partner with retail store owners, architects, and commercial brands across Navi Mumbai to manufacture dimensional 3D signs, storefront facades, and bespoke metalcraft.
          </p>

          {/* Call to actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              variant="primary"
              size="lg"
              to="/contact"
              iconRight={ArrowRight}
            >
              Start a Project Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/work"
            >
              View Selected Work
            </Button>
          </div>

          {/* Core Highlights Strip */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left border-t border-ghaat-sand-200/90 mt-12">
            <div className="p-3">
              <span className="block text-xs uppercase font-semibold text-ghaat-terracotta tracking-wider">
                Workshop Location
              </span>
              <span className="block text-sm font-medium text-ghaat-charcoal mt-1">
                Kharghar, Navi Mumbai
              </span>
            </div>

            <div className="p-3">
              <span className="block text-xs uppercase font-semibold text-ghaat-terracotta tracking-wider">
                Core Craft
              </span>
              <span className="block text-sm font-medium text-ghaat-charcoal mt-1">
                3D Signage &amp; Fabrication
              </span>
            </div>

            <div className="p-3">
              <span className="block text-xs uppercase font-semibold text-ghaat-terracotta tracking-wider">
                Materiality
              </span>
              <span className="block text-sm font-medium text-ghaat-charcoal mt-1">
                Brass, Acrylic &amp; LEDs
              </span>
            </div>

            <div className="p-3">
              <span className="block text-xs uppercase font-semibold text-ghaat-terracotta tracking-wider">
                Service Radius
              </span>
              <span className="block text-sm font-medium text-ghaat-charcoal mt-1">
                Navi Mumbai &amp; MMR
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
