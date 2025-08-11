"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Shield, Calendar, Phone, Award, Home, Building2 } from "lucide-react"

export default function WasagaAreaPage() {
  const neighborhoods = [
    "Beach Area 1",
    "Wasaga Beach Provincial Park",
    "Allenwood Beach",
    "Shore Lane",
    "River Road East",
    "Mosley Street",
    "Sunshine Park",
    "Georgian Sands",
  ]

  const reviews = [
    {
      name: "Emma Johnson",
      neighborhood: "Beach Area 1",
      rating: 5,
      text: "Fantastic service! Our cottage was spotless after their deep clean. Perfect for vacation homes in Wasaga.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      serviceImage: "https://images.unsplash.com/photo-1616594039964-76b38e229a3c?w=400&h=300&fit=crop",
    },
    {
      name: "Daniel Parker",
      neighborhood: "Mosley Street",
      rating: 5,
      text: "We book them every summer for our rental property. Always on time and leave the place looking amazing.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      serviceImage: "https://images.unsplash.com/photo-1564540583246-934409427776?w=400&h=300&fit=crop",
    },
    {
      name: "Sophia Lee",
      neighborhood: "Allenwood Beach",
      rating: 5,
      text: "Professional, friendly team! They handled our Airbnb turnover perfectly, even during peak season.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      serviceImage: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a6f6?w=400&h=300&fit=crop",
    },
  ]

  const teamMembers = [
    {
      name: "Olivia Brown",
      role: "Wasaga Area Manager",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Liam Walker",
      role: "Vacation Property Specialist",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop"
            alt="Wasaga Beach view"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cleaning Services in Wasaga Beach</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Trusted cleaning experts for homes, cottages, and vacation rentals in Wasaga Beach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book in Wasaga
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 
  (647) 534-8050

              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">15</div>
              <p className="text-gray-700">Years in Wasaga</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">300+</div>
              <p className="text-gray-700">Vacation Homes</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">99%</div>
              <p className="text-gray-700">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">12+</div>
              <p className="text-gray-700">Expert Cleaners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Neighborhoods We Serve</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Complete coverage across Wasaga Beach for homes, cottages, and rental properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <MapPin className="w-6 h-6 text-[#012E71] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">{neighborhood}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Our Wasaga Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A team of experts who specialize in cleaning vacation homes and cottages in Wasaga.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#012E71]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-[#012E71] mb-2">{member.name}</h3>
                    <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Award className="w-4 h-4 mr-2 text-[#012E71]" />
                      {member.experience} experience
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 mr-2 text-green-500" />
                      Licensed & Insured
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">What Wasaga Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Here’s what vacation homeowners and residents think about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-xl border-0 overflow-hidden">
                <div className="relative">
                  <Image
                    src={review.serviceImage || "/placeholder.svg"}
                    alt="Cleaning service in Wasaga"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
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
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-bold text-[#012E71]">{review.name}</h4>
                      <p className="text-gray-600 text-sm flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {review.neighborhood}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Services in Wasaga Beach</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Expert services for vacation homes, cottages, and full residential cleaning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Home className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#012E71] mb-2">Cottage Cleaning</h3>
              <p className="text-gray-600">Deep cleaning for seasonal homes and vacation cottages.</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Building2 className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#012E71] mb-2">Rental Property Cleaning</h3>
              <p className="text-gray-600">Perfect turnovers for Airbnbs and short-term rentals.</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Home className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#012E71] mb-2">Residential Cleaning</h3>
              <p className="text-gray-600">Keep your Wasaga home fresh and spotless year-round.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book in Wasaga?</h2>
            <p className="text-xl mb-8 opacity-90">
              Trust our experienced team to keep your property vacation-ready all year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Wasaga Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] px-8 py-4 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
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
