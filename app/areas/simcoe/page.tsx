"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Shield, Calendar, Phone, Award, Home, Building2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function SimcoeAreaPage() {
  const neighborhoods = [
    "Downtown Simcoe",
    "Norfolk Street Area",
    "Talbot Gardens",
    "Woodstock Avenue",
    "Queensway",
    "Norfolk Heights",
    "Hillcrest",
    "West Street",
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
      name: "Aria Langley",
      neighborhood: "Downtown Simcoe",
      rating: 5,
      text: "HouseKeeping PRO has been phenomenal in Simcoe! They always pay attention to the smallest details and leave our home spotless. Highly recommended.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face", // Female portrait
      serviceImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop", // Modern condo/home
    },
    {
      name: "Lucas Montgomery",
      neighborhood: "Norfolk Heights",
      rating: 5,
      text: "We booked a deep cleaning for our house and were completely impressed. Every corner was spotless, and the team was extremely professional.",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=100&h=100&fit=crop&crop=face", // Male portrait
      serviceImage: "https://i8x4h9z9.delivery.rocketcdn.me/wp-content/uploads/2014/10/modern-rustic-black-exterior-house-kerr-ritchie-house-exterior-studio-1.jpg", // Luxury home
    },
    {
      name: "Lillian Hart",
      neighborhood: "Queensway",
      rating: 5,
      text: "Our office uses their cleaning services regularly, and the results are always amazing. Friendly, professional, and thorough every time.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face", // Female portrait
      serviceImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop", // Modern office/home
    },
  ]
  

  const teamMembers = [
    {
      name: "Violanda ibeet",
      role: "Barrie Area Manager",
      experience: "5 years",
      image: "/Newteam/3.jpg",
    },
    {
      name: "skyler mohfit",
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
            src="https://images.unsplash.com/photo-1543342386-1f1a8cfed31f?w=1200&h=800&fit=crop"
            alt="Simcoe cityscape"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cleaning Services in Simcoe</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Serving Simcoe and surrounding areas with reliable, professional cleaning services for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={'/contact'}>

              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book in Simcoe
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
              <div className="text-4xl font-bold text-[#012E71] mb-2">18</div>
              <p className="text-gray-700">Years in Simcoe</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">400+</div>
              <p className="text-gray-700">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">98%</div>
              <p className="text-gray-700">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">14+</div>
              <p className="text-gray-700">Team Members</p>
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
              Comprehensive cleaning services across Simcoe and nearby areas.
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Our Simcoe Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Skilled professionals dedicated to delivering the highest quality cleaning services.
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">What Simcoe Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our clients in Simcoe share their experiences with HouseKeeping PRO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-xl border-0 overflow-hidden">
                <div className="relative">
                  <Image
                    src={review.serviceImage || "/placeholder.svg"}
                    alt="Cleaning service in Simcoe"
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Services Available in Simcoe</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Full range of professional cleaning services for your home or business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Home className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#012E71] mb-2">Residential Cleaning</h3>
              <p className="text-gray-600">Keep your home spotless with our regular and deep cleaning services.</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Building2 className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#012E71] mb-2">Commercial Cleaning</h3>
              <p className="text-gray-600">Comprehensive cleaning for offices and commercial spaces.</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Home className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#012E71] mb-2">Airbnb Cleaning</h3>
              <p className="text-gray-600">Specialized cleaning for short-term rental properties.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book in Simcoe?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients who trust us for their cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href={'/contact'}>
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Simcoe Service
              </Button>
             </Link>
              <Button
                size="lg"
                onClick={handleClick}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] px-8 py-4 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (705) 555-0155
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
