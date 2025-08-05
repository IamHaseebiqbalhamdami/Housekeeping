"use client"

import React, { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  ArrowRight,
  Play,
  Star,
  Award,
  Shield,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react"

export default function InnovativeShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isRotating, setIsRotating] = useState(false)

  const showcaseData = [
    {
      id: 1,
      title: "Advanced Technology",
      description: "State-of-the-art HEPA filtration systems and eco-friendly solutions that deliver exceptional results",
      icon: Sparkles,
      stats: "99.9%",
      metric: "Satisfaction Rate",
      color: "from-[#012E71] to-blue-800"
    },
    {
      id: 2,
      title: "Professional Excellence",
      description: "Trained specialists with 26+ years of experience in residential and commercial cleaning",
      icon: Award,
      stats: "26+",
      metric: "Years Experience",
      color: "from-gray-700 to-[#012E71]"
    },
    {
      id: 3,
      title: "Innovative Solutions",
      description: "Custom cleaning protocols designed for your specific needs and requirements",
      icon: Target,
      stats: "1200+",
      metric: "Happy Clients",
      color: "from-[#012E71] to-gray-800"
    },
    {
      id: 4,
      title: "Sustainable Future",
      description: "100% green cleaning practices that protect your family and the environment",
      icon: TrendingUp,
      stats: "100%",
      metric: "Eco-Friendly",
      color: "from-black to-[#012E71]"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseData.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [showcaseData.length])

  const handleCardClick = (index: number) => {
    setIsRotating(true)
    setActiveIndex(index)
    setTimeout(() => setIsRotating(false), 500)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#012E71] via-[#012E71] to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#012E71]/20 to-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Innovation Meets Excellence
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Cutting-edge cleaning solutions that transform spaces and exceed expectations
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Layout - Left Content, Right Circular */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {showcaseData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                      activeIndex === index
                        ? 'border-white bg-white/20 scale-105 shadow-2xl'
                        : 'border-gray-400 bg-gray-800/50 hover:border-gray-300'
                    }`}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeIndex === index ? 'from-white to-gray-300' : 'from-[#012E71] to-gray-700'} flex items-center justify-center transition-all duration-300`}>
                        {React.createElement(item.icon, { 
                          className: `w-6 h-6 ${activeIndex === index ? 'text-[#012E71]' : 'text-white'}` 
                        })}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    {activeIndex === index && (
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">{item.stats}</div>
                          <div className="text-sm text-gray-300">{item.metric}</div>
                        </div>
                        <Button className="bg-white text-[#012E71] hover:bg-gray-100">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Circular Orbiting Layout */}
            <div className="relative flex justify-center items-center">
              <div className="relative">
                {/* Main Central Image - White Box */}
                <div className="relative z-20">
                  <div className="w-64 h-64 rounded-3xl overflow-hidden border-4 border-white/30 bg-white shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 flex items-start justify-center">
                      {React.createElement(showcaseData[activeIndex].icon, { 
                        className: "w-20 h-20 text-[#012E71] opacity-90" 
                      })}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-[#012E71]">{showcaseData[activeIndex].title}</h3>
                    <p className="text-sm text-gray-600">{showcaseData[activeIndex].description}</p>
                  </div>
                </div>

                {/* Circular Orbiting Images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {showcaseData.map((item, index) => {
                    const angle = (index * 90) - (activeIndex * 90)
                    const radius = 200
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius
                    
                    return (
                      <div
                        key={item.id}
                        className={`absolute transition-all duration-700 ease-in-out ${
                          isRotating ? 'animate-pulse' : ''
                        }`}
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                          zIndex: index === activeIndex ? 30 : 10
                        }}
                      >
                        <div 
                          className={`w-32 h-32 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-500 hover:scale-110 ${
                            index === activeIndex 
                              ? 'border-white shadow-2xl scale-90 bg-white' 
                              : 'border-gray-400 bg-gray-800/50 hover:border-gray-300'
                          }`}
                          onClick={() => handleCardClick(index)}
                        >
                          <div className={`w-full h-full ${index === activeIndex ? 'bg-white' : `bg-gradient-to-br ${item.color}`} flex items-center justify-center`}>
                            {React.createElement(item.icon, { 
                              className: `w-12 h-12 ${index === activeIndex ? 'text-[#012E71]' : 'text-white'} ${index === activeIndex ? 'opacity-100' : 'opacity-60'}` 
                            })}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                          <div className="absolute bottom-3 left-3 right-3">
                            <h4 className={`text-sm font-bold ${index === activeIndex ? 'text-[#012E71]' : 'text-white'}`}>{item.title}</h4>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {showcaseData.map((_, index) => {
                    const angle = (index * 90) - (activeIndex * 90)
                    const radius = 200
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius
                    
                    return (
                      <line
                        key={index}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + (x / 4)}%`}
                        y2={`${50 + (y / 4)}%`}
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2"
                        className="transition-all duration-700"
                      />
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-3">
              {showcaseData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-white scale-150' : 'bg-gray-400 hover:bg-gray-300'
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