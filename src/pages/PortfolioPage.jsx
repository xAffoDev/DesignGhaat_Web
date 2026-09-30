import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Tag } from 'lucide-react'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/common/Container'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { portfolioData } from '../data/portfolioData'
import { cn } from '../utils/cn'

const categories = ['All', 'Retail', 'Hospitality', 'Corporate', 'Wayfinding']

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <div>
      <PageHeader
        eyebrow="Craft in Context"
        title="Selected Work &amp; Fabrication Showcase"
        subtitle="Dimensional signage installations, storefront transformations, and architectural environmental graphics across Navi Mumbai."
        breadcrumbs={[{ label: 'Work' }]}
      />

      <Container className="py-12 sm:py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-ghaat-sand-200">
          <span className="text-xs font-semibold text-ghaat-stone uppercase tracking-wider mr-2">
            Filter:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
                activeCategory === category
                  ? 'bg-ghaat-charcoal text-ghaat-sand-50 shadow-warm-sm'
                  : 'bg-ghaat-sand-100 text-ghaat-stone hover:bg-ghaat-sand-200 hover:text-ghaat-charcoal'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} hover className="flex flex-col justify-between p-6 sm:p-7 border border-ghaat-sand-200">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs text-ghaat-stone">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-ghaat-terracotta" />
                    <span>{project.location}</span>
                  </span>
                  <Badge variant="sand">{project.category}</Badge>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-ghaat-charcoal mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-ghaat-terracotta font-medium mb-3">
                  {project.clientType} • {project.tag}
                </p>

                <p className="text-sm text-ghaat-stone leading-relaxed mb-5">
                  {project.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-ghaat-sand-200/80 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.materials.map((m, idx) => (
                    <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-ghaat-sand-100 text-ghaat-charcoal font-medium">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-ghaat-stone">
                    Scale: {project.dimensions}
                  </span>
                  <Link
                    to={`/work/${project.id}`}
                    className="text-xs font-semibold text-ghaat-terracotta hover:text-ghaat-terracotta-700 flex items-center gap-1"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Honest Disclosure Note */}
        <div className="mt-16 p-6 rounded-2xl bg-ghaat-sand-100/70 border border-ghaat-sand-200 text-center max-w-2xl mx-auto">
          <p className="text-xs text-ghaat-stone leading-relaxed">
            Note: Projects depicted represent DesignGhaat's workshop fabrication capabilities, material assemblies, and conceptual demo installations. Actual client portfolio pieces can be inspected in high resolution at our Kharghar studio.
          </p>
        </div>
      </Container>
    </div>
  )
}
