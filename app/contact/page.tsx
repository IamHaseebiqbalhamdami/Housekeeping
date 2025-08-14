"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address:"",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    try {
      await fetch(`http://localhost:5000/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      setFormData({ name: "", email: "", phone: "", service: "", message: "" , address: ""})
      alert("Email sent successfully!")
    } catch (error) {
      alert("Failed to send email.")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Contact HouseKeeping PRO
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Ready to experience 26 years of cleaning excellence? Get in touch with Simcoe County's most trusted cleaning service.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#012E71] mb-6 sm:mb-8 text-center lg:text-left">
                Get Your Free Quote
              </h2>
              <Card className="shadow-lg border-0">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <Input 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                          className="h-10 sm:h-11"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          required 
                          className="h-10 sm:h-11"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                         Address
                      </label>
                      <Input 
                        name="address" 
                        type="text"
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                        className="h-10 sm:h-11"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input 
                        name="email" 
                        type="email"
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="h-10 sm:h-11"
                      />
                    </div>
                    <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Address
  </label>
  <Input 
    name="address" 
    value={formData.address} 
    onChange={handleChange} 
    required 
    className="h-10 sm:h-11"
  />
</div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full h-10 sm:h-11 p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-[#012E71] focus:border-[#012E71] text-sm sm:text-base"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Cleaning</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="airbnb">Airbnb Cleaning</option>
                        <option value="deep">Deep Cleaning</option>
                        <option value="office">Office Cleaning</option>
                        <option value="eco">Eco-Friendly Cleaning</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your cleaning needs..."
                        className="resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#012E71] hover:bg-blue-800 text-white text-base sm:text-lg py-2.5 sm:py-3 h-auto"
                    >
                      Get Free Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Cards */}
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#012E71] mb-6 sm:mb-8 text-center lg:text-left">
                Get In Touch
              </h2>
              <div className="space-y-4 sm:space-y-6">
                
                {/* Phone Card */}
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#012E71]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                          Phone
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-2">
                          Call us for immediate assistance
                        </p>
                        <a 
                          href="tel:+1(647) 534-8050
" 
                          className="text-[#012E71] hover:text-blue-800 font-medium text-sm sm:text-base break-all"
                        >
                          
  (647) 534-8050

                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Card */}
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#012E71]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                          Email
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-2">
                          Send us a detailed message
                        </p>
                        <a 
                          href="housekeepingpro49@gmail.com
" 
                          className="text-[#012E71] hover:text-blue-800 font-medium text-sm sm:text-base break-all"
                        >
housekeepingpro49@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location Card */}
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#012E71]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                          Service Area
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-2">
                          We serve all of Simcoe County
                        </p>
                        <p className="text-[#012E71] font-medium text-sm sm:text-base">
                          Barrie, Orillia, Collingwood & Surrounding Areas
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hours Card */}
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#012E71]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                          Business Hours
                        </h3>
                        <div className="text-sm sm:text-base text-gray-600 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Emergency calls only</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media Card */}
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
  <a 
    href="https://www.facebook.com/share/1CyDBAFJhR/" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#012E71] text-white rounded-full hover:bg-blue-800 transition-colors"
  >
    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
  </a>

  <a 
    href="https://www.instagram.com/house_keeping49?igsh=MXkxdnQ3bTBubDgwaA==" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#012E71] text-white rounded-full hover:bg-blue-800 transition-colors"
  >
    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
  </a>
</div>

                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#012E71] text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Need Emergency Cleaning?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            We offer emergency cleaning services for urgent situations across Simcoe County.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#012E71] hover:bg-gray-100 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 h-auto"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Call Emergency Line: (647) 534-8050
          </Button>
        </div>
      </section>
    </div>
  )
}
