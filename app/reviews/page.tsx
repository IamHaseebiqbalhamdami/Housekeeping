"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, MapPin, Calendar, Home, Building2, Sparkles, Play, Phone, Mail } from "lucide-react"
import SharedHeader from "@/components/shared-header"

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const reviews = [
    {
      id: 1,
      name: "Jennifer Thompson",
      location: "Barrie, ON",
      service: "Residential",
      rating: 5,
      date: "March 2024",
      text: "HouseKeeping PRO has been cleaning our home for 3 years now. Their attention to detail is incredible and the team is so professional and reliable. I can't imagine using anyone else!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      verified: true,
      featured: true,
    },
    {
      id: 2,
      name: "David Chen",
      location: "Orillia, ON",
      service: "Airbnb",
      rating: 5,
      date: "March 2024",
      text: "As an Airbnb host, I depend on quick turnaround cleaning. HouseKeeping PRO never disappoints - my guests always comment on how spotless everything is. Best investment I've made for my rental business!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      verified: true,
      featured: true,
    },
    {
      id: 3,
      name: "Sarah Wilson",
      location: "Midland, ON",
      service: "Residential",
      rating: 5,
      date: "February 2024",
      text: "Their monthly contract rates are very reasonable and the service is consistently excellent. After 26 years in business, they really know what they're doing. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      verified: true,
      featured: false,
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      location: "Innisfil, ON",
      service: "Eco-Friendly",
      rating: 5,
      date: "February 2024",
      text: "The eco-friendly cleaning options are perfect for our family. Professional, punctual, and they use safe products around our kids and pets. Couldn't be happier with the service.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      verified: true,
      featured: false,
    },
    {
      id: 5,
      name: "Lisa Anderson",
      location: "Springwater, ON",
      service: "Deep Cleaning",
      rating: 5,
      date: "January 2024",
      text: "We hired them for a deep clean before selling our house. The results were amazing - our realtor said it was the cleanest house she'd ever listed. Worth every penny!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      verified: true,
      featured: false,
    },
    {
      id: 6,
      name: "Robert Kim",
      location: "Oro-Medonte, ON",
      service: "Commercial",
      rating: 5,
      date: "January 2024",
      text: "Our office has never looked better. The team is professional, efficient, and works around our schedule. Great value for the quality of service we receive.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      verified: true,
      featured: false,
    },
  ]

  const videoReviews = [
    {
      id: 1,
      name: "Margaret & John Smith",
      location: "Barrie, ON",
      thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      duration: "2:15",
    },
    {
      id: 2,
      name: "Downtown Barrie Office",
      location: "Barrie, ON",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      duration: "1:45",
    },
  ]

  const filters = [
    { id: "all", name: "All Reviews", icon: Star },
    { id: "residential", name: "Residential", icon: Home },
    { id: "commercial", name: "Commercial", icon: Building2 },
    { id: "airbnb", name: "Airbnb", icon: Home },
    { id: "deep", name: "Deep Cleaning", icon: Sparkles },
  ]

  const filteredReviews =
    activeFilter === "all" ? reviews : reviews.filter((t) => t.service.toLowerCase().includes(activeFilter))

  const featuredReviews = reviews.filter((t) => t.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
  

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Reviews</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Hear from our 1,200+ satisfied clients across Simcoe County. Real reviews from real customers who trust
              HouseKeeping PRO for their cleaning needs.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold">98%</div>
                <div className="text-sm opacity-90">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">1,200+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">26</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Featured Reviews</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our most recent 5-star reviews from clients across Simcoe County
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredReviews.map((review) => (
                <Card key={review.id} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-12 h-12 text-[#012E71] mx-auto mb-6 opacity-20" />
                    <p className="text-gray-700 text-lg mb-8 italic leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center justify-center">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                      <div className="text-center">
                        <h4 className="font-bold text-[#012E71] text-lg">{review.name}</h4>
                        <p className="text-gray-600 flex items-center justify-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {review.location}
                        </p>
                        <p className="text-sm text-gray-500">
                          {review.service} • {review.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Video Reviews</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Watch our clients share their experiences with HouseKeeping PRO
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoReviews.map((video) => (
              <Card key={video.id} className="shadow-lg border-0 overflow-hidden group cursor-pointer">
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#012E71] mb-2">{video.name}</h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {video.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">All Client Reviews</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Browse through hundreds of authentic reviews from our satisfied clients
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`${
                  activeFilter === filter.id
                    ? "bg-[#012E71] text-white"
                    : "border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
                }`}
              >
                <filter.icon className="w-4 h-4 mr-2" />
                {filter.name}
              </Button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    {review.verified && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center">
                    <Image
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="mr-2">{review.location}</span>
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{review.date}</span>
                      </div>
                      <span className="inline-block bg-blue-100 text-[#012E71] px-2 py-1 rounded-full text-xs font-medium mt-1">
                        {review.service}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Happy Clients</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the same exceptional service that has earned us 98% customer satisfaction across Simcoe County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Cleaning
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] px-8 py-4 bg-transparent"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-02%20at%2020.55.30_d31d3cc8.jpg-ltfbL4qxNsZJM19pu8YgBkJBiRmUlE.jpeg"
                alt="HouseKeeping PRO Logo"
                width={180}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 mb-4">
                Canadian owned and operated cleaning services serving Simcoe County for 26 years.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/areas" className="hover:text-white transition-colors">
                    Service Areas
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/services/residential" className="hover:text-white transition-colors">
                    Residential Cleaning
                  </a>
                </li>
                <li>
                  <a href="/services/commercial" className="hover:text-white transition-colors">
                    Commercial Cleaning
                  </a>
                </li>
                <li>
                  <a href="/services/airbnb" className="hover:text-white transition-colors">
                    Airbnb Cleaning
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (705) 555-0123
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@housekeepingpro.ca
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Barrie, Ontario
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HouseKeeping PRO. All rights reserved. | 26 Years Serving Simcoe County</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
