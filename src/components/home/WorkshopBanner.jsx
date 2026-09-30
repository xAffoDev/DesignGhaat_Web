import React from 'react'
import { MapPin, Phone, Calendar, ArrowRight } from 'lucide-react'
import { Container } from '../common/Container'
import { Button } from '../common/Button'
import { companyInfo } from '../../data/companyInfo'

export function WorkshopBanner() {
  return (
    <section className="py-16 sm:py-20 bg-ghaat-sand-100/70 border-t border-ghaat-sand-200">
      <Container>
        <div className="rounded-3xl bg-white/90 border border-ghaat-sand-300/80 p-8 sm:p-12 shadow-warm max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3.5 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-ghaat-terracotta uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Workshop &amp; Studio Consultation</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl text-ghaat-charcoal">
              Touch Material Samples at Our Kharghar Workshop
            </h3>

            <p className="text-sm text-ghaat-stone leading-relaxed">
              Bring your architectural drawings, elevation sketches, or retail branding mockups. Inspect physical metal finishes, LED temperatures, and acrylic thicknesses in person.
            </p>

            <div className="pt-2 text-xs text-ghaat-stone space-y-1">
              <p>📍 {companyInfo.location.addressLine}</p>
              <p>⏰ {companyInfo.hours.weekdays}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <Button
              variant="primary"
              size="md"
              to="/contact"
              iconRight={ArrowRight}
              className="w-full justify-center"
            >
              Book Studio Visit
            </Button>
            <Button
              variant="outline"
              size="md"
              to="/work"
              className="w-full justify-center"
            >
              Browse Showcase
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
