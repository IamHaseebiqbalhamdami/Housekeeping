"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Home, Building2, Sparkles, CheckCircle, Phone, Calendar, Star, Leaf, X } from "lucide-react"
import InteractiveCleaningCalculator from "@/components/interactivecal"

export default function PricingPage() {
  const [showComingSoon, setShowComingSoon] = useState(false)

  const pricingPlans = [
    {
      name: "One-Time Cleaning",
      icon: Sparkles,
      price: "$149",
      unit: "starting price",
      description: "Perfect for deep cleaning, move-ins, or special occasions",
      features: [
        "Complete deep cleaning",
        "All rooms and bathrooms",
        "Kitchen appliances",
        "Baseboards and windowsills",
        "Eco-friendly products available",
        "Satisfaction guarantee",
      ],
      popular: false,
      available: true,
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
      available: true,
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
      available: true,
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
      available: true,
    },
    {
      name: "Seasonal Cleaning",
      icon: Leaf,
      price: "TBD",
      unit: "coming soon",
      description: "Specialized seasonal deep cleaning for spring and fall",
      features: [
        "Deep seasonal cleaning",
        "Window washing inside & out",
        "Gutter cleaning service",
        "Outdoor furniture cleaning",
        "Garage and basement deep clean",
        "Holiday preparation cleaning",
      ],
      popular: false,
      available: false,
    },
  ]

  const commercialPricing = [
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

  const additionalServices = [
    { service: "Oven Cleaning", price: "$35" },
    { service: "Refrigerator Cleaning", price: "$25" },
    { service: "Window Cleaning (Interior)", price: "$3 per window" },
    { service: "Carpet Cleaning", price: "$25 per room" },
    { service: "Garage Cleaning", price: "$45" },
    { service: "Basement Cleaning", price: "$55" },
  ]

  const handlePlanSelect = (plan: any) => {
    if (!plan.available) {
      setShowComingSoon(true)
    } else {
      // Navigate to contact or handle plan selection
      window.location.href = "/contact"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <SharedHeader currentPage="pricing" /> */}

      {showComingSoon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 relative">
            <button
              onClick={() => setShowComingSoon(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <Leaf className="w-16 h-16 text-[#012E71] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#012E71] mb-4">Coming Soon!</h3>
              <p className="text-gray-600 mb-6">
                Our Seasonal Cleaning service is currently being developed. We'll be launching this comprehensive
                seasonal cleaning package soon!
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Want to be notified when it's available? Contact us and we'll add you to our waiting list.
              </p>
              <Link href="/contact">
                <Button className="bg-[#012E71] hover:bg-blue-800 text-white">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      )}

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-[#012E71] scale-105" : ""
                } ${!plan.available ? "opacity-75" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#012E71] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                {!plan.available && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Coming Soon
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
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => handlePlanSelect(plan)}
                    className={`w-full ${
                      plan.popular
                        ? "bg-[#012E71] hover:bg-blue-800 text-white"
                        : "border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
                    } ${!plan.available ? "opacity-75" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.available ? "Choose Plan" : "Coming Soon"}
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
            {commercialPricing.map((plan, index) => (
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
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className="w-full border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
                      variant="outline"
                    >
                      Get Quote
                    </Button>
                  </Link>
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
              {additionalServices.map((item, index) => (
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
                  Call (+1) 6475348050
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
