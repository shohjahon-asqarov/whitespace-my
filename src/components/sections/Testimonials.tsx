'use client'

import React, { useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  const testimonials = [
    {
      name: 'Jessie Owner',
      role: 'Founder',
      company: 'XYZ Company',
      content: 'If you haven\'t tried whitepace yet, you need to give it a shot for your next event. It\'s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.',
      rating: 5,
      avatar: 'JO'
    },
    {
      name: 'Sarah Johnson',
      role: 'Designer',
      company: 'Creative Studio',
      content: 'Whitepace has completely transformed how our team collaborates. The interface is beautiful and the features are exactly what we needed for our design projects.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Developer',
      company: 'Tech Solutions',
      content: 'As a developer, I appreciate how well whitepace integrates with our workflow. The API is robust and the performance is outstanding.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager',
      company: 'Innovation Labs',
      content: 'The project management features in whitepace are game-changing. Our team productivity has increased by 40% since we started using it.',
      rating: 5,
      avatar: 'ED'
    },
    {
      name: 'David Wilson',
      role: 'CEO',
      company: 'Startup Inc',
      content: 'Whitepace is the perfect solution for our growing company. It scales with us and provides all the tools we need to stay organized.',
      rating: 5,
      avatar: 'DW'
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

        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                  
                  <p className="text-gray-700 mb-6 italic text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="group bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>
            
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="group bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>

          {/* Custom Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideTo(index)}
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 swiper-pagination-bullet"
              />
            ))}
          </div>
        </div>
      </Container>

      <style jsx global>{`
        .testimonials-swiper .swiper-slide {
          height: auto;
        }
        
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #3b82f6;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  )
}

export default Testimonials
