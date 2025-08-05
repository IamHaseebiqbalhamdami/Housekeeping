"use client"

import { useState, useEffect, useRef } from "react"
import * as React from "react"
import { Card } from "@/components/ui/card"
import {
  Award,
  Building2,
  Home,
  Leaf,
  MapPin,
  Shield,
  Zap,
} from "lucide-react"

export default function InteractiveCompanyTimeline() {
  const [activeYear, setActiveYear] = useState(2024)
  const timelineRef = useRef<HTMLDivElement>(null)

  const timelineData = [
    {
      year: 1998,
      title: "HouseKeeping PRO Founded",
      description: "Started as a small family business in Barrie with a vision to provide exceptional cleaning services. Our first clients were local families who trusted us with their homes.",
      icon: Home,
      color: "from-[#012E71] to-[#012E71]",
      stats: { clients: "5", employees: "2", areas: "1" }
    },
    {
      year: 2003,
      title: "Expansion Across Simcoe County",
      description: "Extended services to Orillia and Midland, establishing our reputation for reliability. Introduced specialized deep cleaning and move-in/move-out services.",
      icon: MapPin,
      color: "from-gray-600 to-gray-700",
      stats: { clients: "50", employees: "8", areas: "3" }
    },
    {
      year: 2008,
      title: "Commercial Services Launch",
      description: "Introduced professional commercial cleaning services for offices and retail spaces. Added specialized equipment for large-scale cleaning projects.",
      icon: Building2,
      color: "from-[#012E71] to-gray-800",
      stats: { clients: "150", employees: "15", areas: "5" }
    },
    {
      year: 2012,
      title: "Eco-Friendly Initiative",
      description: "Became pioneers in green cleaning, introducing 100% eco-friendly product lines. Launched our 'Green Clean' program for environmentally conscious clients.",
      icon: Leaf,
      color: "from-gray-700 to-[#012E71]",
      stats: { clients: "300", employees: "25", areas: "8" }
    },
    {
      year: 2018,
      title: "Technology Integration",
      description: "Implemented advanced scheduling systems and customer management technology. Launched online booking platform and real-time service tracking.",
      icon: Zap,
      color: "from-[#012E71] to-black",
      stats: { clients: "700", employees: "35", areas: "12" }
    },
    {
      year: 2020,
      title: "Pandemic Response Excellence",
      description: "Adapted services with enhanced safety protocols, supporting essential businesses. Introduced sanitization services and contactless cleaning procedures.",
      icon: Shield,
      color: "from-black to-[#012E71]",
      stats: { clients: "900", employees: "45", areas: "15" }
    },
    {
      year: 2024,
      title: "Industry Leadership",
      description: "Celebrating 26 years of excellence with over 1,200 satisfied clients and innovative services. Leading the industry in sustainable cleaning practices and customer satisfaction.",
      icon: Award,
      color: "from-[#012E71] to-gray-900",
      stats: { clients: "1200+", employees: "60+", areas: "20+" }
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveYear(prev => {
        const currentIndex = timelineData.findIndex(item => item.year === prev)
        const nextIndex = (currentIndex + 1) % timelineData.length
        return timelineData[nextIndex].year
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [timelineData])

  const activeData = timelineData.find(item => item.year === activeYear)

  if (!activeData) return null

  return (
    <section className="py-20 bg-gradient-to-br from-[#012E71] via-[#012E71] to-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#012E71]/20 to-black/20"></div>
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Journey Through Time
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            26 years of growth, innovation, and unwavering commitment to excellence in professional cleaning services
          </p>
        </div>

        <div ref={timelineRef} className="max-w-7xl mx-auto">
          {/* Timeline Navigation */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 min-w-max pb-4">
              {timelineData.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`relative px-6 py-3 rounded-full border-2 transition-all duration-500 whitespace-nowrap ${
                    activeYear === item.year
                      ? 'border-white bg-white/20 scale-110 shadow-lg'
                      : 'border-gray-400 bg-gray-800/50 hover:border-gray-300 hover:scale-105'
                  }`}
                >
                  <span className="font-bold text-lg">{item.year}</span>
                  {activeYear === item.year && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Timeline Item Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <Card className={`bg-gradient-to-br ${activeData.color} p-1 rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-105`}>
                <div className="bg-gray-900/90 backdrop-blur-lg p-8 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${activeData.color} flex items-center justify-center mr-4`}>
                      {React.createElement(activeData.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{activeData.year}</div>
                      <div className="text-xl font-semibold">{activeData.title}</div>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed opacity-90 mb-8">
                    {activeData.description}
                  </p>
                  
                  {/* Stats Display */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white/10 rounded-lg">
                      <div className="text-2xl font-bold text-white">{activeData.stats.clients}</div>
                      <div className="text-sm opacity-75">Clients</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-lg">
                      <div className="text-2xl font-bold text-gray-300">{activeData.stats.employees}</div>
                      <div className="text-sm opacity-75">Team Members</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-lg">
                      <div className="text-2xl font-bold text-gray-300">{activeData.stats.areas}</div>
                      <div className="text-sm opacity-75">Service Areas</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Side - Visual Timeline */}
            <div className="relative">
              <div className="space-y-6">
                {timelineData.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-center transition-all duration-500 ${
                      item.year === activeYear ? 'scale-110 z-10' : 'scale-90 opacity-50'
                    }`}
                  >
                    <div className="absolute left-8 top-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent transform -translate-y-1/2"></div>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl ${
                      item.year === activeYear ? 'ring-4 ring-white/50' : ''
                    }`}>
                      {React.createElement(item.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="text-lg font-bold">{item.year}</div>
                      <div className="text-sm opacity-75">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              {timelineData.map((item) => (
                <div
                  key={item.year}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    item.year === activeYear ? 'bg-white scale-150' : 'bg-gray-400'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}