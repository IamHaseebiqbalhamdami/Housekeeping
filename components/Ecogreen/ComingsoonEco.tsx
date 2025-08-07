import { CheckCircle, Leaf, Phone } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

function ComingsoonEco() {
  return (
    <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Leaf className="w-24 h-24 text-green-600 mx-auto mb-8" />
        <h2 className="text-4xl font-bold text-green-700 mb-6">Eco-Friendly Cleaning Services</h2>
        <p className="text-xl text-gray-700 mb-8">
          We're currently developing comprehensive eco-friendly cleaning services using only green, non-toxic
          products across Simcoe County.
        </p>
        <div className="bg-green-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">Coming Soon:</h3>
          <ul className="text-left max-w-2xl mx-auto space-y-3">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              100% non-toxic cleaning products
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              Biodegradable and eco-safe solutions
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              Safe for children and pets
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              Environmentally responsible practices
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              Green certification compliance
            </li>
          </ul>
        </div>
        <p className="text-gray-600 mb-8">
          In the meantime, please contact us about our current eco-friendly options available with our residential
          and commercial services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
            >
              View Current Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ComingsoonEco
