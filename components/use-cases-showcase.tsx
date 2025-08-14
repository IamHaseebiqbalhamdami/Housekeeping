"use client"
import Link from "next/link"
import React, { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Users, Clock, CheckCircle, Star, Award, Shield, Leaf, Zap, Target, TrendingUp, ArrowRight, Play, Calendar, MapPin, Phone } from 'lucide-react'

export default function UseCasesShowcase() {
  const [activeUseCase, setActiveUseCase] = useState(0)
  const [isRotating, setIsRotating] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const useCases = [
    {
      id: 1,
      title: "Residential Deep Cleaning",
      description: "Comprehensive home cleaning for move-in/move-out, spring cleaning, or special occasions.",
      icon: Home,
      duration: "4-6 hours",
      team: "2-3 specialists",
      price: "$200-400",
      features: ["Deep carpet cleaning", "Kitchen sanitization", "Bathroom disinfection", "Window cleaning"],
      color: "from-[#012E71] to-blue-800",
      stats: { satisfaction: "98%", clients: "500+", rating: "4.9" },
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Commercial Office Cleaning",
      description: "Professional cleaning services for offices, retail spaces, and business facilities.",
      icon: Building2,
      duration: "2-4 hours",
      team: "3-5 specialists",
      price: "$300-600",
      features: ["Floor maintenance", "Desk sanitization", "Restroom cleaning", "Common area upkeep"],
      color: "from-gray-700 to-[#012E71]",
      stats: { satisfaction: "97%", clients: "200+", rating: "4.8" },
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Airbnb Turnover Service",
      description: "Quick, thorough cleaning between guest stays to maintain 5-star ratings.",
      icon: Users,
      duration: "1-2 hours",
      team: "1-2 specialists",
      price: "$80-150",
      features: ["Linen replacement", "Bathroom refresh", "Kitchen cleanup", "Quick inspection"],
      color: "from-[#012E71] to-gray-800",
      stats: { satisfaction: "99%", clients: "300+", rating: "5.0" },
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Eco-Friendly Cleaning",
      description: "Green cleaning solutions using 100% non-toxic, biodegradable products.",
      icon: Leaf,
      duration: "3-5 hours",
      team: "2-3 specialists",
      price: "$250-450",
      features: ["Natural products", "Pet-safe cleaning", "Allergy-friendly", "Sustainable practices"],
      color: "from-black to-[#012E71]",
      stats: { satisfaction: "96%", clients: "150+", rating: "4.7" },
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Post-Construction Cleanup",
      description: "Comprehensive cleaning after renovations, construction, or remodeling projects.",
      icon: Zap,
      duration: "6-8 hours",
      team: "4-6 specialists",
      price: "$500-800",
      features: ["Dust removal", "Surface protection", "Final inspection", "Waste disposal"],
      color: "from-[#012E71] to-gray-900",
      stats: { satisfaction: "95%", clients: "100+", rating: "4.6" },
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Regular Maintenance",
      description: "Scheduled cleaning services to maintain clean and healthy environments.",
      icon: Clock,
      duration: "2-3 hours",
      team: "1-2 specialists",
      price: "$120-200",
      features: ["Weekly service", "Monthly deep clean", "Quarterly inspection", "Annual refresh"],
      color: "from-gray-700 to-black",
      stats: { satisfaction: "99%", clients: "800+", rating: "4.9" },
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUseCase((prev) => (prev + 1) % useCases.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [useCases.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const handleUseCaseClick = (index: number) => {
    setIsRotating(true)
    setActiveUseCase(index)
    setTimeout(() => setIsRotating(false), 500)
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-[#012E71] to-black text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-[#012E71]/30 to-gray-900/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-30 h-30 sm:w-60 sm:h-60 bg-[#012E71]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-gray-200 to-[#012E71] bg-clip-text text-transparent leading-tight">
            Our Cleaning Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto px-4">
            Specialized cleaning services tailored to your specific needs and requirements
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Layout - Left Use Cases, Right Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Use Cases List */}
            <div ref={cardsRef} className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.id}
                  className={`relative p-4 sm:p-6 rounded-2xl border-2 transition-all duration-700 cursor-pointer hover:shadow-2xl ${
                    activeUseCase === index
                      ? 'border-white bg-gradient-to-r from-white/20 to-gray-200/20 scale-[1.02] sm:scale-105 shadow-2xl'
                      : 'border-gray-500 bg-gradient-to-r from-gray-800/50 to-black/50 hover:border-gray-300 hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-gray-800/50'
                  }`}
                  onClick={() => handleUseCaseClick(index)}
                  onMouseEnter={() => setHoveredCard(useCase.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${activeUseCase === index ? 'from-white to-gray-300' : 'from-[#012E71] to-gray-700'} flex items-center justify-center transition-all duration-300 flex-shrink-0`}>
                      {React.createElement(useCase.icon, {
                        className: `w-5 h-5 sm:w-6 sm:h-6 ${activeUseCase === index ? 'text-[#012E71]' : 'text-white'}`
                      })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{useCase.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-2 sm:mb-3">{useCase.description}</p>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{useCase.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{useCase.team}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{useCase.price}</span>
                        </div>
                      </div>

                      {activeUseCase === index && (
                        <div className="space-y-3 animate-in slide-in-from-top-2 duration-500 pt-2">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {useCase.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <Link href="/booking">
                          <Button className="bg-gradient-to-r from-[#012E71] to-blue-800 text-white hover:from-blue-800 hover:to-[#012E71] w-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                            <Calendar className="w-4 h-4 mr-2" />
                            Book This Service
                          </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Enhanced Visual Display */}
            <div className="relative order-1 lg:order-2">
              <Card className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg border-gray-600 p-6 sm:p-8 shadow-2xl">
                <div className="text-center space-y-4 sm:space-y-6">
                  {/* Service Image */}
                  <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden mb-4 sm:mb-6">
                    <div
                      className="w-full h-full bg-cover bg-center transition-all duration-700"
                      style={{ backgroundImage: `url(${useCases[activeUseCase].image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#012E71] to-blue-800 flex items-center justify-center">
                        {React.createElement(useCases[activeUseCase].icon, {
                          className: "w-5 h-5 sm:w-6 sm:h-6 text-white"
                        })}
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-white">{useCases[activeUseCase].stats.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{useCases[activeUseCase].title}</h3>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                      {useCases[activeUseCase].description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10">
                        <div className="text-xl sm:text-2xl font-bold text-white">{useCases[activeUseCase].stats.satisfaction}</div>
                        <div className="text-xs sm:text-sm text-gray-300">Satisfaction</div>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10">
                        <div className="text-xl sm:text-2xl font-bold text-white">{useCases[activeUseCase].stats.clients}</div>
                        <div className="text-xs sm:text-sm text-gray-300">Happy Clients</div>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10">
                        <div className="text-xl sm:text-2xl font-bold text-white">{useCases[activeUseCase].stats.rating}</div>
                        <div className="text-xs sm:text-sm text-gray-300">Rating</div>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Duration:</span>
                        <span className="text-white font-semibold">{useCases[activeUseCase].duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Team Size:</span>
                        <span className="text-white font-semibold">{useCases[activeUseCase].team}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Starting Price:</span>
                        <span className="text-white font-semibold">{useCases[activeUseCase].price}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <Link href="/contact">
                      <Button className="flex-1 bg-gradient-to-r from-[#012E71] to-blue-800 text-white hover:from-blue-800 hover:to-[#012E71] transition-all duration-300 hover:scale-105 text-sm sm:text-base py-2 sm:py-3">
                        <Play className="w-4 h-4 mr-2" />
                        Get Free Quote
                      </Button>
                      
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 p-2 sm:p-3">
                        <Phone className="w-4 h-4" />
                      </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Enhanced Progress Indicators */}
          <div className="mt-8 sm:mt-12 flex justify-center">
            <div className="flex space-x-2 sm:space-x-3">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleUseCaseClick(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-150 ${
                    activeUseCase === index ? 'bg-white scale-150 shadow-lg' : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
