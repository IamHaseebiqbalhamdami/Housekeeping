import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Calendar, Phone } from 'lucide-react'

function Deephero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Deep Cleaning Services</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive deep cleaning services for homes and businesses across Simcoe County. Perfect for spring
              cleaning, move-ins, and special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Deep Cleaning
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#012E71] bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Deep Clean Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Deephero
