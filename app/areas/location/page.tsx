"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Users, Calendar, CheckCircle, Star, MapPin } from "lucide-react"

export default function LocationPage() {
  const serviceAreas = [
    {
      city: "Barrie",
      region: "Central Simcoe",
      description: "Our main hub serving the heart of Simcoe County with comprehensive cleaning services.",
      serviceYears: 26,
      clients: 500,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      services: ["Residential", "Commercial", "Airbnb", "Office", "Deep Cleaning"],
      href: "/areas/barrie",
    },
    {
      city: "Orillia",
      region: "North Simcoe",
      description: "Serving the beautiful lakeside community with reliable cleaning services since 2002.",
      serviceYears: 22,
      clients: 300,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      services: ["Residential", "Airbnb", "Seasonal Properties"],
      href: "/areas/orillia",
    },
    {
      city: "Midland",
      region: "Georgian Bay",
      description: "Professional cleaning services for Midland and Penetanguishene communities.",
      serviceYears: 20,
      clients: 250,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      services: ["Residential", "Commercial", "Seasonal"],
      href: "/areas/midland",
    },
    {
      city: "Wasaga Beach",
      region: "Georgian Bay",
      description: "Vacation property cleaning experts for Wasaga cottages and Airbnbs.",
      serviceYears: 15,
      clients: 220,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      services: ["Cottage Cleaning", "Airbnb", "Deep Cleaning"],
      href: "/areas/wasaga",
    },
  ]

  const whyChooseUs = [
    "26+ Years of Local Experience",
    "Fully Insured & Background-Checked Team",
    "Eco-Friendly Products",
    "Flexible Scheduling & Emergency Service",
    "Customized Cleaning for Each Area",
  ]

  const testimonials = [
    {
      city: "Barrie",
      name: "Sarah J.",
      text: "Absolutely love their professionalism! Barrie’s best cleaning team hands down.",
    },
    {
      city: "Orillia",
      name: "James P.",
      text: "Perfect for our lakeside property. Always reliable and thorough.",
    },
    {
      city: "Wasaga",
      name: "Emma W.",
      text: "They keep our Airbnb spotless! Guests always compliment the cleanliness.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* ✅ Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Service Areas</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional cleaning services across all of Simcoe County. From Barrie to Georgian Bay, we're your
              trusted local cleaning professionals.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#012E71]">26+</p>
              <p className="text-gray-600">Years in Service</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#012E71]">500+</p>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#012E71]">100%</p>
              <p className="text-gray-600">Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#012E71]">15+</p>
              <p className="text-gray-600">Areas Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Service Areas Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Where We Serve</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Each community receives personalized attention and professional cleaning excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.city}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012E71]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{area.city}</h3>
                    <p className="text-sm opacity-90">{area.region}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#012E71] mb-2">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.services.map((service, idx) => (
                        <span key={idx} className="bg-blue-100 text-[#012E71] px-2 py-1 rounded-full text-xs font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Link href={area.href}>
                      <Button variant="outline" className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white">
                        Learn More
                      </Button>
                    </Link>
                    <Button className="bg-[#012E71] hover:bg-blue-800 text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#012E71] mb-8">Why Choose Us Across Simcoe?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center justify-start bg-white p-4 rounded-lg shadow-md">
                <CheckCircle className="text-green-500 w-6 h-6 mr-3" />
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#012E71] mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((review, index) => (
              <Card key={index} className="p-6 shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                <p className="font-semibold text-[#012E71]">{review.name}</p>
                <p className="text-sm text-gray-500">{review.city}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA */}
      <section className="py-20 bg-[#012E71] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Book in Your Area?</h2>
          <p className="text-xl mb-8 opacity-90">Experience professional cleaning services backed by 26 years of excellence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" /> Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#012E71] bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" /> Call (705) 555-0123
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
