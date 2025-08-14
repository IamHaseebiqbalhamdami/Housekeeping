"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Calendar, Phone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";
export default function OrilliaAreaPage() {
  const neighborhoods = [
    "Downtown Orillia",
    "West Orillia",
    "Tudhope Park Area",
    "Lakehead University",
    "Couchiching Beach",
    "Atherley",
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
      name: "David Chen",
      neighborhood: "Downtown Orillia",
      rating: 5,
      text: "As an Airbnb host in Orillia, I depend on HouseKeeping PRO for quick turnaround cleaning. They never disappoint and my guests always comment on how spotless everything is.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      serviceImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      name: "Lisa Anderson",
      neighborhood: "West Orillia",
      rating: 5,
      text: "The team has been cleaning our lakefront home for 4 years. They understand the unique needs of waterfront properties and always do an excellent job.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      serviceImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
    

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
            alt="Orillia lakefront"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cleaning Services in Orillia</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional cleaning services in beautiful Orillia for 22 years. Serving lakefront properties, downtown
              businesses, and residential homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={'/contact'}>
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book in Orillia
              </Button>
              </Link>
              <Button
                size="lg"
                onClick={handleClick}
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
              <div className="text-4xl font-bold text-[#012E71] mb-2">22</div>
              <p className="text-gray-700">Years in Orillia</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">300+</div>
              <p className="text-gray-700">Regular Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">98%</div>
              <p className="text-gray-700">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#012E71] mb-2">8+</div>
              <p className="text-gray-700">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Areas We Serve in Orillia</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional cleaning services throughout Orillia and surrounding lakefront communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
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

      {/* Client Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">What Orillia Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real reviews from satisfied customers throughout Orillia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-xl border-0 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <Image
                      src={review.serviceImage || "/placeholder.svg"}
                      alt="Cleaning service in Orillia"
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
                          {review.neighborhood}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book in Orillia?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join 300+ satisfied clients throughout Orillia who trust HouseKeeping PRO for their cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href={'/contact'}>
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Orillia Service
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
