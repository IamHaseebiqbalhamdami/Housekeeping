"use client"
import { Button } from "@/components/ui/button"
import { Sparkles, CheckCircle, Calendar, Phone } from "lucide-react"
import SharedHeader from "@/components/shared-header"

export default function DeepCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SharedHeader currentPage="services" />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Deep Cleaning Services</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive deep cleaning services for homes and businesses across Simcoe County. Perfect for spring
              cleaning, move-ins, and special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Deep Cleaning
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Deep Clean Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-24 h-24 text-[#012E71] mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-[#012E71] mb-6">Deep Cleaning Services</h2>
            <p className="text-xl text-gray-700 mb-8">
              We're currently developing comprehensive deep cleaning services for homes and businesses across Simcoe
              County.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-[#012E71] mb-4">Coming Soon:</h3>
              <ul className="text-left max-w-2xl mx-auto space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Spring deep cleaning services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Move-in/move-out deep cleaning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Post-construction cleanup
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Appliance deep cleaning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Carpet and upholstery cleaning
                </li>
              </ul>
            </div>
            <p className="text-gray-600 mb-8">
              In the meantime, please contact us for residential or commercial cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#012E71] hover:bg-blue-800 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
              >
                View Residential Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
