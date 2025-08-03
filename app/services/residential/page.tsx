"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Star, CheckCircle, Shield, Calendar, Phone, Mail, MapPin, Award } from "lucide-react"
import SharedHeader from "@/components/shared-header"

export default function ResidentialServicesPage() {
  const services = [
    {
      title: "Regular House Cleaning",
      description: "Weekly, bi-weekly, or monthly cleaning to keep your home consistently spotless.",
      price: "From $89",
      duration: "2-4 hours",
      features: ["All rooms cleaned", "Kitchen & bathrooms", "Dusting & vacuuming", "Trash removal"],
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop",
    },
    {
      title: "Deep House Cleaning",
      description: "Comprehensive one-time cleaning perfect for spring cleaning or move-ins.",
      price: "From $149",
      duration: "4-6 hours",
      features: ["Inside appliances", "Baseboards & windows", "Light fixtures", "Cabinet interiors"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    },
    {
      title: "Move-In/Move-Out",
      description: "Complete cleaning for your new home or preparing your old one for sale.",
      price: "From $199",
      duration: "5-8 hours",
      features: ["Empty home cleaning", "All surfaces sanitized", "Appliance cleaning", "Final inspection"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
  ]

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Residential Team Lead",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      uniform: "Blue HouseKeeping PRO polo shirt with company logo",
    },
    {
      name: "Maria Garcia",
      role: "Senior Cleaner",
      experience: "6 years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      uniform: "Blue HouseKeeping PRO polo shirt with company logo",
    },
    {
      name: "Jennifer Lee",
      role: "Quality Inspector",
      experience: "5 years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      uniform: "Blue HouseKeeping PRO polo shirt with company logo",
    },
  ]

  const reviews = [
    {
      name: "Emily Watson",
      location: "Barrie, ON",
      rating: 5,
      text: "The residential team is amazing! They've been cleaning our 3-bedroom home for 2 years. Always professional, thorough, and reliable.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      serviceImage: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop",
    },
    {
      name: "Robert Chen",
      location: "Oro-Medonte, ON",
      rating: 5,
      text: "Exceptional deep cleaning service! They cleaned our entire house before we moved in. Every corner was spotless.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      serviceImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader currentPage="services" />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Residential Cleaning Services</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional home cleaning services across Simcoe County. From regular maintenance to deep cleaning, we
              keep your home spotless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Residential Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Our Residential Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from our range of residential cleaning services designed to fit your schedule and budget.
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
                  <Button className="w-full bg-[#012E71] hover:bg-blue-800 text-white">Book This Service</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Meet Our Residential Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our experienced residential cleaning professionals wear HouseKeeping PRO uniforms and are fully trained,
              insured, and background-checked.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012E71]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center mb-2">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm">{member.experience} experience</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#012E71] mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.uniform}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield className="w-4 h-4 mr-2 text-green-500" />
                    Background Checked & Insured
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">What Our Residential Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Real reviews from homeowners across Simcoe County</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-xl border-0 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <Image
                      src={review.serviceImage || "/placeholder.svg"}
                      alt="Service in progress"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Professional Home Cleaning?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied homeowners across Simcoe County who trust HouseKeeping PRO for their
              residential cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Residential Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] px-8 py-4 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (705) 555-0123
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
                Professional residential cleaning services across Simcoe County for 26 years.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Residential Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Regular House Cleaning</li>
                <li>Deep House Cleaning</li>
                <li>Move-In/Move-Out</li>
                <li>Post-Construction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Barrie</li>
                <li>Orillia</li>
                <li>Midland</li>
                <li>Oro-Medonte</li>
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
                  Simcoe County, ON
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HouseKeeping PRO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
