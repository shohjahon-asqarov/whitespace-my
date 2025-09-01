'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

const CTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-blue-600">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Try Whitepace today
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get started for free. Add your whole team as your needs grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group bg-white text-blue-600 hover:bg-gray-100"
            >
              Try Taskey free
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-white text-white hover:bg-white hover:text-blue-600"
            >
              Watch demo
            </Button>
          </div>
          
          <p className="text-blue-100 text-sm mt-6">
            On a big team? Contact sales
          </p>
        </div>
      </Container>
    </section>
  )
}

export default CTA
