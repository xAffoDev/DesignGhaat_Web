import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, SunMedium, Sparkles } from 'lucide-react'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'
import { Card } from '../common/Card'
import { materialsData } from '../../data/materialsData'

export function CraftSpotlight() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Material Honesty"
          title="Engineered for Physical Presence"
          description="In coastal Navi Mumbai, signage must endure intense monsoon downpours and humid salt air. We specify materials that age gracefully with dignity."
          action={
            <Link
              to="/materials"
              className="inline-flex items-center text-sm font-semibold text-ghaat-terracotta hover:text-ghaat-terracotta-700 transition-colors gap-1.5"
            >
              <span>Explore Materials Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {materialsData.slice(0, 3).map((item) => (
            <Card key={item.id} hover className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-semibold text-ghaat-terracotta tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-ghaat-sand-100 text-ghaat-stone font-medium">
                    {item.tone}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-ghaat-charcoal mb-2.5">
                  {item.name}
                </h3>

                <p className="text-sm text-ghaat-stone leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-ghaat-sand-200/80 space-y-2">
                <div className="text-xs">
                  <span className="font-semibold text-ghaat-charcoal">Finish: </span>
                  <span className="text-ghaat-stone">{item.finish}</span>
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-ghaat-charcoal">Resilience: </span>
                  <span className="text-ghaat-stone">{item.durability}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
