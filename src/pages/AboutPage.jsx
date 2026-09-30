import React from 'react'
import { MapPin, Hammer, Compass, HeartHandshake, CheckCircle2 } from 'lucide-react'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/common/Container'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { companyInfo } from '../data/companyInfo'

export function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Our Story &amp; Ethos"
        title="Rooted in Craft. Built for Architecture."
        subtitle="The story behind DesignGhaat — a dedicated signage and custom fabrication studio in Kharghar, Navi Mumbai."
        breadcrumbs={[{ label: 'About' }]}
      />

      <Container className="py-14 sm:py-20 space-y-16">
        {/* The Meaning of Ghaat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-ghaat-terracotta uppercase tracking-wider">
              <span className="font-devanagari text-base">घाट</span>
              <span>• The Concept of Arrival</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-ghaat-charcoal leading-tight">
              A Ghaat is where solid stone meets open water — a place of arrival, foundation, and craft.
            </h2>

            <p className="text-base text-ghaat-stone leading-relaxed">
              In traditional Indian architecture, a <em className="font-serif">Ghaat</em> represents structured stone steps that ground human life alongside rivers. To us, <strong>DesignGhaat (डिजाइन घाट)</strong> embodies that exact role for brand identity: creating solid, tangible physical structures that ground a company’s identity in the physical world.
            </p>

            <p className="text-base text-ghaat-stone leading-relaxed">
              Based in Sector 20, Kharghar, our studio was founded to bridge the gap between abstract architectural drawings and on-site fabrication reality. We do not treat signage as an afterthought sticker; we treat it as an architectural element of the building.
            </p>
          </div>

          <div className="lg:col-span-5">
            <Card className="p-8 bg-ghaat-sand-100/80 border border-ghaat-sand-300/80 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-white p-3 shadow-warm-sm border border-ghaat-sand-200 flex items-center justify-center">
                <img
                  src="/images/logo/designghaat-logo.png"
                  alt="DesignGhaat Emblem"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h3 className="font-serif text-xl text-ghaat-charcoal mb-1">
                  The Kharghar Workshop
                </h3>
                <p className="text-xs text-ghaat-stone">
                  {companyInfo.location.addressLine}
                </p>
              </div>

              <div className="pt-2 border-t border-ghaat-sand-200 text-xs text-ghaat-stone space-y-2">
                <p>✓ In-house metal forming &amp; finishing</p>
                <p>✓ Acrylic thermo-forming and laser cutting</p>
                <p>✓ Architectural LED calibration &amp; assembly</p>
                <p>✓ Professional on-site installation across MMR</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Studio Principles */}
        <div className="pt-10 border-t border-ghaat-sand-200">
          <div className="max-w-2xl mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-ghaat-charcoal mb-3">
              How We Work
            </h3>
            <p className="text-sm text-ghaat-stone leading-relaxed">
              Our commitments to commercial clients, independent store owners, and collaborating architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border border-ghaat-sand-200">
              <div className="w-10 h-10 rounded-xl bg-ghaat-terracotta-50 text-ghaat-terracotta flex items-center justify-center mb-4">
                <Hammer className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-ghaat-charcoal mb-2">
                Honesty in Materials
              </h4>
              <p className="text-xs text-ghaat-stone leading-relaxed">
                If brass is specified, we fabricate with genuine brass sheet, not thin imitation foil. Every metal gauge and acrylic sheet is verified for longevity.
              </p>
            </Card>

            <Card className="p-6 border border-ghaat-sand-200">
              <div className="w-10 h-10 rounded-xl bg-ghaat-amber-50 text-ghaat-amber-600 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-ghaat-charcoal mb-2">
                Architectural Alignment
              </h4>
              <p className="text-xs text-ghaat-stone leading-relaxed">
                We review structural wall compositions, wind loads, and electrical rough-ins before fabrication starts, ensuring clean concealed wiring on handover.
              </p>
            </Card>

            <Card className="p-6 border border-ghaat-sand-200">
              <div className="w-10 h-10 rounded-xl bg-ghaat-teal-50 text-ghaat-teal-600 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-ghaat-charcoal mb-2">
                Direct Maker Access
              </h4>
              <p className="text-xs text-ghaat-stone leading-relaxed">
                You speak directly with the people fabricating your signs at our Kharghar studio, ensuring nothing is lost in translation between sketch and street.
              </p>
            </Card>
          </div>
        </div>

        {/* Visit Call to action */}
        <div className="text-center pt-8">
          <Button to="/contact" variant="primary" size="lg">
            Schedule a Studio Visit in Kharghar
          </Button>
        </div>
      </Container>
    </div>
  )
}
