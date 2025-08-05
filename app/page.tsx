"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Star,
  Shield,
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  Home,
  Building2,
  Sparkles,
  Leaf,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import SharedHeader from "@/components/shared-header"

// Hero Slider Component
function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1400&h=900&fit=crop&auto=format&q=80",
      title: "Professional Cleaning Services",
      subtitle: "Trusted by 1,200+ clients across Simcoe County for 26 years",
      highlight: "Residential • Commercial • Airbnb",
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=900&fit=crop&auto=format&q=80",
      title: "Canadian Owned & Operated",
      subtitle: "Serving Barrie, Orillia, Midland and surrounding communities",
      highlight: "26 Years of Excellence",
    },
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&h=900&fit=crop&auto=format&q=80",
      title: "Flexible Pricing Options",
      subtitle: "Hourly rates and square footage pricing to fit your budget",
      highlight: "Special Contract Rates Available",
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop&auto=format&q=80",
      title: "Fully Insured & Bonded",
      subtitle: "Complete protection and peace of mind for every service",
      highlight: "98% Customer Satisfaction",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012E71]/90 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4">
              <span className="text-white/90 text-sm font-medium">{slides[currentSlide].highlight}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 text-lg px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] text-lg px-8 py-4 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (705) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default function HomePage() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Professional home cleaning services for houses, condos, and apartments across Simcoe County.",
      icon: Home,
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop",
      link: "/services/residential",
    },
    {
      title: "Commercial Cleaning",
      description: "Office and retail space cleaning services to maintain a professional business environment.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      link: "/services/commercial",
    },
    {
      title: "Airbnb Cleaning",
      description: "Specialized turnover cleaning for short-term rentals to ensure 5-star guest reviews.",
      icon: Home,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      link: "/services/airbnb",
    },
    {
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning services perfect for spring cleaning and move-ins.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      link: "/services/deep",
    },
    {
      title: "Eco-Friendly Cleaning",
      description: "Green cleaning services using 100% non-toxic, biodegradable products safe for your family.",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
      link: "/services/eco",
    },
    {
      title: "Office Cleaning",
      description: "Professional office cleaning services to maintain a healthy and productive work environment.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      link: "/services/office",
    },
  ]

  const testimonials = [
    {
      name: "Jennifer Thompson",
      location: "Barrie, ON",
      text: "HouseKeeping PRO has been cleaning our home for 3 years now. Their attention to detail is incredible and the team is so professional and reliable. I can't imagine using anyone else!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "David Chen",
      location: "Orillia, ON",
      text: "As an Airbnb host, I depend on quick turnaround cleaning. HouseKeeping PRO never disappoints - my guests always comment on how spotless everything is. Best investment I've made!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Sarah Wilson",
      location: "Midland, ON",
      text: "Their monthly contract rates are very reasonable and the service is consistently excellent. After 26 years in business, they really know what they're doing. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ]

  const serviceAreas = [
    { name: "Barrie", description: "Our main service hub", link: "/areas/barrie" },
    { name: "Orillia", description: "Lakefront properties", link: "/areas/orillia" },
    { name: "Midland", description: "Historic downtown", link: "/areas/midland" },
    { name: "Simcoe County", description: "All communities", link: "/areas/simcoe" },
    { name: "Wasaga Beach", description: "Seasonal properties", link: "/areas/wasaga" },
    { name: "Oro-Medonte", description: "Rural properties", link: "/areas" },
  ]

  return (
    <div className="min-h-screen bg-white">
  
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Company Info Banner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-[#012E71] mb-4" />
              <div className="text-3xl font-bold text-[#012E71] mb-2">26</div>
              <p className="text-gray-700">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-[#012E71] mb-4" />
              <div className="text-3xl font-bold text-[#012E71] mb-2">1,200+</div>
              <p className="text-gray-700">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-[#012E71] mb-4" />
              <div className="text-3xl font-bold text-[#012E71] mb-2">98%</div>
              <p className="text-gray-700">Satisfaction Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-[#012E71] mb-4" />
              <div className="text-3xl font-bold text-[#012E71] mb-2">24/7</div>
              <p className="text-gray-700">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Our Cleaning Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional cleaning solutions tailored to your needs across Simcoe County. From regular maintenance to
              deep cleaning, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012E71]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon className="w-8 h-8 mb-2" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link href={service.link}>
                    <Button className="w-full bg-[#012E71] hover:bg-blue-800 text-white group-hover:scale-105 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Why Choose HouseKeeping PRO?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              26 years of trusted service across Simcoe County with a commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <Shield className="w-16 h-16 text-[#012E71] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#012E71] mb-4">Fully Insured & Bonded</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete insurance coverage and bonding for your peace of mind. All team members are background-checked
                and trained professionals.
              </p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <Award className="w-16 h-16 text-[#012E71] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#012E71] mb-4">26 Years Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Canadian owned and operated since 1998. We've built our reputation on consistent, reliable service
                across Simcoe County.
              </p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <Star className="w-16 h-16 text-[#012E71] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#012E71] mb-4">98% Satisfaction Rate</h3>
              <p className="text-gray-600 leading-relaxed">
                Our clients love our service! With over 1,200 satisfied customers, we consistently deliver exceptional
                results.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Professional cleaning services throughout Simcoe County and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Link key={index} href={area.link}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className="flex items-center">
                    <MapPin className="w-8 h-8 text-[#012E71] mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-lg font-bold text-[#012E71] group-hover:text-blue-600">{area.name}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real reviews from satisfied customers across Simcoe County
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#012E71]">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reviews">
              <Button
                variant="outline"
                className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent px-8 py-3"
              >
                Read More Reviews
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Professional Cleaning?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join 1,200+ satisfied clients across Simcoe County. Book your cleaning service today and experience the
              HouseKeeping PRO difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Cleaning
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] px-8 py-4 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>    
    </div>
  )
}
