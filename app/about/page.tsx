"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Users, Clock, Star, CheckCircle, Phone, Mail, MapPin, Calendar, Heart, Leaf, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from "react"

export default function AboutPage() {
  const [currentTeamPage, setCurrentTeamPage] = useState(0)
  const teamMembersPerPage = 6
  const teamMembers = [
    {
      name: "Margaret Thompson",
      role: "Founder & CEO",
      experience: "26 years",
      image: "/Team2/1.png",
      bio: "Founded HouseKeeping PRO in 1998 with a vision to provide exceptional cleaning services across Simcoe County.",
    },
    {
      name: "David Rodriguez",
      role: "CTO & Operations Manager",
      experience: "15 years",
      image: "/Team2/2.png",
      bio: "Oversees daily operations and ensures our high standards are maintained across all service areas.",
    },
    {
      name: "Sarah Wilson",
      role: "Quality Assurance Director",
      experience: "12 years",
      image: "/Team2/3.png",
      bio: "Leads our quality control initiatives and training programs for all cleaning professionals.",
    },
    {
      name: "Michael Chen",
      role: "Customer Relations Manager",
      experience: "8 years",
      image: "/Team2/4.png",
      bio: "Ensures exceptional customer service and manages client relationships across all service areas.",
    },
    {
      name: "Emily Johnson",
      role: "Senior Cleaning Specialist",
      experience: "10 years",
      image: "/Team2/5.png",
      bio: "Expert in deep cleaning and specialized residential services with exceptional attention to detail.",
    },
    {
      name: "Robert Martinez",
      role: "Commercial Team Lead",
      experience: "9 years",
      image: "/Team2/6.png",
      bio: "Leads our commercial cleaning team with expertise in office and retail facility maintenance.",
    },
    {
      name: "Lisa Anderson",
      role: "Eco-Friendly Specialist",
      experience: "7 years",
      image:"/Team2/8.png",
      bio: "Specializes in green cleaning practices and eco-friendly product implementation.",
    },
    {
      name: "James Wilson",
      role: "Equipment Manager",
      experience: "11 years",
      image:"/Team2/7.png",
      bio: "Manages all cleaning equipment and ensures proper maintenance of professional tools.",
    },
    {
      name: "Maria Garcia",
      role: "Residential Team Lead",
      experience: "8 years",
      image:"/Team2/11.png",
      bio: "Leads our residential cleaning team with focus on customer satisfaction and quality service.",
    },
    {
      name: "Thomas Brown",
      role: "Safety Coordinator",
      experience: "6 years",
      image: "/Team2/10.png",
      bio: "Ensures all safety protocols are followed and maintains workplace safety standards.",
    },
    {
      name: "Jennifer Lee",
      role: "Training Coordinator",
      experience: "9 years",
      image:"/Team2/9.png",
      bio: "Develops and implements training programs for all cleaning professionals.",
    },
    {
      name: "Christopher Davis",
      role: "Quality Control Specialist",
      experience: "7 years",
      image: "/Team2/12.png",
      bio: "Conducts quality inspections and ensures service standards are consistently met.",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around providing exceptional service to our clients.",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "26 years of consistent, dependable service has built lasting relationships with our clients.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for perfection in every cleaning service, maintaining the highest standards.",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "We use eco-friendly products and practices to protect your family and the environment.",
    },
  ]

  const milestones = [
    { year: "1998", event: "HouseKeeping PRO founded in Barrie, Ontario" },
    { year: "2002", event: "Expanded services to Orillia and surrounding areas" },
    { year: "2008", event: "Reached 500 satisfied clients milestone" },
    { year: "2015", event: "Launched commercial and Airbnb cleaning services" },
    { year: "2020", event: "Introduced eco-friendly cleaning options" },
    { year: "2024", event: "Celebrating 26 years with 1,200+ happy clients" },
  ]

  const totalTeamPages = Math.ceil(teamMembers.length / teamMembersPerPage)
  const currentTeamMembers = teamMembers.slice(
    currentTeamPage * teamMembersPerPage,
    (currentTeamPage + 1) * teamMembersPerPage
  )

  const nextTeamPage = () => {
    setCurrentTeamPage((prev) => (prev + 1) % totalTeamPages)
  }

  const prevTeamPage = () => {
    setCurrentTeamPage((prev) => (prev - 1 + totalTeamPages) % totalTeamPages)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              About HouseKeeping PRO
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              26 years of trusted cleaning services across Simcoe County. Canadian owned and operated since 1998.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E71] mb-4 sm:mb-6">
                Our Story
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Founded in 1998 by Margaret Thompson, HouseKeeping PRO began as a small residential cleaning service in
                  Barrie, Ontario. With a commitment to excellence and customer satisfaction, we've grown to become Simcoe
                  County's most trusted cleaning service provider.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Over the past 26 years, we've expanded our services to include commercial cleaning, Airbnb turnover
                  services, and eco-friendly cleaning options. Our team of professional cleaners serves over 1,200 clients
                  across Barrie, Orillia, Midland, and surrounding communities.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  What sets us apart is our unwavering commitment to quality, reliability, and customer service. Every
                  member of our team is fully trained, insured, and dedicated to exceeding your expectations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <Button className="bg-[#012E71] hover:bg-blue-800 text-white text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 h-auto">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Book Our Services
                </Button>
                <Button
                  variant="outline"
                  className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 h-auto"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <video
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-2xl"
                  controls
                  poster="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop"
                >
                  <source src="https://res.cloudinary.com/dterqp7lk/video/upload/v1754918781/review_ajpjqt.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-02%20at%2020.55.30_d31d3cc8.jpg-ltfbL4qxNsZJM19pu8YgBkJBiRmUlE.jpeg"
                    alt="HouseKeeping PRO Logo"
                    width={100}
                    height={40}
                    className="h-8 sm:h-10 w-auto bg-white/90 p-1.5 sm:p-2 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
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
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E71] mb-3 sm:mb-4">
              Our Values
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do at HouseKeeping PRO
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-md"
              >
                <value.icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Pagination */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E71] mb-3 sm:mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
              The experienced professionals who lead HouseKeeping PRO's commitment to excellence
            </p>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {currentTeamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg?height=300&width=300"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-48 sm:h-56 lg:h-96 object-fitwidth group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012E71]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center mb-2">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <span className="text-xs sm:text-sm font-medium">{member.experience}</span>
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-xs sm:text-sm opacity-90">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#012E71] mb-1">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalTeamPages > 1 && (
            <div className="flex items-center justify-center space-x-4">
              <Button
                onClick={prevTeamPage}
                variant="outline"
                size="sm"
                className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <div className="flex space-x-2">
                {Array.from({ length: totalTeamPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTeamPage(i)}
                    className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                      i === currentTeamPage
                        ? 'bg-[#012E71] text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <Button
                onClick={nextTeamPage}
                variant="outline"
                size="sm"
                className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}

          {/* Team Photos Section */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop"
                  alt="Residential Cleaning Team"
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <div className="bg-white/90 px-2 sm:px-3 py-1 rounded-full">
                    <span className="text-[#012E71] font-semibold text-xs sm:text-sm">Residential Team</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-2 sm:mb-3">
                  Our Residential Cleaning Specialists
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our residential team members wear professional blue HouseKeeping PRO polo shirts and are equipped with
                  the latest cleaning tools and eco-friendly products to ensure your home is spotless.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                  alt="Commercial Cleaning Team"
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <div className="bg-white/90 px-2 sm:px-3 py-1 rounded-full">
                    <span className="text-[#012E71] font-semibold text-xs sm:text-sm">Commercial Team</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-2 sm:mb-3">
                  Our Commercial Cleaning Experts
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our commercial team specializes in office buildings, retail spaces, and business facilities. They wear
                  navy HouseKeeping PRO uniforms and follow strict protocols for professional environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E71] mb-3 sm:mb-4">
              Our Journey
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
              26 years of growth, innovation, and service excellence
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start sm:items-center">
                  <div className="flex-shrink-0 w-16 sm:w-20 lg:w-24 text-left sm:text-right mr-4 sm:mr-6 lg:mr-8">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#012E71]">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 bg-[#012E71] rounded-full mr-4 sm:mr-6 lg:mr-8 mt-1 sm:mt-0"></div>
                  <div className="flex-grow">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Insurance */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E71] mb-3 sm:mb-4">
              Fully Licensed & Insured
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
              Your peace of mind is our priority. We maintain comprehensive insurance and certifications.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
              <Shield className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mx-auto mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-3 sm:mb-4">Fully Insured</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Comprehensive liability and bonding insurance for complete protection.
              </p>
            </Card>
            <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
              <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mx-auto mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-3 sm:mb-4">Background Checked</h3>
              <p className="text-sm sm:text-base text-gray-600">
                All team members undergo thorough background checks and training.
              </p>
            </Card>
            <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <Award className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#012E71] mx-auto mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-3 sm:mb-4">Certified Professionals</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Industry-certified cleaning professionals with ongoing training.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Experience the HouseKeeping PRO Difference
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              Join 1,200+ satisfied clients who trust us with their cleaning needs. Experience 26 years of professional
              service excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#012E71] hover:bg-gray-100 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 h-auto"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Book Your Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 h-auto bg-transparent"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call 
 (647) 534-8050

              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
