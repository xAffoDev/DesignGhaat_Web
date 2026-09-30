import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Compass, Building2, Wrench } from 'lucide-react'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'
import { Card } from '../common/Card'
import { servicesData } from '../../data/servicesData'

const serviceIcons = {
  'architectural-signage': Building2,
  'retail-storefronts': Layers,
  'custom-fabrication': Wrench,
  'wayfinding-environmental': Compass,
}

export function ServicePillars() {
  return (
    <section className="py-16 sm:py-20 bg-ghaat-sand-100/50 border-y border-ghaat-sand-200/80">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title="Fabrication Disciplines"
          description="Every piece of physical branding is manufactured in our workshop using calibrated architectural materials engineered for coastal weather durability."
          action={
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-semibold text-ghaat-terracotta hover:text-ghaat-terracotta-700 transition-colors gap-1.5"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const Icon = serviceIcons[service.id] || Building2
            return (
              <Card key={service.id} hover className="p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-ghaat-terracotta-50 text-ghaat-terracotta flex items-center justify-center mb-5 border border-ghaat-terracotta-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-serif text-2xl text-ghaat-charcoal mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-ghaat-stone leading-relaxed mb-5">
                    {service.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal/70">
                      Typical Applications:
                    </span>
                    <ul className="text-xs text-ghaat-stone space-y-1">
                      {service.applications.slice(0, 3).map((app, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-ghaat-terracotta/70" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-ghaat-sand-200/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.materials.slice(0, 2).map((m, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-ghaat-sand-100 text-ghaat-charcoal font-medium">
                        {m}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-semibold text-ghaat-terracotta hover:text-ghaat-terracotta-700 flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
