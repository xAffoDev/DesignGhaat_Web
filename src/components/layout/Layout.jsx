import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Modal } from '../common/Modal'
import { Button } from '../common/Button'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { companyInfo } from '../../data/companyInfo'
import { MessageCircle, Send } from 'lucide-react'

export function Layout() {
  useScrollToTop()
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleModalSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setIsEstimateModalOpen(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-ghaat-sand text-ghaat-charcoal font-sans selection:bg-ghaat-terracotta-100 selection:text-ghaat-terracotta-900">
      {/* Top Announcement Bar */}
      <div className="bg-ghaat-sand-100 border-b border-ghaat-sand-200/80 py-2 px-4 text-center text-xs text-ghaat-stone font-medium">
        <span>📍 Kharghar Workshop & Design Studio • Serving Navi Mumbai & Greater Mumbai • </span>
        <button 
          onClick={() => setIsEstimateModalOpen(true)}
          className="underline text-ghaat-terracotta hover:text-ghaat-terracotta-700 ml-1 font-semibold"
        >
          Book a Studio Visit
        </button>
      </div>

      <Navbar onOpenEstimate={() => setIsEstimateModalOpen(true)} />

      <main className="flex-1">
        <Outlet context={{ openEstimateModal: () => setIsEstimateModalOpen(true) }} />
      </main>

      <Footer />

      {/* Floating Quick Action */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5">
        <button
          onClick={() => setIsEstimateModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-ghaat-charcoal text-ghaat-sand-50 rounded-full text-xs font-semibold shadow-warm-lg hover:bg-ghaat-terracotta transition-colors duration-200"
          aria-label="Request Quick Estimate"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Quick Estimate</span>
        </button>
      </aside>

      {/* Quick Estimate Modal */}
      <Modal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        title="Project Consultation Inquiry"
        subtitle="Share your signage or retail branding requirements with our Kharghar fabrication team."
      >
        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h4 className="font-serif text-xl text-ghaat-charcoal">Inquiry Received</h4>
            <p className="text-sm text-ghaat-stone max-w-sm mx-auto">
              Thank you! Our Kharghar studio team will review your specifications and contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleModalSubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                Your Name / Business Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rohini Deshmukh / Cafe Promenade"
                className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXX XXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                  Project Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kharghar, Vashi, Panvel"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                Service Category
              </label>
              <select
                className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta"
              >
                <option>Architectural & 3D Signage</option>
                <option>Retail Storefront & Facade</option>
                <option>Custom Metal & Acrylic Fabrication</option>
                <option>Wayfinding & Directory Systems</option>
                <option>Other Physical Branding</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ghaat-charcoal uppercase tracking-wider mb-1.5">
                Brief Description / Dimensions
              </label>
              <textarea
                rows={3}
                placeholder="Describe your site, timeline, or preferred materials (e.g. Brass, Backlit LED, ACP cladding)..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-ghaat-sand-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ghaat-terracotta resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setIsEstimateModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                iconRight={Send}
              >
                Submit Consultation Request
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  )
}
