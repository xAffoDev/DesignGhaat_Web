import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler, Layers, CheckCircle2 } from 'lucide-react'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/common/Container'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { portfolioData } from '../data/portfolioData'

export function PortfolioDetailPage() {
  const { id } = useParams()
  const project = portfolioData.find((p) => p.id === id)

  if (!project) {
    return (
      <Container className="py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl text-ghaat-charcoal">Project Not Found</h2>
        <p className="text-sm text-ghaat-stone">The requested project showcase could not be found.</p>
        <Button to="/work" variant="primary">Return to Portfolio</Button>
      </Container>
    )
  }

  return (
    <div>
      <PageHeader
        eyebrow="Case Study"
        title={project.title}
        subtitle={`${project.clientType} • ${project.location}`}
        breadcrumbs={[
          { label: 'Work', to: '/work' },
          { label: project.title }
        ]}
      />

      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Case Study */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="terracotta">{project.category}</Badge>
                <span className="text-xs text-ghaat-stone">Demo Project Concept</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-ghaat-charcoal mb-3">
                  Design Brief &amp; Concept
                </h3>
                <p className="text-base text-ghaat-stone leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-3">
                  Workshop Scope of Execution
                </h4>
                <ul className="space-y-2.5">
                  {project.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-ghaat-charcoal/80">
                      <CheckCircle2 className="w-4 h-4 text-ghaat-terracotta shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <div className="flex items-center justify-between pt-4">
              <Link to="/work" className="inline-flex items-center gap-2 text-sm text-ghaat-stone hover:text-ghaat-charcoal font-medium">
                <ArrowLeft className="w-4 h-4" />
                <span>All Projects</span>
              </Link>
              <Button to="/contact" variant="primary" iconRight={ArrowRight}>
                Discuss a Similar Project
              </Button>
            </div>
          </div>

          {/* Sidebar Project Meta */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-ghaat-sand-50/70 border border-ghaat-sand-200 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal">
                Project Metadata
              </h4>

              <div className="space-y-3 text-sm text-ghaat-charcoal/90">
                <div>
                  <span className="text-xs text-ghaat-stone block">Location</span>
                  <span className="font-medium">{project.location}</span>
                </div>
                <div>
                  <span className="text-xs text-ghaat-stone block">Typology</span>
                  <span className="font-medium">{project.clientType}</span>
                </div>
                <div>
                  <span className="text-xs text-ghaat-stone block">Dimensions / Scale</span>
                  <span className="font-medium">{project.dimensions}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-ghaat-sand-200">
                <span className="text-xs text-ghaat-stone block mb-2">Specified Materials</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.materials.map((m, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white border border-ghaat-sand-200 text-ghaat-charcoal">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
