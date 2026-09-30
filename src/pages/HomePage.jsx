import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { HeroSection } from '../components/home/HeroSection'
import { ServicePillars } from '../components/home/ServicePillars'
import { CraftSpotlight } from '../components/home/CraftSpotlight'
import { WorkshopBanner } from '../components/home/WorkshopBanner'

export function HomePage() {
  const context = useOutletContext()
  const openEstimateModal = context?.openEstimateModal

  return (
    <div className="relative">
      <HeroSection onOpenEstimate={openEstimateModal} />
      <ServicePillars />
      <CraftSpotlight />
      <WorkshopBanner />
    </div>
  )
}
