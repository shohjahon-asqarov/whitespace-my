'use client'

import React from 'react'
import Container from '@/components/ui/Container'

const Sponsors: React.FC = () => {
  const sponsors = [
    { name: 'Apple', logo: '🍎' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'Slack', logo: '💬' },
    { name: 'Google', logo: '🔍' }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Our sponsors
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-4xl">{sponsor.logo}</div>
                <span className="text-lg font-semibold text-gray-700">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Sponsors
