"use client"

import React, { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Home,
  Users,
  Award,
  Shield,
  Clock,
  Star,
  Heart,
  Target,
  TrendingUp,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Calendar,
} from "lucide-react"

export default function CompanyStory() {
  const [activeStory, setActiveStory] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const storyData = [
    {
      id: 1,
      title: "Our Humble Beginnings",
      year: "1998",
      description: "Started as a small family business in Barrie with just 2 employees and a dream to provide exceptional cleaning services. Our first clients were local families who trusted us with their homes.",
      icon: Home,
      stats: "2",
      metric: "Team Members",
      color: "from-[#012E71] to-[#012E71]",
      achievements: ["First client", "Family business", "Local focus"]
    },
    {
      id: 2,
      title: "Building Trust & Reputation",
      year: "2003-2008",
      description: "Expanded across Simcoe County, serving Orillia and Midland. Introduced specialized deep cleaning and move-in/move-out services. Built a reputation for reliability and quality.",
      icon: Users,
      stats: "15",
      metric: "Team Members",
      color: "from-gray-600 to-gray-700",
      achievements: ["County expansion", "Deep cleaning", "Move services"]
    },
    {
      id: 3,
      title: "Professional Excellence",
      year: "2008-2012",
      description: "Launched commercial cleaning services for offices and retail spaces. Added specialized equipment for large-scale projects. Became pioneers in green cleaning practices.",
      icon: Award,
      stats: "25",
      metric: "Team Members",
      color: "from-[#012E71] to-gray-800",
      achievements: ["Commercial services", "Green cleaning", "Specialized equipment"]
    },
    {
      id: 4,
      title: "Innovation & Growth",
      year: "2012-2018",
      description: "Implemented advanced scheduling systems and customer management technology. Launched online booking platform and real-time service tracking. Expanded to 35 team members.",
      icon: TrendingUp,
      stats: "35",
      metric: "Team Members",
      color: "from-gray-700 to-[#012E71]",
      achievements: ["Online booking", "Real-time tracking", "Technology integration"]
    },
    {
      id: 5,
      title: "Industry Leadership",
      year: "2018-2024",
      description: "Celebrating 26 years of excellence with over 1,200 satisfied clients. Leading the industry in sustainable cleaning practices and customer satisfaction. Now serving 20+ areas.",
      icon: Star,
      stats: "60+",
      metric: "Team Members",
      color: "from-[#012E71] to-gray-900",
      achievements: ["1200+ clients", "20+ service areas", "Industry leader"]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % storyData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [storyData.length])

  const handleStoryClick = (index: number) => {
    setIsAnimating(true)
    setActiveStory(index)
    setTimeout(() => setIsAnimating(false), 500)
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
            The Housekeeping PRO Story
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            26 years of dedication, innovation, and unwavering commitment to excellence in professional cleaning services
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Layout - Left Story, Right Visual */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Story Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {storyData.map((story, index) => (
                  <div
                    key={story.id}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                      activeStory === index
                        ? 'border-white bg-white/20 scale-105 shadow-2xl'
                        : 'border-gray-400 bg-gray-800/50 hover:border-gray-300'
                    }`}
                    onClick={() => handleStoryClick(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeStory === index ? 'from-white to-gray-300' : 'from-[#012E71] to-gray-700'} flex items-center justify-center transition-all duration-300`}>
                        {React.createElement(story.icon, { 
                          className: `w-6 h-6 ${activeStory === index ? 'text-[#012E71]' : 'text-white'}` 
                        })}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold">{story.title}</h3>
                          <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{story.year}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{story.description}</p>
                      </div>
                    </div>
                    
                    {activeStory === index && (
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white">{story.stats}</div>
                            <div className="text-sm text-gray-300">{story.metric}</div>
                          </div>
                          <Button className="bg-white text-[#012E71] hover:bg-gray-100">
                            <Heart className="w-4 h-4 mr-2" />
                            Our Journey
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {story.achievements.map((achievement, idx) => (
                            <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Visual Timeline */}
            <div className="relative flex justify-center items-center">
              <div className="relative">
                {/* Main Central Display - White Box */}
                <div className="relative z-20">
                  <div className="w-64 h-64 rounded-3xl overflow-hidden border-4 border-white/30 bg-white shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 flex flex-col items-center justify-center p-6">
                      {React.createElement(storyData[activeStory].icon, { 
                        className: "w-16 h-16 text-[#012E71] opacity-90 mb-4" 
                      })}
                      <h3 className="text-xl font-bold text-[#012E71] text-center mb-2">{storyData[activeStory].title}</h3>
                      <p className="text-sm text-gray-600 text-center">{storyData[activeStory].year}</p>
                    </div>
                  </div>
                </div>

                {/* Circular Timeline Points */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {storyData.map((story, index) => {
                    const angle = (index * 72) - (activeStory * 72)
                    const radius = 180
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius
                    
                    return (
                      <div
                        key={story.id}
                        className={`absolute transition-all duration-700 ease-in-out ${
                          isAnimating ? 'animate-pulse' : ''
                        }`}
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                          zIndex: index === activeStory ? 30 : 10
                        }}
                      >
                        <div 
                          className={`w-28 h-28 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-500 hover:scale-110 ${
                            index === activeStory 
                              ? 'border-white shadow-2xl scale-110 bg-white' 
                              : 'border-gray-400 bg-gray-800/50 hover:border-gray-300'
                          }`}
                          onClick={() => handleStoryClick(index)}
                        >
                          <div className={`w-full h-full ${index === activeStory ? 'bg-white' : `bg-gradient-to-br ${story.color}`} flex flex-col items-center justify-center p-3`}>
                            {React.createElement(story.icon, { 
                              className: `w-8 h-8 ${index === activeStory ? 'text-[#012E71]' : 'text-white'} ${index === activeStory ? 'opacity-100' : 'opacity-60'}` 
                            })}
                            <span className={`text-xs font-bold mt-1 ${index === activeStory ? 'text-[#012E71]' : 'text-white'}`}>{story.year}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Connecting Timeline Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {storyData.map((_, index) => {
                    const angle = (index * 72) - (activeStory * 72)
                    const radius = 180
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

          {/* Company Stats Banner */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-lg">
              <Calendar className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">26</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-lg">
              <Users className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">60+</div>
              <p className="text-gray-300">Team Members</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-lg">
              <Heart className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">1200+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-lg">
              <MapPin className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">20+</div>
              <p className="text-gray-300">Service Areas</p>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-3">
              {storyData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStoryClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStory === index ? 'bg-white scale-150' : 'bg-gray-400 hover:bg-gray-300'
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