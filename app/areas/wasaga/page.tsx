"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Shield, Calendar, Phone, Award, Home, Building2 } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
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
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:6475348050";
    } else {
      router.push("/contact");
    }
  }
  const reviews = [
    {
      name: "Aurora Blake",
      neighborhood: "Beach Area 1",
      rating: 5,
      text: "Absolutely amazing! Our beach cottage has never looked better. The team is punctual, professional, and extremely thorough.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face", // Female portrait
      serviceImage: "https://i.pinimg.com/736x/7b/ae/50/7bae50d98359d8280000bc32ad255928.jpg", // Stylish beach house
    },
    {
      name: "Julian Hayes",
      neighborhood: "Mosley Street",
      rating: 5,
      text: "We’ve used their services for years for our summer rentals. Always spotless results and super friendly staff!",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=100&h=100&fit=crop&crop=face", // Male portrait
      serviceImage: "https://welshdesignstudio.com/wp-content/uploads/black-house-cedar-porch.jpg", // Modern home
    },
    {
      name: "Isla Whitman",
      neighborhood: "Allenwood Beach",
      rating: 5,
      text: "Professional, reliable, and thorough! Perfect for Airbnb turnovers, even during busy weekends. Highly recommend.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face", // Female portrait
      serviceImage: "https://edwardgeorgelondon.com/wp-content/uploads/2024/11/Modern-black-facade-cedar-accents-house-exteriors-with-black-windows-greige-house-exteriors-black-windows-gray-stone-trim-683x1024.webp", // Cozy vacation home
    },
  ]
  
  const teamMembers = [
    {
      name: "Amber Gall",
      role: "Barrie Area Manager",
      experience: "5 years",
      image: "/Newteam/3.jpg",
    },
    {
      name: "Anthony Smith",
      role: "Senior Team Lead",
      experience: "10 years",
      image: "/newteam/6.jpg",
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
             <Link href={'/contact'}>
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book in Wasaga
              </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={handleClick}
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
             <Link href={'/contact'}>
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Wasaga Service
              </Button>
             </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={handleClick}
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
