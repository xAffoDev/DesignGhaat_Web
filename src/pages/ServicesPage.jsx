import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Sparkles, Building2, Layers, Wrench, Compass } from 'lucide-react'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/common/Container'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { servicesData } from '../data/servicesData'

const icons = {
  'architectural-signage': Building2,
  'retail-storefronts': Layers,
  'custom-fabrication': Wrench,
  'wayfinding-environmental': Compass,
}

export function ServicesPage() {
  const context = useOutletContext()
  const openEstimateModal = context?.openEstimateModal

  return (
    <div>
      <PageHeader
        eyebrow="Our Capabilities"
        title="Physical Branding & Architectural Fabrication"
        subtitle="From single 3D backlit metal logos to comprehensive multi-floor wayfinding and storefront claddings, built with precision in Kharghar."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <Container className="py-14 sm:py-20">
        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const Icon = icons[service.id] || Building2
            return (
              <Card key={service.id} className="p-8 sm:p-10 border border-ghaat-sand-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Title & Description */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-ghaat-terracotta-50 text-ghaat-terracotta flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs uppercase font-semibold text-ghaat-terracotta tracking-wider">
                        {service.categories.join(' • ')}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl text-ghaat-charcoal">
                      {service.title}
                    </h2>

                    <p className="text-base text-ghaat-stone leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-2">
                        Applications &amp; Scope:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-ghaat-stone">
                        {service.applications.map((app, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-ghaat-terracotta shrink-0 mt-0.5" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Materials & Highlights */}
                  <div className="lg:col-span-5 bg-ghaat-sand-50/80 rounded-2xl p-6 border border-ghaat-sand-200 space-y-5">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-2.5">
                        Materials &amp; Components:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.materials.map((m, i) => (
                          <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white border border-ghaat-sand-200 text-ghaat-charcoal font-medium">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-2">
                        Craftsmanship Focus:
                      </h4>
                      <ul className="text-xs text-ghaat-stone space-y-1.5">
                        {service.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-ghaat-terracotta shrink-0 mt-1.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-xs font-semibold text-ghaat-terracotta hover:text-ghaat-terracotta-700 flex items-center gap-1"
                      >
                        <span>Detailed Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Button
                        variant="secondary"
                        size="sm"
                        to="/contact"
                      >
                        Inquire
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
