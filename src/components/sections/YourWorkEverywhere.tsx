'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

const YourWorkEverywhere: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-blue-600 relative overflow-hidden">
      {/* Abstract white concentric circles pattern */}
      <div className="absolute left-0 top-0 w-96 h-96 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-12 left-12 w-8 h-8 border-2 border-white rounded-full"></div>
      </div>
      
      <Container>
        <div className="text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your work, everywhere you are
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive.
          </p>
          
          <Button 
            size="lg" 
            className="group bg-white text-blue-600 hover:bg-gray-100"
          >
            Try Free
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default YourWorkEverywhere
