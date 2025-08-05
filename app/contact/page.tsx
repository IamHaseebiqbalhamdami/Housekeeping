"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import SharedHeader from "@/components/shared-header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <SharedHeader currentPage="contact" /> */}

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact HouseKeeping PRO</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Ready to experience 26 years of cleaning excellence? Get in touch with Simcoe County's most trusted
              cleaning service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#012E71] mb-8">Get Your Free Quote</h2>
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#012E71] focus:border-[#012E71]"
                        required
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full"
                        placeholder="Tell us about your cleaning needs..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#012E71] hover:bg-blue-800 text-white py-3">
                      Get Free Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#012E71] mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Phone className="w-6 h-6 text-[#012E71] mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    </div>
                    <p className="text-gray-600 mb-2">(705) 555-0123</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="w-6 h-6 text-[#012E71] mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    </div>
                    <p className="text-gray-600 mb-2">info@housekeepingpro.ca</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-[#012E71] mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
                    </div>
                    <p className="text-gray-600 mb-2">Barrie, Ontario (Main Hub)</p>
                    <p className="text-sm text-gray-500">Serving all of Simcoe County</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 text-[#012E71] mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    </div>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-[#012E71] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Cleaning?</h2>
          <p className="text-xl mb-8 opacity-90">
            We offer emergency cleaning services for urgent situations across Simcoe County.
          </p>
          <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
            <Phone className="w-5 h-5 mr-2" />
            Call Emergency Line: (705) 555-0911
          </Button>
        </div>
      </section>
    </div>
  )
}
