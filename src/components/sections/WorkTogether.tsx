'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

const WorkTogether: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Collaboration Diagram */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
              <div className="relative w-64 h-64 mx-auto">
                {/* Center whitepace logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                
                {/* Connected circles */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-500 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full"></div>
                
                {/* Dashed lines connecting to center */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  <line x1="32" y1="32" x2="128" y2="128" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="224" y1="32" x2="128" y2="128" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="32" y1="224" x2="128" y2="128" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="224" y1="224" x2="128" y2="128" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Work together
              </h2>
              <p className="text-xl text-gray-600">
                With whitepace, share your notes with your colleagues and collaborate on them.
              </p>
              <p className="text-lg text-gray-600">
                You can publish and share your notes with your colleagues and collaborate on them. You can also publish and share your notes with your colleagues and collaborate on them.
              </p>
            </div>

            <Button size="lg" className="group">
              Let&apos;s Go
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WorkTogether
