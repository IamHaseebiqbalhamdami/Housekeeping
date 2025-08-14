"use client"
import { useState } from "react"
import Link from "next/link"


import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, MapPin, Calendar, Home, Building2, Sparkles, Play, Phone, Mail } from "lucide-react"

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [rating, setRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Residential",
    review: ""
  });
  const reviews = [
    {
      id: 1,
      name: "Jennifer Thompson",
      location: "Barrie, ON",
      service: "Residential",
      rating: 5,
      date: "March 2024",
      text: "HouseKeeping PRO has been cleaning our home for 3 years now. Their attention to detail is incredible and the team is so professional and reliable. I can't imagine using anyone else!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
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
  const handleSubmit = async () => {

    await fetch("https://housekeepingserver-1.onrender.com/submit-review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, rating })
    });
    alert("Review sent!");
  };
 
  // Single video review from first file
  const videoReview = {
    id: 1,
    name: "Client Testimonial",
    location: "Simcoe County, ON",
    videoPath: "https://res.cloudinary.com/dterqp7lk/video/upload/v1754918781/review_ajpjqt.mp4",
    description: "Watch this authentic review from one of our satisfied clients sharing their experience with HouseKeeping PRO."
  }

  // Multiple video reviews from second file
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
      {/* <SharedHeader currentPage="reviews" /> */}

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

      {/* Featured Video Review Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Featured Video Review</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Watch our clients share their experiences with HouseKeeping PRO
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0 overflow-hidden">
              <div className="relative">
                <video
                  src="https://res.cloudinary.com/dterqp7lk/video/upload/v1754918781/review_ajpjqt.mp4"
                  className="w-full h-96 md:h-[500px] object-cover"
                  autoPlay
                  muted={false}
                  controls
                  loop
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Client Review
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#012E71] mb-2">Client Reviews</h3>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Simcoe County, ON
                </p>
                <p className="text-gray-600 mt-2">
                  Watch this authentic review from one of our satisfied clients sharing their experience with HouseKeeping PRO.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

  

      {/* Featured Client Testimonials - Component 1 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-[#012E71]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Featured Client Stories</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real experiences from our satisfied clients across Simcoe County
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Client Image & Info */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Sarah Johnson - Residential Client"
                    width={500}
                    height={600}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Sarah Johnson</h3>
                    <p className="text-white/90 text-lg">Residential Deep Cleaning</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#012E71] to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Right Side - Testimonial Content */}
              <div className="space-y-6">
                <div className="relative">
                  <Quote className="w-12 h-12 text-[#012E71] opacity-20 mb-4" />
                  <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed italic mb-6">
                    "HouseKeeping PRO transformed our home! After 15 years of living here, I never realized how much dirt had accumulated. The team was professional, thorough, and left our home smelling fresh and looking brand new."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-1 h-12 bg-gradient-to-b from-[#012E71] to-blue-600 rounded-full"></div>
                    <div>
                      <p className="text-lg font-semibold text-[#012E71]">Sarah Johnson</p>
                      <p className="text-gray-600">Barrie, ON • 5-Star Review</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-gradient-to-br from-[#012E71]/10 to-blue-500/10 rounded-xl">
                    <div className="text-2xl font-bold text-[#012E71]">4 Hours</div>
                    <div className="text-sm text-gray-600">Service Time</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#012E71]/10 to-blue-500/10 rounded-xl">
                    <div className="text-2xl font-bold text-[#012E71]">$350</div>
                    <div className="text-sm text-gray-600">Service Value</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#012E71]/10 to-blue-500/10 rounded-xl">
                    <div className="text-2xl font-bold text-[#012E71]">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Client Showcase - Component 2 */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-[#012E71] to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Commercial Success Story</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              How we helped a local business maintain their professional image
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <div className="relative">
                  <Quote className="w-12 h-12 text-white opacity-30 mb-4" />
                  <p className="text-2xl md:text-3xl leading-relaxed italic mb-6">
                    "As a busy dental office, cleanliness is crucial for our patients' confidence. HouseKeeping PRO has been our trusted partner for 3 years, ensuring our facility always meets the highest standards of hygiene."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-1 h-12 bg-gradient-to-b from-white to-blue-200 rounded-full"></div>
                    <div>
                      <p className="text-lg font-semibold">Dr. Michael Chen</p>
                      <p className="opacity-90">Downtown Barrie Dental Clinic</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">3 Years</div>
                        <div className="text-sm opacity-90">Partnership</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">5.0</div>
                        <div className="text-sm opacity-90">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Client Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop"
                    alt="Dr. Michael Chen - Commercial Client"
                    width={500}
                    height={600}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dr. Michael Chen</h3>
                    <p className="text-white/90 text-lg">Commercial Cleaning</p>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-white to-blue-200 rounded-full flex items-center justify-center shadow-lg">
                  <Building2 className="w-8 h-8 text-[#012E71]" />
                </div>
              </div>
            </div>
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

      {/* Submit Review Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Share Your Experience</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We value your feedback! Submit your review and help others learn about our services.
            </p>
          </div>

          <form className="max-w-3xl mx-auto bg-gray-50 shadow-lg rounded-xl p-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#012E71]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#012E71]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Service Type</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#012E71]">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Airbnb</option>
                <option>Deep Cleaning</option>
              </select>
            </div>
            <div>
      <label className="block text-gray-700 font-semibold mb-2">Rating</label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`w-10 h-10 flex items-center justify-center border rounded-full transition-colors
              ${star <= rating ? "bg-yellow-400 text-white" : "bg-white text-black"}
            `}
          >
            ★
          </button>
        ))}
      </div>
    </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Review</label>
              <textarea
                placeholder="Write your review here..."
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#012E71]"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#012E71] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 transition"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Got questions? We've got answers. Here are some of the most common questions we receive.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I schedule a cleaning service?",
                answer:
                  "You can schedule a cleaning by booking online through our website or by calling our customer support team.",
              },
              {
                question: "Do you offer same-day bookings?",
                answer:
                  "Yes, we do offer same-day bookings based on availability. Please contact us as early as possible for urgent requests.",
              },
              {
                question: "Are your cleaning products eco-friendly?",
                answer:
                  "Absolutely! We use safe and eco-friendly products that are family and pet-friendly.",
              },
              {
                question: "Do you bring your own cleaning supplies?",
                answer:
                  "Yes, our team brings all the necessary cleaning products and equipment for every service.",
              },
            ].map((faq, index) => (
              <div key={index} className="border border-gray-300 rounded-lg">
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling
                    content!.classList.toggle("hidden")
                  }}
                >
                  {faq.question}
                  <span className="text-gray-500">+</span>
                </button>
                <div className="hidden px-6 pb-4 text-gray-600">{faq.answer}</div>
              </div>
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
      {/* Book Your Cleaning */}
      <Link href="/contact">
        <Button
          size="lg"
          className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Book Your Cleaning
        </Button>
      </Link>

      {/* Get Free Quote */}
      <Link href="/contact">
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-[#012E71] px-8 py-4 bg-transparent"
        >
          Get Free Quote
        </Button>
      </Link>
    </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}