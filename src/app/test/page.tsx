'use client'

import React from 'react'

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Tailwind CSS Test Sahifasi
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primary Colors */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Primary Colors</h2>
            <div className="space-y-2">
              <div className="h-8 bg-primary-500 rounded"></div>
              <div className="h-8 bg-primary-600 rounded"></div>
              <div className="h-8 bg-primary-700 rounded"></div>
            </div>
          </div>
          
          {/* Secondary Colors */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Secondary Colors</h2>
            <div className="space-y-2">
              <div className="h-8 bg-secondary-500 rounded"></div>
              <div className="h-8 bg-secondary-600 rounded"></div>
              <div className="h-8 bg-secondary-700 rounded"></div>
            </div>
          </div>
          
          {/* Accent Colors */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Accent Colors</h2>
            <div className="space-y-2">
              <div className="h-8 bg-accent-500 rounded"></div>
              <div className="h-8 bg-accent-600 rounded"></div>
              <div className="h-8 bg-accent-700 rounded"></div>
            </div>
          </div>
          
          {/* Success Colors */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Success Colors</h2>
            <div className="space-y-2">
              <div className="h-8 bg-success-500 rounded"></div>
              <div className="h-8 bg-success-600 rounded"></div>
              <div className="h-8 bg-success-700 rounded"></div>
            </div>
          </div>
          
          {/* Warning Colors */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Warning Colors</h2>
            <div className="space-y-2">
              <div className="h-8 bg-warning-500 rounded"></div>
              <div className="h-8 bg-warning-600 rounded"></div>
              <div className="h-8 bg-warning-700 rounded"></div>
            </div>
          </div>
          
          {/* Error Colors */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Error Colors</h2>
            <div className="space-y-2">
              <div className="h-8 bg-error-500 rounded"></div>
              <div className="h-8 bg-error-600 rounded"></div>
              <div className="h-8 bg-error-700 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors">
              Primary Button
            </button>
            <button className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-2 rounded-lg transition-colors">
              Secondary Button
            </button>
            <button className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-2 rounded-lg transition-colors">
              Accent Button
            </button>
            <button className="bg-success-600 hover:bg-success-700 text-white px-6 py-2 rounded-lg transition-colors">
              Success Button
            </button>
          </div>
        </div>
        
        {/* Typography */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Typography</h2>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Heading 1</h1>
            <h2 className="text-3xl font-bold text-gray-900">Heading 2</h2>
            <h3 className="text-2xl font-semibold text-gray-900">Heading 3</h3>
            <p className="text-lg text-gray-700">Bu oddiy matn. Tailwind CSS ishlayotganini ko'rsatadi.</p>
            <p className="text-base text-gray-600">Kichikroq matn ham to'g'ri ko'rsatiladi.</p>
          </div>
        </div>
        
        {/* Animations */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Animations</h2>
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-primary-500 rounded-lg animate-bounce-gentle"></div>
            <div className="w-16 h-16 bg-accent-500 rounded-lg animate-pulse"></div>
            <div className="w-16 h-16 bg-success-500 rounded-lg animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
