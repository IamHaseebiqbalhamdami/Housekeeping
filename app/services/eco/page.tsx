"use client"
import { Button } from "@/components/ui/button"
import { Leaf, CheckCircle, Calendar, Phone } from "lucide-react"
import SharedHeader from "@/components/shared-header"

export default function EcoFriendlyServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SharedHeader currentPage="services" />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-700 to-green-600 text-white">
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

      {/* Coming Soon Content */}
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
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
              >
                View Current Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
