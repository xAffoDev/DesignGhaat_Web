import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { HomePage } from '../pages/HomePage'
import { ServicesPage } from '../pages/ServicesPage'
import { ServiceDetailPage } from '../pages/ServiceDetailPage'
import { PortfolioPage } from '../pages/PortfolioPage'
import { PortfolioDetailPage } from '../pages/PortfolioDetailPage'
import { MaterialsPage } from '../pages/MaterialsPage'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="work" element={<PortfolioPage />} />
        <Route path="work/:id" element={<PortfolioDetailPage />} />
        <Route path="materials" element={<MaterialsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
