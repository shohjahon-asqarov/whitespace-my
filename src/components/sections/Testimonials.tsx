'use client'

import React from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Carlos Hernandez',
      role: 'Project Manager',
      company: 'Microsoft',
      content: 'Whitepace is designed as a collaboration tool for businesses that is a full project management solution.',
      rating: 5,
      avatar: 'CH'
    },
    {
      name: 'Sarah Johnson',
      role: 'Designer',
      company: 'Google',
      content: 'Whitepace is designed as a collaboration tool for businesses that is a full project management solution.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Developer',
      company: 'Apple',
      content: 'Whitepace is designed as a collaboration tool for businesses that is a full project management solution.',
      rating: 5,
      avatar: 'MC'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See what our trusted users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
          </p>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">{testimonial.avatar}</span>
                  </div>
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
