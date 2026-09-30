import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/common/Container'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { servicesData } from '../data/servicesData'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    return (
      <Container className="py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl text-ghaat-charcoal">Service Not Found</h2>
        <p className="text-sm text-ghaat-stone">The requested service discipline could not be found.</p>
        <Button to="/services" variant="primary">Return to Services</Button>
      </Container>
    )
  }

  return (
    <div>
      <PageHeader
        eyebrow="Discipline Deep Dive"
        title={service.title}
        subtitle={service.summary}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: service.shortTitle }
        ]}
      />

      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="p-8 sm:p-10">
              <h3 className="font-serif text-2xl text-ghaat-charcoal mb-4">
                Overview &amp; Architectural Context
              </h3>
              <p className="text-base text-ghaat-stone leading-relaxed mb-6">
                {service.description}
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-3">
                Key Deliverables &amp; Use Cases
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ghaat-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 text-ghaat-terracotta shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-3">
                Workshop Fabrication Guarantees
              </h4>
              <div className="space-y-3">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-ghaat-sand-50 border border-ghaat-sand-200">
                    <ShieldCheck className="w-5 h-5 text-ghaat-terracotta shrink-0 mt-0.5" />
                    <span className="text-sm text-ghaat-charcoal/90">{h}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex items-center justify-between pt-4">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm text-ghaat-stone hover:text-ghaat-charcoal font-medium">
                <ArrowLeft className="w-4 h-4" />
                <span>All Capabilities</span>
              </Link>
              <Button to="/contact" variant="primary" iconRight={ArrowRight}>
                Consult on {service.shortTitle}
              </Button>
            </div>
          </div>

          {/* Sidebar Specs */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-ghaat-sand-50/70 border border-ghaat-sand-200">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-4">
                Approved Materials
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.materials.map((m, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-white border border-ghaat-sand-200 font-medium text-ghaat-charcoal">
                    {m}
                  </span>
                ))}
              </div>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-2">
                Workshop Location
              </h4>
              <p className="text-xs text-ghaat-stone mb-6">
                Manufactured in-house at our Kharghar studio facility.
              </p>

              <Button to="/contact" variant="secondary" size="sm" className="w-full justify-center">
                Request Specification Sheet
              </Button>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
