'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Button from '../components/ui/button'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat sm:bg-[url('/images/bg-sm.svg')]"
        ></div>
      </div>
      <div className="relative z-10 flex flex-col items-center space-y-12">
        <div className="w-64 h-64 bg-yellow-400 rounded-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">MOVLE</h1>
            <p className="text-xl text-gray-900">APP</p>
          </div>
        </div>

        <Button 
          label="Jogar" 
          onClick={() => router.push('/categories')}
          className="text-2xl px-12 py-6 bg-primary hover:bg-primary/90"
        />
      </div>

      <div className="absolute bottom-4 right-4 text-white text-sm">
        <span className="sm:hidden">Small</span>
        <span className="hidden sm:inline md:hidden">Medium</span>
        <span className="hidden md:inline lg:hidden">Large</span>
        <span className="hidden lg:inline xl:hidden">Extra Large</span>
        <span className="hidden xl:inline">2XL</span>
      </div>
    </div>
  )
}