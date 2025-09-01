'use client'

import React from 'react'
import { ArrowRight, Mail, Calendar, FileText, Cloud } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

const WorkWithApps: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-blue-600 relative overflow-hidden">
      {/* Abstract white wave patterns */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-16 right-16 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-32 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Apps Integration Diagram */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="relative w-64 h-64 mx-auto">
                {/* Center whitepace logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">W</span>
                </div>
                
                {/* App icons */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-yellow-600" />
                </div>
                
                {/* Dashed lines connecting to center */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  <line x1="48" y1="48" x2="128" y2="128" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="208" y1="48" x2="128" y2="128" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="48" y1="208" x2="128" y2="128" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="208" y1="208" x2="128" y2="128" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Work with Your Favorite Apps Using whitepace
              </h2>
              <p className="text-xl text-blue-100">
                Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
            </div>

            <Button 
              size="lg" 
              className="group bg-white text-blue-600 hover:bg-gray-100"
            >
              Try Free
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WorkWithApps
