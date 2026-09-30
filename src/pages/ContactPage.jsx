import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/common/Container'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { companyInfo } from '../data/companyInfo'

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    service: 'Architectural & 3D Signage',
    location: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div>
      <PageHeader
        eyebrow="Consultation &amp; Estimates"
        title="Start Your Project with DesignGhaat"
        subtitle="Visit our workshop in Kharghar, Navi Mumbai or request a detailed estimate for your architectural signage and fabrication needs."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 border border-ghaat-sand-200">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ghaat-charcoal">
                    Estimate Request Sent
                  </h3>
                  <p className="text-sm text-ghaat-stone max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our Kharghar workshop team will review your specifications and contact you at {formData.phone || formData.email} within 24 hours.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl text-ghaat-charcoal mb-1">
                      Request an Estimate
                    </h3>
                    <p className="text-xs text-ghaat-stone">
                      Fill out your project details. We do not share your contact information.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                        Business / Project Name
                      </label>
                      <input
                        type="text"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        placeholder="e.g. Saffron Bistro / Studio Form"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta"
                      >
                        <option>Architectural & 3D Signage</option>
                        <option>Retail Storefront & Facades</option>
                        <option>Custom Metal & Acrylic Fabrication</option>
                        <option>Wayfinding & Environmental Graphics</option>
                        <option>Other / Bespoke Craft</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                        Site Location (City / Sector)
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Kharghar Sec 20, Vashi, Panvel"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                      Project Description &amp; Scope
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Share approximate dimensions, lighting requirements, or architectural deadlines..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                      iconRight={Send}
                    >
                      Submit for Free Estimate
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>

          {/* Workshop Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 bg-ghaat-sand-50/70 border border-ghaat-sand-200 space-y-6">
              <div>
                <h3 className="font-serif text-xl text-ghaat-charcoal mb-1">
                  Kharghar Workshop &amp; Studio
                </h3>
                <span className="text-xs text-ghaat-stone">
                  In-person material consultation available
                </span>
              </div>

              <div className="space-y-4 text-sm text-ghaat-charcoal/90">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-ghaat-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium">Physical Workshop</span>
                    <span className="text-xs text-ghaat-stone leading-relaxed">
                      {companyInfo.location.addressLine}
                    </span>
                    <span className="text-xs text-ghaat-stone/70 block mt-0.5">
                      Landmark: {companyInfo.location.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-ghaat-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium">Operating Hours</span>
                    <span className="text-xs text-ghaat-stone block">
                      {companyInfo.hours.weekdays}
                    </span>
                    <span className="text-xs text-ghaat-stone block mt-0.5">
                      {companyInfo.hours.sunday}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-ghaat-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium">Inquiry Email</span>
                    <span className="text-xs text-ghaat-stone">{companyInfo.contact.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-ghaat-sand-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ghaat-charcoal mb-2.5">
                  Coverage Across Navi Mumbai
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {companyInfo.serviceAreas.map((area, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded bg-white border border-ghaat-sand-200 text-ghaat-stone font-medium">
                      {area}
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
