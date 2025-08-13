"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Shield, Clock, Users, Phone, Mail, MapPin, Calendar, Award, Home, Building2, Sparkles, Leaf, ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Zap, Heart, TrendingUp, Target, Lightbulb, Truck, Clock3, ThumbsUp } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SplashScreen from "@/components/splash-screen"

// Responsive Hero Slider Component
function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
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

  // Initialize mobile state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Set initial state
    checkMobile()
    
    // Add resize listener
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Separate useEffect for the timer to avoid dependency issues
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, isMobile ? 6000 : 5000) // Slower on mobile
    
    return () => {
      clearInterval(timer)
    }
  }, [slides.length, isMobile])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg?height=900&width=1400"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012E71]/90 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block mb-3 sm:mb-4">
              <span className="text-white/90 text-xs sm:text-sm font-medium">{slides[currentSlide].highlight}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 max-w-3xl leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#012E71] hover:bg-gray-100 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 h-auto">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Book Online Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#012E71] text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 h-auto bg-transparent"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Call (647) 534-8050
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:block absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(false)
  
  useEffect(() => {
    // Only check sessionStorage on client side
    if (typeof window !== 'undefined') {
      const splashShown = sessionStorage.getItem('splashShown')
      if (!splashShown) {
        setShowSplash(true)
      }
    }
  }, [])
  
  const handleSplashComplete = () => {
    setShowSplash(false)
    // Mark splash as shown for this session
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('splashShown', 'true')
    }
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
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className="min-h-screen bg-white">
        {/* Hero Slider Section */}
        <HeroSlider />

        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div className="flex flex-col items-center p-4">
                <Award className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012E71] mb-1 sm:mb-2">26</div>
                <p className="text-sm sm:text-base text-gray-700 font-medium">Years Experience</p>
              </div>

              <div className="flex flex-col items-center p-4">
                <Users className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012E71] mb-1 sm:mb-2">1,200+</div>
                <p className="text-sm sm:text-base text-gray-700 font-medium">Happy Clients</p>
              </div>

              <div className="flex flex-col items-center p-4">
                <Shield className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012E71] mb-1 sm:mb-2">98%</div>
                <p className="text-sm sm:text-base text-gray-700 font-medium">Satisfaction Rate</p>
              </div>

              <div className="flex flex-col items-center p-4">
                <Clock className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012E71] mb-1 sm:mb-2">50+</div>
                <p className="text-sm sm:text-base text-gray-700 font-medium">Team Members</p>
              </div>

              <div className="flex flex-col items-center p-4">
                <Users className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012E71] mb-1 sm:mb-2">40</div>
                <p className="text-sm sm:text-base text-gray-700 font-medium">Employees</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E71] mb-3 sm:mb-4">
                Our Cleaning Services
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Professional cleaning solutions tailored to your needs across Simcoe County. From regular maintenance to
                deep cleaning, we've got you covered.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg?height=300&width=400"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#012E71]/70 to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
                      <h3 className="text-lg sm:text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                    <Link href={service.link}>
                      <Button className="w-full bg-[#012E71] hover:bg-blue-800 text-white group-hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                        Learn More
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E71] mb-3 sm:mb-4">
                Why Choose HouseKeeping PRO?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
                26 years of trusted service across Simcoe County with a commitment to excellence.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                }}
                loop={true}
              >
                <SwiperSlide>
                  <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 h-full">
                    <Shield className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mx-auto mb-4 sm:mb-6" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-3 sm:mb-4">
                      Fully Insured & Bonded
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Complete insurance coverage and bonding for your peace of mind. All team members are
                      background-checked and trained professionals.
                    </p>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 h-full">
                    <Award className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mx-auto mb-4 sm:mb-6" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-3 sm:mb-4">
                      26 Years Experience
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Canadian owned and operated since 1998. We've built our reputation on consistent, reliable
                      service across Simcoe County and in Other Counties where People Alive.
                    </p>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 h-full">
                    <Users className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mx-auto mb-4 sm:mb-6" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-3 sm:mb-4">
                      40 Dedicated Employees
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Our skilled and committed team of 40 professionals works tirelessly to deliver the highest
                      standards of cleaning and customer satisfaction.
                    </p>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 h-full">
                    <Star className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mx-auto mb-4 sm:mb-6" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-3 sm:mb-4">
                      98% Satisfaction Rate
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Our clients love our service! With over 1,200 satisfied customers, we consistently deliver
                      exceptional results that satisfied by its user and clients.
                    </p>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Process & Methodology Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E71] mb-3 sm:mb-4">
                Our Proven Process
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                A systematic approach that ensures consistent, high-quality results every time
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: Target,
                  title: "Assessment",
                  description: "We evaluate your space and discuss your specific needs to create a customized cleaning plan.",
                  number: 1
                },
                {
                  icon: Lightbulb,
                  title: "Planning",
                  description: "Our team develops a detailed cleaning strategy using professional-grade equipment and products.",
                  number: 2
                },
                {
                  icon: Truck,
                  title: "Execution",
                  description: "Trained professionals arrive on time and complete the job with attention to every detail.",
                  number: 3
                },
                {
                  icon: CheckCircle,
                  title: "Quality Check",
                  description: "Final inspection ensures everything meets our high standards before we leave your property.",
                  number: 4
                }
              ].map((tech, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-4 sm:p-6 lg:p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                  <tech.icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white mx-auto mb-4 sm:mb-6" />
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">{tech.title}</h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed text-center">{tech.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-8 sm:mt-12 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                <div className="flex items-center space-x-2">
                  <Clock3 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  <span className="text-xs sm:text-sm">Real-time Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="text-xs sm:text-sm">Quality Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span className="text-xs sm:text-sm">100% Secure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E71] mb-3 sm:mb-4">
                Areas We Serve
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
                Professional cleaning services throughout Simcoe County and surrounding areas
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {serviceAreas.map((area, index) => (
                <Link key={index} href={area.link}>
                  <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#012E71] mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-[#012E71] group-hover:text-blue-600 truncate">{area.name}</h3>
                        <p className="text-sm sm:text-base text-gray-600 truncate">{area.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Equipment Showcase */}
     {/* Professional Equipment Showcase */}
<section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#012E71] to-blue-800 text-white relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 h-20 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-30 h-30 sm:w-60 sm:h-60 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/3 w-16 h-16 sm:w-32 sm:h-32 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
        Professional Equipment
      </h2>
      <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
        State-of-the-art cleaning tools and equipment for exceptional results
      </p>
    </div>
    <div className="max-w-6xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={false} // Removed arrows
        pagination={false} // Removed dots
        className="professional-equipment-swiper"
      >
        {[
          {
            image: "/images/1st.png",
            title: "HEPA Vacuum Systems",
            description: "Advanced filtration for allergen-free cleaning"
          },
          {
            image: "/images/5th.jpg",
            title: "Steam Cleaners",
            description: "Chemical-free sanitization at high temperatures"
          },
          {
            image: "/images/3rd.jpg",
            title: "Floor Polishers",
            description: "Professional floor restoration and maintenance"
          },
          {
            image: "/images/4th.png",
            title: "Carpet Cleaners",
            description: "Deep carpet cleaning and stain removal"
          },
          {
            image: "/images/2nd.jpg",
            title: "Window Cleaning Tools",
            description: "Streak-free window and glass cleaning"
          },
          {
            image: "/images/5th.jpg",
            title: "Eco-Friendly Products",
            description: "Non-toxic, biodegradable cleaning solutions"
          }
        ].map((equipment, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-xl mb-3 sm:mb-4">
                <Image
                  src={equipment.image || "/placeholder.svg"}
                  alt={equipment.title}
                  width={400}
                  height={300}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2">{equipment.title}</h3>
              <p className="text-xs sm:text-sm opacity-90">{equipment.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-8 sm:mt-12">
        <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-3 sm:mb-4">
          Professional-grade equipment ensures thorough, efficient, and safe cleaning
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm opacity-75">
          <div className="flex items-center">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span>Certified Equipment</span>
          </div>
          <div className="flex items-center">
            <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span>Eco-Friendly</span>
          </div>
          <div className="flex items-center">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span>Professional Grade</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E71] mb-3 sm:mb-4">
                What Our Clients Say
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
                Real reviews from satisfied customers across Simcoe County
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="flex mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg?height=50&width=50"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 object-cover"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#012E71]">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Link href="/reviews">
                <Button
                  variant="outline"
                  className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                >
                  Read More Reviews
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#012E71] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Ready for Professional Cleaning?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
                Join 1,200+ satisfied clients across Simcoe County. Book your cleaning service today and experience the
                HouseKeeping PRO difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
      <Link href="/contact">
        <Button
          size="lg"
          className="w-full sm:w-auto bg-white text-[#012E71] hover:bg-gray-100 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 h-auto"
        >
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Book Your Cleaning
        </Button>
      </Link>

      <Link href="/contact">
        <Button
          size="lg"
          variant="outline"
          className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#012E71] text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 h-auto bg-transparent"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Get Free Quote
        </Button>
      </Link>
    </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
