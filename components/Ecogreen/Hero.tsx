import { Calendar, Phone } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Eco-Friendly Cleaning Services</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Green cleaning services using 100% non-toxic, biodegradable products safe for your family, pets, and the
          environment across Simcoe County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
            <Calendar className="w-5 h-5 mr-2" />
            Book Green Cleaning
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
          >
            <Phone className="w-5 h-5 mr-2" />
            Get Eco Quote
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
