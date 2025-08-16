"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Star, CheckCircle, Shield, Calendar, Phone, Mail, MapPin, Key,X, ShieldCheck, Leaf } from "lucide-react"
import { useEffect, useState } from "react"


export default function AirbnbServicesPage() {
  const services = [
    {
      title: "Turnover Cleaning",
      description: "Quick and thorough cleaning between guest stays to ensure 5-star reviews.",
      price: "From $89",
      duration: "2-3 hours",
      features: ["Complete sanitization", "Fresh linens", "Restocking supplies", "Quality inspection"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      title: "Deep Clean Setup",
      description: "Comprehensive cleaning to prepare your property for Airbnb listing.",
      price: "From $149",
      duration: "4-6 hours",
      features: ["Professional photography prep", "Deep sanitization", "Welcome amenities setup", "Final inspection"],
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    },
    {
      title: "Maintenance Cleaning",
      description: "Regular deep cleaning to maintain your property's high standards.",
      price: "From $119",
      duration: "3-4 hours",
      features: ["Monthly deep clean", "Damage assessment", "Supply inventory", "Host reporting"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    },
  ]

  const teamMembers = [
    {
      name: "Jessica Martinez",
      role: "Airbnb Specialist",
      experience: "5 years",
      image: "/Newteam/5.jpg",
      uniform: "Green HouseKeeping PRO polo shirt with company logo",
    },
    {
      name: "Ryan O'Connor",
      role: "Turnover Coordinator",
      experience: "4 years",
      image: "/Newteam/2.jpg",
      uniform: "Green HouseKeeping PRO polo shirt with company logo",
    },
  ]

  const reviews = [
    {
      name: "Sarah Thompson",
      property: "Lakefront Cottage",
      location: "Orillia, ON",
      rating: 5,
      text: "HouseKeeping PRO has been managing my Airbnb cleaning for 2 years. My guests consistently mention how clean and welcoming the space is. 5-star reviews every time!",
      image: "/Newteam/3.jpg",
      serviceImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      name: "Mark Chen",
      property: "Downtown Barrie Condo",
      location: "Barrie, ON",
      rating: 5,
      text: "The turnover cleaning is incredibly fast and thorough. They work around my booking schedule perfectly and always leave the place spotless.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      serviceImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    },
  ]
  const features = [
    { icon: ShieldCheck, text: "Certified & Insured Professionals" },
    { icon: Leaf, text: "Eco-Friendly Cleaning Products" },
    { icon: Clock, text: "Flexible Scheduling Options" },
    { icon: Star, text: "100% Satisfaction Guarantee" },
  ]
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden" // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <div className="min-h-screen bg-white">
     
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Airbnb Cleaning Services</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional Airbnb cleaning and turnover services across Simcoe County. Keep your guests happy and your
              reviews at 5 stars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Airbnb Service
              </Button>
              
              </Link>

<Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Host Quote
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Our Airbnb Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized cleaning services designed specifically for short-term rental properties.
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
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.price}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Key className="w-8 h-8 text-white bg-[#012E71]/50 p-1 rounded" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Clock className="w-4 h-4 mr-2 text-[#012E71]" />
                    Duration: {service.duration}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button onClick={() => setIsOpen(true)} className="w-full bg-[#012E71] hover:bg-blue-800 text-white">Book Service
                  </Button>
                </CardContent>
                
                {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white p-8 rounded-xl shadow-2xl w-96 relative text-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#012E71] focus:ring-offset-2 rounded-full p-1"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 id="modal-title" className="text-2xl font-bold text-[#012E71] mb-2">
              Get Started Today!
            </h3>
            <p className="text-gray-600 mb-8">
              Ready to experience our premium cleaning services? Get in touch with us now.
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-[#012E71] text-white rounded-lg hover:bg-[#02358b] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#012E71] focus:ring-offset-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
              <Link 
                href="/contact"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 text-[#012E71] rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#012E71] focus:ring-offset-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </Link>
              <Link
                href="tel:+1234567890"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: (647) 534-8050
              </Link>
            </div>
          </div>
        </div>
      )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Meet Our Airbnb Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our Airbnb specialists wear distinctive HouseKeeping PRO uniforms and understand the unique needs of
              short-term rentals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-84 object-fitwidth group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012E71]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center mb-2">
                      <Key className="w-4 h-4 mr-2" />
                      <span className="text-sm">{member.experience} Airbnb experience</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#012E71] mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.uniform}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield className="w-4 h-4 mr-2 text-green-500" />
                    Airbnb Certified & Trusted
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Host Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">What Our Airbnb Hosts Say</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real reviews from successful Airbnb hosts across Simcoe County
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-xl border-0 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <Image
                      src={review.serviceImage || "/placeholder.svg"}
                      alt="Airbnb cleaning service"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-02%20at%2020.55.30_d31d3cc8.jpg-ltfbL4qxNsZJM19pu8YgBkJBiRmUlE.jpeg"
                        alt="HouseKeeping PRO Logo"
                        width={80}
                        height={30}
                        className="h-8 w-auto bg-white/90 p-1 rounded"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                    <div className="flex items-center">
                      <Image
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-bold text-[#012E71]">{review.name}</h4>
                        <p className="text-gray-600 text-sm">{review.property}</p>
                        <p className="text-gray-600 text-sm flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Boost Your Airbnb Reviews?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join successful Airbnb hosts across Simcoe County who trust HouseKeeping PRO for their cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Airbnb Service
              </Button> </Link>

<Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] px-8 py-4 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call
  (647) 534-8050

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
