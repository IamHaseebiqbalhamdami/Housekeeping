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
  CheckCircle,
  Zap,
  Heart,
  TrendingUp,
  Target,
  Lightbulb,
  Truck,
  Clock3,
  ThumbsUp,
} from "lucide-react"
import SharedHeader from "@/components/shared-header"
import InteractiveCompanyTimeline from "@/components/interactivetim"
import InteractiveCleaningCalculator from "@/components/interactivecal"
import InnovativeShowcase from "@/components/innovative-showcase"
import SplashScreen from "@/components/splash-screen"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 text-lg px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#012E71] text-lg px-8 py-4 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (705) 555-0123
                </Button>
              </Link>
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
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  const services = [
    {
      title: "Residential Cleaning",
      description: "Professional home cleaning services for houses, condos, and apartments across Simcoe County.",
      icon: Home,
      image: '/images/resi.png',
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
      image: '/images/eco.png',
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
      name: "Boby Chain",
      location: "Barrie, ON",
      text: "HouseKeeping PRO has been cleaning our home for 3 years now. Their attention to detail is incredible and the team is so professional and reliable. I can't imagine using anyone else!",
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "David Thomson",
      location: "Orillia, ON",
      text: "As an Airbnb host, I depend on quick turnaround cleaning. HouseKeeping PRO never disappoints - my guests always comment on how spotless everything is. Best investment I've made!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Sara khan",
      location: "Midland, ON",
      text: "Their monthly contract rates are very reasonable and the service is consistently excellent. After 26 years in business, they really know what they're doing. Highly recommend!",
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
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
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={300}
                    height={300}
                    className="w-full h-64 object-fitwidth group-hover:scale-110 transition-transform duration-500"
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

      {/* Interactive Company Timeline */}
      <InteractiveCompanyTimeline />


      {/* Innovative Showcase */}
      <InnovativeShowcase />

      {/* Process & Methodology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A systematic approach that ensures consistent, high-quality results every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#012E71] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-[#012E71]">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#012E71] mb-4">Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                We evaluate your space and discuss your specific needs to create a customized cleaning plan.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#012E71] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-[#012E71]">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#012E71] mb-4">Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team develops a detailed cleaning strategy using professional-grade equipment and products.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#012E71] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-[#012E71]">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#012E71] mb-4">Execution</h3>
              <p className="text-gray-600 leading-relaxed">
                Trained professionals arrive on time and complete the job with attention to every detail.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#012E71] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-[#012E71]">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#012E71] mb-4">Quality Check</h3>
              <p className="text-gray-600 leading-relaxed">
                Final inspection ensures everything meets our high standards before we leave your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-[#012E71] to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced Technology & Innovation</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We combine cutting-edge cleaning technology with eco-friendly practices for superior results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <Zap className="w-16 h-16 text-white-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-center">HEPA Filtration Systems</h3>
              <p className="text-white/90 leading-relaxed text-center">
                Advanced air purification technology removes 99.97% of airborne particles, ensuring cleaner, healthier indoor air.
              </p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <Heart className="w-16 h-16 text-white-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-center">Eco-Friendly Products</h3>
              <p className="text-white/90 leading-relaxed text-center">
                Certified green cleaning products that are safe for your family, pets, and the environment while delivering exceptional results.
              </p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <TrendingUp className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-center">Smart Scheduling</h3>
              <p className="text-white/90 leading-relaxed text-center">
                AI-powered scheduling system ensures optimal timing and route planning for maximum efficiency and reliability.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
              <div className="flex items-center space-x-2">
                <Clock3 className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Real-time Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-5 h-5 text-green-400" />
                <span className="text-sm">Quality Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm">100% Secure</span>
              </div>
            </div>
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

      {/* Professional Equipment Showcase */}
      <section className="py-20 bg-gradient-to-br from-[#012E71] to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Equipment</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              State-of-the-art cleaning tools and equipment for exceptional results
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              className="professional-equipment-swiper"
            >
              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
                      alt="Professional Vacuum Cleaner"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">HEPA Vacuum Systems</h3>
                  <p className="text-sm opacity-90">Advanced filtration for allergen-free cleaning</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
                      alt="Steam Cleaning Equipment"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Steam Cleaners</h3>
                  <p className="text-sm opacity-90">Chemical-free sanitization at high temperatures</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop"
                      alt="Floor Polishing Equipment"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Floor Polishers</h3>
                  <p className="text-sm opacity-90">Professional floor restoration and maintenance</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
                      alt="Carpet Cleaning Equipment"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Carpet Cleaners</h3>
                  <p className="text-sm opacity-90">Deep carpet cleaning and stain removal</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
                      alt="Window Cleaning Tools"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Window Cleaning Tools</h3>
                  <p className="text-sm opacity-90">Streak-free window and glass cleaning</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
                      alt="Eco-Friendly Products"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Eco-Friendly Products</h3>
                  <p className="text-sm opacity-90">Non-toxic, biodegradable cleaning solutions</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop"
                      alt="Microfiber Technology"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Microfiber Technology</h3>
                  <p className="text-sm opacity-90">Ultra-absorbent cloths for superior cleaning</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
                      alt="UV Sanitization"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">UV Sanitization</h3>
                  <p className="text-sm opacity-90">Advanced germ elimination technology</p>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="text-center mt-12">
              <p className="text-lg opacity-90 mb-4">
                Professional-grade equipment ensures thorough, efficient, and safe cleaning
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Certified Equipment</span>
                </div>
                <div className="flex items-center">
                  <Leaf className="w-4 h-4 mr-2" />
                  <span>Eco-Friendly</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Professional Grade</span>
                </div>
              </div>
            </div>
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
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Cleaning
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#012E71] px-8 py-4 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer
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
              <div className="flex space-x-4">
                <div className="flex items-center text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Fully Insured</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/services/residential" className="hover:text-white transition-colors">
                    Residential Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial" className="hover:text-white transition-colors">
                    Commercial Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/airbnb" className="hover:text-white transition-colors">
                    Airbnb Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/deep" className="hover:text-white transition-colors">
                    Deep Cleaning
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/areas/barrie" className="hover:text-white transition-colors">
                    Barrie
                  </Link>
                </li>
                <li>
                  <Link href="/areas/orillia" className="hover:text-white transition-colors">
                    Orillia
                  </Link>
                </li>
                <li>
                  <Link href="/areas/midland" className="hover:text-white transition-colors">
                    Midland
                  </Link>
                </li>
                <li>
                  <Link href="/areas" className="hover:text-white transition-colors">
                    All Areas
                  </Link>
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
                  Simcoe County, Ontario
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HouseKeeping PRO. All rights reserved. | 26 Years Serving Simcoe County</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
