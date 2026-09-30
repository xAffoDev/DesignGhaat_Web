import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Shield, Droplets, Sun, ArrowRight } from 'lucide-react'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/common/Container'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { materialsData } from '../data/materialsData'

export function MaterialsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Physical Palette"
        title="Materials, Patinas &amp; Finishes"
        subtitle="We build signage and retail fixtures to look exceptional on day one, and endure years of coastal Navi Mumbai monsoons."
        breadcrumbs={[{ label: 'Materials & Craft' }]}
      />

      <Container className="py-14 sm:py-20">
        {/* Coastal Durability Philosophy Strip */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-ghaat-sand-100/70 border border-ghaat-sand-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <Droplets className="w-5 h-5 text-ghaat-terracotta shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-sm text-ghaat-charcoal">Monsoon Water-Sealing</h4>
              <p className="text-xs text-ghaat-stone mt-1 leading-relaxed">
                IP67 enclosures and concealed weep-holes prevent water logging inside 3D letter bodies during intense monsoon rains.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Shield className="w-5 h-5 text-ghaat-terracotta shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-sm text-ghaat-charcoal">Saline Air Passivation</h4>
              <p className="text-xs text-ghaat-stone mt-1 leading-relaxed">
                Brass and stainless steel surfaces receive protective clear coats to inhibit tea-staining and premature discoloration.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Sun className="w-5 h-5 text-ghaat-terracotta shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-sm text-ghaat-charcoal">High-CRI Warm Lighting</h4>
              <p className="text-xs text-ghaat-stone mt-1 leading-relaxed">
                Calibrated 3000K warm halo illumination avoids cold, fluorescent glare and creates an inviting human hospitality ambiance.
              </p>
            </div>
          </div>
        </div>

        {/* Materials Swatches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materialsData.map((item) => (
            <Card key={item.id} className="p-7 flex flex-col justify-between border border-ghaat-sand-200">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="uppercase font-semibold text-ghaat-terracotta tracking-wider">
                    {item.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-ghaat-sand-100 text-ghaat-stone font-medium">
                    {item.tone}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-ghaat-charcoal mb-2.5">
                  {item.name}
                </h3>

                <p className="text-sm text-ghaat-stone leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-ghaat-sand-200/80 space-y-3">
                <div className="text-xs">
                  <span className="font-semibold text-ghaat-charcoal block mb-0.5">Finishes Available:</span>
                  <span className="text-ghaat-stone">{item.finish}</span>
                </div>

                <div className="text-xs">
                  <span className="font-semibold text-ghaat-charcoal block mb-0.5">Recommended Applications:</span>
                  <span className="text-ghaat-stone">{item.bestFor}</span>
                </div>

                <div className="text-xs">
                  <span className="font-semibold text-ghaat-charcoal block mb-0.5">Coastal Resilience:</span>
                  <span className="text-ghaat-stone">{item.durability}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Physical Swatch Box CTA */}
        <div className="mt-16 text-center max-w-xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl text-ghaat-charcoal">
            Want to examine physical finish samples?
          </h3>
          <p className="text-sm text-ghaat-stone leading-relaxed">
            Architects and interior designers are invited to inspect our curated material swatch board at our Kharghar studio.
          </p>
          <Button to="/contact" variant="primary" iconRight={ArrowRight}>
            Schedule a Studio Swatch Review
          </Button>
        </div>
      </Container>
    </div>
  )
}
