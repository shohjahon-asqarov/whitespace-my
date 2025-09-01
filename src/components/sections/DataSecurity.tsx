'use client'

import React from 'react'
import { ArrowRight, Shield, Key, Lock } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

const DataSecurity: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                100% your data
              </h2>
              <p className="text-xl text-gray-600">
                The app is an open source project, which means you can be sure that your data stays or is not sent to our servers.
              </p>
            </div>

            <Button size="lg" className="group">
              Learn More
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Security Diagram */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
              <div className="relative w-64 h-64 mx-auto">
                {/* Center whitepace logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                
                {/* Security icons */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Key className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                
                {/* Dashed lines connecting to center */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  <line x1="48" y1="48" x2="128" y2="128" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="208" y1="48" x2="128" y2="128" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="48" y1="208" x2="128" y2="128" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="208" y1="208" x2="128" y2="128" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default DataSecurity
