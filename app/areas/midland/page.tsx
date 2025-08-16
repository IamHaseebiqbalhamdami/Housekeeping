"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Shield, Calendar, Phone, Mail, Award, Home, Building2 } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link"
export default function MidlandAreaPage() {
  const neighborhoods = [
    "Downtown Midland",
    "East End",
    "West End",
    "Little Lake Area",
    "Tiffin",
    "Bayport",
    "Midland Point",
    "Huronia District",
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
      name: "Isabell Knight",
      neighborhood: "Downtown Midland",
      rating: 5,
      text: "HouseKeeping PRO has transformed our condo! They’re incredibly thorough and reliable, and every corner shines. Truly exceptional service.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face", // Female portrait
      serviceImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop", // Elegant condo image
    },
    {
      name: "Sebastian Hale",
      neighborhood: "Midland Point",
      rating: 5,
      text: "Absolutely phenomenal deep cleaning! They left our house spotless and went above and beyond with the appliances and hidden corners. Highly recommend!",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face", // Male portrait
      serviceImage: "https://i8x4h9z9.delivery.rocketcdn.me/wp-content/uploads/2014/10/modern-rustic-black-exterior-house-kerr-ritchie-house-exterior-studio-1.jpg", // Luxury home image
    },
    {
      name: "Aurora Sinclair",
      neighborhood: "East End",
      rating: 5,
      text: "Weekly cleaning for my Airbnb has never been easier. Guests always comment on the sparkling cleanliness, and the team is polite and professional.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face", // Female portrait
      serviceImage: "https://www.designlinesmagazine.com/media/2019/09/Modern-Nest-Designlines-01-930x744.jpg", // Stylish home image
    },
  ]
  

  const teamMembers = [
    {
      name: "Daniel Canales",
      role: "Barrie Area Manager",
      experience: "5 years",
      image: "/Newteam/2.jpg",
    },
    {
      name: "Matt Rudei",
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
            alt="Midland cityscape"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cleaning Services in Midland</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Serving Midland and surrounding communities with premium cleaning services for over 20 years.
              Trusted by homeowners and businesses for reliable and detailed cleaning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={'/contact'}>
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book in Midland
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
              <div className="text-4xl font-bold text-[#012E71] mb-2">20</div>
              <p className="text-gray-700">Years in Midland</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">300+</div>
              <p className="text-gray-700">Regular Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">99%</div>
              <p className="text-gray-700">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">12+</div>
              <p className="text-gray-700">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Neighborhoods We Serve</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Reliable cleaning services across all Midland neighborhoods and nearby areas.
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Our Midland Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experienced professionals dedicated to providing the best cleaning services in Midland.
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

      {/* Client Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">What Midland Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Hear from our satisfied customers in the Midland area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-xl border-0 overflow-hidden">
                <div className="relative">
                  <Image
                    src={review.serviceImage || "/placeholder.svg"}
                    alt="Cleaning service in Midland"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-02%20at%2020.55.30_d31d3cc8.jpg-ltfbL4qxNsZJM19pu8YgBkJBiRmUlE.jpeg"
                      alt="HouseKeeping PRO Logo"
                      width={80}
                      height={30}
                      className="h-6 w-auto bg-white/90 p-1 rounded"
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

      {/* Services Available */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Services Available in Midland</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive cleaning services for homes, businesses, and rentals across Midland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Home className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#012E71] mb-2">Residential Cleaning</h3>
              <p className="text-gray-600">Regular and deep cleaning for homes and apartments</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Building2 className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#012E71] mb-2">Commercial Cleaning</h3>
              <p className="text-gray-600">Detailed cleaning for offices and businesses</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Home className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#012E71] mb-2">Airbnb Cleaning</h3>
              <p className="text-gray-600">Professional turnover cleaning for short-term rentals</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book in Midland?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients in Midland who trust HouseKeeping PRO for their cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href={'/contact'}>
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Midland Service
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
