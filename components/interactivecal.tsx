"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Calendar,
  CheckCircle,
  DollarSign,
  Home,
  Leaf,
  Minus,
  Phone,
  Plus,
  Sparkles,
} from "lucide-react"

interface Room {
  id: number
  name: string
  size: number
  selected: boolean
  price: number
}

export default function InteractiveCleaningCalculator() {
  const [rooms, setRooms] = useState<Room[]>([
    { id: 1, name: 'Living Room', size: 0, selected: false, price: 0 },
    { id: 2, name: 'Kitchen', size: 0, selected: false, price: 0 },
    { id: 3, name: 'Bedroom', size: 0, selected: false, price: 0 },
    { id: 4, name: 'Bathroom', size: 0, selected: false, price: 0 },
    { id: 5, name: 'Dining Room', size: 0, selected: false, price: 0 },
    { id: 6, name: 'Office', size: 0, selected: false, price: 0 }
  ])
  const [cleaningType, setCleaningType] = useState<'regular' | 'deep' | 'eco' | 'commercial'>('regular')
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'monthly' | 'oneTime'>('weekly')
  const [totalPrice, setTotalPrice] = useState(0)
  const [isCalculating, setIsCalculating] = useState(false)

  const cleaningTypes = {
    regular: { name: 'Regular Cleaning', multiplier: 1, color: 'bg-blue-500' },
    deep: { name: 'Deep Cleaning', multiplier: 1.5, color: 'bg-purple-500' },
    eco: { name: 'Eco-Friendly', multiplier: 1.2, color: 'bg-green-500' },
    commercial: { name: 'Commercial', multiplier: 1.8, color: 'bg-orange-500' }
  } as const
  
  const frequencyRates = {
    weekly: { name: 'Weekly', discount: 0.2 },
    biweekly: { name: 'Bi-Weekly', discount: 0.15 },
    monthly: { name: 'Monthly', discount: 0.1 },
    oneTime: { name: 'One-Time', discount: 0 }
  } as const

  useEffect(() => {
    const calculateTotal = () => {
      setIsCalculating(true)
      setTimeout(() => {
        let total = 0
        const updatedRooms = rooms.map(room => {
          if (room.selected && room.size > 0) {
            const basePrice = room.size * 2.5 // $2.5 per sq ft
            const typeMultiplier = cleaningTypes[cleaningType].multiplier
            const frequencyDiscount = frequencyRates[frequency].discount
            const roomPrice = basePrice * typeMultiplier * (1 - frequencyDiscount)
            total += roomPrice
            return { ...room, price: roomPrice }
          }
          return { ...room, price: 0 }
        })
        setRooms(updatedRooms)
        setTotalPrice(total)
        setIsCalculating(false)
      }, 500)
    }
    calculateTotal()
  }, [cleaningType, frequency])

  const updateRoomSize = (id: number, size: number) => {
    setRooms(prev => prev.map(room => 
      room.id === id ? { ...room, size: Math.max(0, size) } : room
    ))
  }

  const toggleRoomSelection = (id: number) => {
    setRooms(prev => prev.map(room => 
      room.id === id ? { ...room, selected: !room.selected } : room
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#012E71] via-[#012E71] to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#012E71]/20 to-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Smart Cleaning Calculator
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Get an instant, personalized quote for your cleaning needs with our advanced calculator
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Panel - Room Selection */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Home className="w-8 h-8 mr-3 text-white" />
                    Select Your Rooms
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                    {rooms.map((room) => (
                      <div 
                        key={room.id}
                        className={`relative p-3 rounded-xl border-2 transition-all duration-300 cursor-pointer min-h-[80px] ${
                          room.selected 
                            ? 'border-white bg-white/20 scale-105' 
                            : 'border-gray-400 bg-gray-800/50 hover:border-gray-300'
                        }`}
                        onClick={() => toggleRoomSelection(room.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-sm">{room.name}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            room.selected ? 'border-white bg-white' : 'border-gray-400'
                          }`}>
                            {room.selected && <CheckCircle className="w-3 h-3 text-[#012E71]" />}
                          </div>
                        </div>
                        {room.selected && (
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation()
                                  updateRoomSize(room.id, room.size - 10)
                                }}
                                className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <input
                                type="number"
                                value={room.size}
                                onChange={(e) => updateRoomSize(room.id, parseInt(e.target.value) || 0)}
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-center text-white placeholder-gray-400 text-sm"
                                placeholder="sq ft"
                              />
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation()
                                  updateRoomSize(room.id, room.size + 10)
                                }}
                                className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            {room.price > 0 && (
                              <div className="text-white font-bold text-sm">
                                ${room.price.toFixed(2)}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Cleaning Type Selection */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Sparkles className="w-8 h-8 mr-3 text-white" />
                    Cleaning Type
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {Object.entries(cleaningTypes).map(([key, type]) => (
                      <button
                        key={key}
                        onClick={() => setCleaningType(key as keyof typeof cleaningTypes)}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${
                          cleaningType === key
                            ? 'border-white bg-white/20 scale-105'
                            : 'border-gray-400 bg-gray-800/50 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full bg-[#012E71] mb-2`}></div>
                        <div className="font-semibold text-sm">{type.name}</div>
                        <div className="text-xs opacity-75">+{((type.multiplier - 1) * 100).toFixed(0)}%</div>
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Panel - Results */}
            <div className="space-y-6">
              {/* Frequency Selection */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Calendar className="w-8 h-8 mr-3 text-white" />
                    Frequency
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(frequencyRates).map(([key, freq]) => (
                      <button
                        key={key}
                        onClick={() => setFrequency(key as keyof typeof frequencyRates)}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 text-center ${
                          frequency === key
                            ? 'border-white bg-white/20 scale-105'
                            : 'border-gray-400 bg-gray-800/50 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold text-sm">{freq.name}</div>
                        {freq.discount > 0 && (
                          <div className="text-xs text-gray-300">
                            Save {(freq.discount * 100).toFixed(0)}%
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Price Display */}
              <Card className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg border-gray-600">
                <div className="p-8 text-center">
                  <div className="mb-6">
                    <DollarSign className="w-16 h-16 text-white mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-2">Your Estimate</h3>
                  </div>
                  
                  {isCalculating ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-lg">Calculating...</span>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-6xl font-bold text-white">
                        ${totalPrice.toFixed(2)}
                      </div>
                      <div className="text-lg opacity-75">
                        per {frequency === 'oneTime' ? 'service' : frequencyRates[frequency].name.toLowerCase()}
                      </div>
                      {totalPrice > 0 && (
                        <div className="pt-4 space-y-2">
                          <Button className="w-full bg-[#012E71] text-white hover:bg-blue-800 text-lg font-bold py-3">
                            <Calendar className="w-5 h-5 mr-2" />
                            Book This Service
                          </Button>
                          <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#012E71]">
                            <Phone className="w-5 h-5 mr-2" />
                            Discuss Custom Options
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}