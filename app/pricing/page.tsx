"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Home, Building2, Sparkles, CheckCircle, Phone, Calendar, Star, X, Car, TreePine, Package, Utensils, Bed, Bath, Sofa, Shirt, Monitor, Book, Flower, Trash2, Droplets, Wind } from "lucide-react"
import SharedHeader from "@/components/shared-header"

// Type definitions
interface Service {
  id: string;
  name: string;
  icon: any;
  basePrice?: number;
  price?: number;
}

// Enhanced Interactive Cleaning Calculator Component
function InteractiveCleaningCalculator() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([])
  const [totalCost, setTotalCost] = useState<number>(0)

  const cleaningServices: Service[] = [
    { id: 'living-room', name: 'Living Room', icon: Sofa, basePrice: 25 },
    { id: 'kitchen', name: 'Kitchen', icon: Utensils, basePrice: 30 },
    { id: 'bedroom', name: 'Bedroom', icon: Bed, basePrice: 20 },
    { id: 'bathroom', name: 'Bathroom', icon: Bath, basePrice: 25 },
    { id: 'dining-room', name: 'Dining Room', icon: Utensils, basePrice: 20 },
    { id: 'office', name: 'Home Office', icon: Monitor, basePrice: 18 },
    { id: 'garage', name: 'Garage', icon: Car, basePrice: 35 },
    { id: 'basement', name: 'Basement', icon: Home, basePrice: 40 },
    { id: 'attic', name: 'Attic', icon: Package, basePrice: 35 },
    { id: 'laundry', name: 'Laundry Room', icon: Shirt, basePrice: 15 },
    { id: 'pantry', name: 'Pantry/Store Room', icon: Package, basePrice: 12 },
    { id: 'garden', name: 'Garden/Patio', icon: TreePine, basePrice: 30 },
    { id: 'balcony', name: 'Balcony', icon: Flower, basePrice: 15 },
    { id: 'hallway', name: 'Hallways', icon: Home, basePrice: 10 },
    { id: 'stairs', name: 'Staircase', icon: Home, basePrice: 20 },
    { id: 'library', name: 'Library/Study', icon: Book, basePrice: 22 }
  ]

  const additionalServices: Service[] = [
    { id: 'deep-clean', name: 'Deep Cleaning', icon: Sparkles, price: 59.99 },
    { id: 'carpet', name: 'Carpet Cleaning', icon: Home, price: 25 },
    { id: 'windows', name: 'Window Cleaning', icon: Droplets, price: 30 },
    { id: 'air-ducts', name: 'Air Duct Cleaning', icon: Wind, price: 45 }
  ]

  const handleServiceToggle = (service: Service) => {
    const isSelected = selectedServices.find((s: Service) => s.id === service.id)
    let newServices: Service[]
    
    if (isSelected) {
      newServices = selectedServices.filter((s: Service) => s.id !== service.id)
    } else {
      newServices = [...selectedServices, service]
    }
    
    setSelectedServices(newServices)
    
    // Calculate total cost
    const total = newServices.reduce((sum: number, service: Service) => {
      return sum + (service.basePrice || service.price || 0)
    }, 0)
    setTotalCost(total)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Advanced Smart Cleaning Calculator</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Select the rooms and services you need to get an instant estimate for your cleaning requirements.
            All listed prices are charged per hour.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Room Selection */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#012E71] mb-8 text-center">Select Rooms to Clean</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cleaningServices.map((service: Service) => (
                <Card 
                  key={service.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedServices.find((s: Service) => s.id === service.id)
                      ? 'bg-[#012E71] text-white shadow-lg scale-105'
                      : 'bg-white hover:bg-blue-50'
                  }`}
                  onClick={() => handleServiceToggle(service)}
                >
                  <CardContent className="p-4 text-center">
                    <service.icon className={`w-8 h-8 mx-auto mb-2 ${
                      selectedServices.find((s: Service) => s.id === service.id) ? 'text-white' : 'text-[#012E71]'
                    }`} />
                    <h4 className="font-semibold text-sm mb-1">{service.name}</h4>
                    <p className="text-xs opacity-80">${service.basePrice}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#012E71] mb-8 text-center">Additional Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalServices.map((service: Service) => (
                <Card 
                  key={service.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedServices.find((s: Service) => s.id === service.id)
                      ? 'bg-[#012E71] text-white shadow-lg scale-105'
                      : 'bg-white hover:bg-blue-50'
                  }`}
                  onClick={() => handleServiceToggle(service)}
                >
                  <CardContent className="p-6 text-center">
                    <service.icon className={`w-10 h-10 mx-auto mb-3 ${
                      selectedServices.find((s: Service) => s.id === service.id) ? 'text-white' : 'text-[#012E71]'
                    }`} />
                    <h4 className="font-semibold text-sm mb-2">{service.name}</h4>
                    <p className="text-sm opacity-80">${service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cost Summary */}
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#012E71] mb-4">Your Cleaning Estimate</h3>
                <div className="text-5xl font-bold text-[#012E71] mb-4">
                  ${totalCost}
                </div>
                <p className="text-gray-600 mb-6">
                  {selectedServices.length} service{selectedServices.length !== 1 ? 's' : ''} selected
                </p>
                
                {selectedServices.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Selected Services:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {selectedServices.map((service: Service) => (
                        <span
                          key={service.id}
                          className="bg-blue-100 text-[#012E71] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {service.name} - ${service.basePrice || service.price}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-[#012E71] hover:bg-blue-800 text-white px-8 py-4"
                    disabled={selectedServices.length === 0}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book This Service
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white px-8 py-4"
                    disabled={selectedServices.length === 0}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get Detailed Quote
                  </Button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  *Final pricing may vary based on property condition and specific requirements
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Main component type definitions
interface PricingPlan {
  name: string;
  icon: any;
  price: string;
  unit: string;
  description: string;
  features: string[];
  popular: boolean;
}

interface CommercialPlan {
  type: string;
  size: string;
  price: string;
  unit: string;
  features: string[];
}

interface AdditionalService {
  service: string;
  price: string;
}

export default function PricingPage() {
  const [showComingSoonPopup, setShowComingSoonPopup] = useState<boolean>(false)

  const pricingPlans: PricingPlan[] = [
    {
      name: "One-Time Cleaning",
      icon: Sparkles,
      price: "$149",
      unit: "starting price",
      description: "Perfect for cleaning, move-ins, or special occasions",
      features: [
        "Complete deep cleaning",
        "All rooms and bathrooms",
        "Kitchen appliances",
        "Baseboards and windowsills",
        "Eco-friendly products available",
        "Satisfaction guarantee",
      ],
      popular: false,
    },
    {
      name: "Weekly Cleaning",
      icon: Home,
      price: "$89",
      unit: "per visit",
      description: "Regular maintenance to keep your home spotless",
      features: [
        "All standard cleaning tasks",
        "Consistent cleaning team",
        "Flexible scheduling",
        "20% discount on additional services",
        "Priority booking",
        "Free cleaning supplies",
      ],
      popular: true,
    },
    {
      name: "Bi-Weekly Cleaning",
      icon: Clock,
      price: "$109",
      unit: "per visit",
      description: "Ideal balance of cleanliness and affordability",
      features: [
        "Thorough bi-weekly cleaning",
        "Rotating deep cleaning tasks",
        "Flexible rescheduling",
        "15% discount on additional services",
        "Quality assurance checks",
        "Eco-friendly options",
      ],
      popular: false,
    },
    {
      name: "Monthly Cleaning",
      icon: Calendar,
      price: "$129",
      unit: "per visit",
      description: "Comprehensive monthly maintenance cleaning",
      features: [
        "Detailed monthly cleaning",
        "Focus on high-traffic areas",
        "Seasonal cleaning tasks",
        "10% discount on additional services",
        "Customizable cleaning plan",
        "Professional equipment",
      ],
      popular: false,
    },
  ]

  const commercialPricing: CommercialPlan[] = [
    {
      type: "Small Office",
      size: "Up to 2,000 sq ft",
      price: "$0.08 - $0.12",
      unit: "per sq ft",
      features: ["Daily/weekly cleaning", "Restroom maintenance", "Trash removal", "Vacuum/mopping"],
    },
    {
      type: "Medium Office",
      size: "2,000 - 5,000 sq ft",
      price: "$0.06 - $0.10",
      unit: "per sq ft",
      features: ["Customized schedule", "Conference room cleaning", "Kitchen maintenance", "Window cleaning"],
    },
    {
      type: "Large Commercial",
      size: "5,000+ sq ft",
      price: "Custom Quote",
      unit: "contact us",
      features: ["Comprehensive cleaning", "Specialized equipment", "Multiple shifts available", "Account management"],
    },
  ]

  const additionalServices: AdditionalService[] = [
    { service: "Oven Cleaning", price: "$35" },
    { service: "Refrigerator Cleaning", price: "$25" },
    { service: "Window Cleaning (Interior)", price: "$3 per window" },
    { service: "Carpet Cleaning", price: "$25 per room" },
    { service: "Garage Cleaning", price: "$45" },
    { service: "Basement Cleaning", price: "$55" },
  ]

  const handleChoosePlan = () => {
    setShowComingSoonPopup(true)
  }

  const ComingSoonPopup = () => {
    if (!showComingSoonPopup) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative">
          <button
            onClick={() => setShowComingSoonPopup(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-[#012E71]" />
            </div>
            <h3 className="text-2xl font-bold text-[#012E71] mb-4">Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              Our online booking system will be available soon. For now, please contact us directly to schedule your cleaning service.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/contact">
                <Button className="w-full bg-[#012E71] hover:bg-blue-800 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us Now
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setShowComingSoonPopup(false)}
                className="w-full border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <SharedHeader currentPage="pricing" /> */}

      {/* Coming Soon Popup */}
      <ComingSoonPopup />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Competitive rates with no hidden fees. Choose from hourly rates or square footage pricing to fit your
              budget and cleaning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Residential Cleaning Packages</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Flexible pricing options designed to fit your schedule and budget. All packages include professional
              cleaning supplies and equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan: PricingPlan, index: number) => (
              <Card
                key={index}
                className={`relative shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-[#012E71] scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#012E71] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <plan.icon className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-[#012E71] mb-1">{plan.price}</div>
                    <div className="text-gray-600 text-sm">{plan.unit}</div>
                  </div>
                  <p className="text-gray-600 text-center mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleChoosePlan}
                    className={`w-full ${
                      plan.popular
                        ? "bg-[#012E71] hover:bg-blue-800 text-white"
                        : "border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Commercial Cleaning Rates</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional commercial cleaning services with competitive square footage pricing for businesses across
              Simcoe County.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {commercialPricing.map((plan: CommercialPlan, index: number) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Building2 className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.type}</h3>
                    <div className="text-gray-600 mb-2">{plan.size}</div>
                    <div className="text-3xl font-bold text-[#012E71] mb-1">{plan.price}</div>
                    <div className="text-gray-600 text-sm">{plan.unit}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleChoosePlan}
                    className="w-full border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
                    variant="outline"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Additional Services</h2>
              <p className="text-xl text-gray-700">
                Enhance your cleaning package with these popular add-on services at competitive rates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((item: AdditionalService, index: number) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{item.service}</h3>
                      <div className="text-xl font-bold text-[#012E71]">{item.price}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#012E71] mb-4">What Affects Pricing?</h2>
              <p className="text-xl text-gray-700">
                Our transparent pricing is based on several factors to ensure you get the best value for your cleaning
                needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#012E71] mb-6">Factors We Consider</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Home className="w-6 h-6 text-[#012E71] mr-3 mt-1" />
                      <div>
                        <strong>Property Size:</strong> Square footage and number of rooms
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-6 h-6 text-[#012E71] mr-3 mt-1" />
                      <div>
                        <strong>Cleaning Frequency:</strong> Weekly, bi-weekly, or monthly service
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="w-6 h-6 text-[#012E71] mr-3 mt-1" />
                      <div>
                        <strong>Service Type:</strong> Regular maintenance vs. deep cleaning
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-6 h-6 text-[#012E71] mr-3 mt-1" />
                      <div>
                        <strong>Special Requests:</strong> Additional services or specific requirements
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#012E71] mb-6">Money-Saving Tips</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                      <div>
                        <strong>Regular Service:</strong> Save up to 20% with weekly contracts
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                      <div>
                        <strong>Flexible Scheduling:</strong> Off-peak times may have lower rates
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                      <div>
                        <strong>Bundle Services:</strong> Combine services for better value
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                      <div>
                        <strong>Referral Discounts:</strong> Get credits for referring friends
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Calculator */}
      <InteractiveCleaningCalculator />

      {/* CTA Section */}
      <section className="py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get your free quote today and experience 26 years of cleaning excellence across Simcoe County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#012E71] px-8 py-4 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (647) 534-8050
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}