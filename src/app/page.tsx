import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ProjectManagement from '@/components/sections/ProjectManagement'
import WorkTogether from '@/components/sections/WorkTogether'
import UseAsExtension from '@/components/sections/UseAsExtension'
import Customize from '@/components/sections/Customize'
import Pricing from '@/components/sections/Pricing'
import YourWorkEverywhere from '@/components/sections/YourWorkEverywhere'
import DataSecurity from '@/components/sections/DataSecurity'
import Sponsors from '@/components/sections/Sponsors'
import WorkWithApps from '@/components/sections/WorkWithApps'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProjectManagement />
        <WorkTogether />
        <UseAsExtension />  
        <Customize />
        <Pricing />
        <YourWorkEverywhere />
        <DataSecurity />
        <Sponsors />
        <WorkWithApps />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
