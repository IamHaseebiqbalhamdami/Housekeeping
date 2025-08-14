"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Home, Building2, Sparkles, CheckCircle, Phone, Mail } from "lucide-react"
import SharedHeader from "@/components/shared-header"

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    service: "",
    area: "",
    date: "",
    time: "",
    frequency: "",
    propertySize: "",
    rooms: "",
    bathrooms: "",
    extras: [],
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    specialRequests: "",
  })

  const services = [
    {
      id: "residential",
      name: "Residential Cleaning",
      icon: Home,
      price: "From $25/hr",
      description: "Complete home cleaning services",
    },
    {
      id: "commercial",
      name: "Commercial Cleaning",
      icon: Building2,
      price: "By sq ft",
      description: "Office and retail space cleaning",
    },
    {
      id: "deep",
      name: "Deep Cleaning",
      icon: Sparkles,
      price: "From $40/hr",
      description: "Comprehensive deep cleaning",
    },
  ]

  const areas = [
    "Barrie",
    "Orillia",
    "Midland",
    "Oro-Medonte",
    "Innisfil",
    "Springwater",
    "Wasaga Beach",
    "Penetanguishene",
    "Tiny",
    "Collingwood",
  ]

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    console.log("Booking submitted:", bookingData)
    setStep(5) // Success step
  }

  return (
    <div className="min-h-screen bg-white">
      

      {/* Progress Bar */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNum ? "bg-[#012E71] text-white" : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {stepNum}
                </div>
                {stepNum < 4 && <div className={`w-16 h-1 mx-2 ${step > stepNum ? "bg-[#012E71]" : "bg-gray-300"}`} />}
              </div>
            ))}
          </div>
          <div className="text-center mt-2">
            <span className="text-sm text-gray-600">
              Step {step} of 4:{" "}
              {step === 1
                ? "Service Selection"
                : step === 2
                  ? "Schedule & Location"
                  : step === 3
                    ? "Property Details"
                    : "Contact Information"}
            </span>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {step === 1 && (
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#012E71] mb-8 text-center">Select Your Service</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          bookingData.service === service.id
                            ? "border-[#012E71] bg-blue-50"
                            : "border-gray-200 hover:border-[#012E71]"
                        }`}
                        onClick={() => setBookingData({ ...bookingData, service: service.id })}
                      >
                        <service.icon className="w-12 h-12 text-[#012E71] mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-gray-600 mb-3">{service.description}</p>
                        <p className="text-[#012E71] font-semibold">{service.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-8">
                    <Button
                      onClick={handleNext}
                      disabled={!bookingData.service}
                      className="bg-[#012E71] hover:bg-blue-800 text-white"
                    >
                      Next Step
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#012E71] mb-8 text-center">Schedule & Location</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Select Area</h3>
                      <select
                        value={bookingData.area}
                        onChange={(e) => setBookingData({ ...bookingData, area: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#012E71] focus:border-[#012E71]"
                      >
                        <option value="">Choose your area</option>
                        {areas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Frequency</h3>
                      <select
                        value={bookingData.frequency}
                        onChange={(e) => setBookingData({ ...bookingData, frequency: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#012E71] focus:border-[#012E71]"
                      >
                        <option value="">Select frequency</option>
                        <option value="one-time">One-time cleaning</option>
                        <option value="weekly">Weekly</option>
                        <option value="bi-weekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Preferred Date</h3>
                      <Input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Preferred Time</h3>
                      <select
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#012E71] focus:border-[#012E71]"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between mt-8">
                    <Button onClick={handlePrev} variant="outline">
                      Previous
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!bookingData.area || !bookingData.date || !bookingData.time}
                      className="bg-[#012E71] hover:bg-blue-800 text-white"
                    >
                      Next Step
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#012E71] mb-8 text-center">Property Details</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Property Size</h3>
                      <select
                        value={bookingData.propertySize}
                        onChange={(e) => setBookingData({ ...bookingData, propertySize: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#012E71] focus:border-[#012E71]"
                      >
                        <option value="">Select size</option>
                        <option value="small">Small (&lt; 1,000 sq ft)</option>
                        <option value="medium">Medium (1,000-2,000 sq ft)</option>
                        <option value="large">Large (2,000-3,000 sq ft)</option>
                        <option value="xl">Extra Large (&gt; 3,000 sq ft)</option>
                      </select>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Number of Rooms</h3>
                      <Input
                        type="number"
                        value={bookingData.rooms}
                        onChange={(e) => setBookingData({ ...bookingData, rooms: e.target.value })}
                        placeholder="Enter number of rooms"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Number of Bathrooms</h3>
                      <Input
                        type="number"
                        value={bookingData.bathrooms}
                        onChange={(e) => setBookingData({ ...bookingData, bathrooms: e.target.value })}
                        placeholder="Enter number of bathrooms"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Special Requests</h3>
                    <Textarea
                      value={bookingData.specialRequests}
                      onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                      placeholder="Any special cleaning requirements or areas of focus?"
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between mt-8">
                    <Button onClick={handlePrev} variant="outline">
                      Previous
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!bookingData.propertySize}
                      className="bg-[#012E71] hover:bg-blue-800 text-white"
                    >
                      Next Step
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 4 && (
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#012E71] mb-8 text-center">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <Input
                        type="text"
                        value={bookingData.contactInfo.name}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            contactInfo: { ...bookingData.contactInfo, name: e.target.value },
                          })
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        value={bookingData.contactInfo.phone}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            contactInfo: { ...bookingData.contactInfo, phone: e.target.value },
                          })
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input
                        type="email"
                        value={bookingData.contactInfo.email}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            contactInfo: { ...bookingData.contactInfo, email: e.target.value },
                          })
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                      <Input
                        type="text"
                        value={bookingData.contactInfo.address}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            contactInfo: { ...bookingData.contactInfo, address: e.target.value },
                          })
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-8">
                    <Button onClick={handlePrev} variant="outline">
                      Previous
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={
                        !bookingData.contactInfo.name ||
                        !bookingData.contactInfo.phone ||
                        !bookingData.contactInfo.email
                      }
                      className="bg-[#012E71] hover:bg-blue-800 text-white"
                    >
                      Complete Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 5 && (
              <Card className="shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-[#012E71] mb-4">Booking Confirmed!</h2>
                  <p className="text-xl text-gray-700 mb-8">
                    Thank you for choosing HouseKeeping PRO. We'll contact you within 24 hours to confirm your
                    appointment details.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
                    <div className="text-left space-y-2">
                      <p>
                        <strong>Service:</strong> {services.find((s) => s.id === bookingData.service)?.name}
                      </p>
                      <p>
                        <strong>Area:</strong> {bookingData.area}
                      </p>
                      <p>
                        <strong>Date:</strong> {bookingData.date}
                      </p>
                      <p>
                        <strong>Time:</strong> {bookingData.time}
                      </p>
                      <p>
                        <strong>Frequency:</strong> {bookingData.frequency}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-[#012E71] hover:bg-blue-800 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us: (647) 534-8050
                    </Button>
                    <Button variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Email: info@housekeepingpro.ca
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
