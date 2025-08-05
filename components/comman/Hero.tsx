import React from 'react'
import { Button } from '../ui/button'
import { Calendar, Phone } from 'lucide-react'

function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Seasonal Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Professional seasonal cleaning for a fresh start every season.
            Perfect for spring refresh, summer shine, fall prep, and winter
            coziness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Book Seasonal Cleaning
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#012E71]"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>
  )
}

export default Hero
