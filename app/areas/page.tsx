"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Users, Calendar } from "lucide-react"
import SharedHeader from "@/components/shared-header"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function AreasPage() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:6475348050";
    } else {
      router.push("/contact");
    }
  }
  const serviceAreas = [
    {
      city: "Barrie",
      region: "Central Simcoe",
      description: "Our main hub serving the heart of Simcoe County with comprehensive cleaning services.",
      serviceYears: 26,
      clients: 500,
      image: "/images/centennial-park-beach-playground-barrie.jpg.webp",
      services: ["Residential", "Commercial", "Airbnb", "Office", "Deep Cleaning"],
      href: "/areas/barrie",
    },
    {
      city: "Orillia",
      region: "North Simcoe",
      description: "Serving the beautiful lakeside community with reliable cleaning services since 2002.",
      serviceYears: 22,
      clients: 300,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      services: ["Residential", "Airbnb", "Seasonal Properties"],
      href: "/areas/orillia",
    },
    {
      city: "Midland",
      region: "Georgian Bay",
      description: "Professional cleaning services for Midland and Penetanguishene communities.",
      serviceYears: 20,
      clients: 250,
      image: "/images/midland.jpeg",
      services: ["Residential", "Commercial", "Seasonal"],
      href: "/areas/midland",
    },
    {
      city: "Oro-Medonte",
      region: "Rural Simcoe",
      description: "Serving rural properties and estates with specialized cleaning solutions.",
      serviceYears: 18,
      clients: 180,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      services: ["Estate Cleaning", "Rural Properties", "Seasonal"],
      href: "/areas/oro-medonte",
    },
    {
      city: "Innisfil",
      region: "South Simcoe",
      description: "Growing community with modern homes requiring professional cleaning services.",
      serviceYears: 19,
      clients: 220,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      services: ["Residential", "New Construction", "Move-in/out"],
      href: "/areas/innisfil",
    },
    {
      city: "Springwater",
      region: "West Simcoe",
      description: "Rural and suburban cleaning services for the Springwater township.",
      serviceYears: 17,
      clients: 160,
      image: "/images/springwate.jpg",
      services: ["Residential", "Rural Properties", "Seasonal"],
      href: "/areas/springwater",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Service Areas</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional cleaning services across all of Simcoe County. From Barrie to Georgian Bay, we're your
              trusted local cleaning professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Where We Serve</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              26 years of trusted service across Simcoe County. Each community receives personalized attention and
              professional cleaning excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.city}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012E71]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{area.city}</h3>
                    <p className="text-sm opacity-90">{area.region}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                      {area.serviceYears} years
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-[#012E71]" />
                      {area.clients}+ satisfied clients
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-[#012E71]" />
                      {area.serviceYears} years of service
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#012E71] mb-2">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-[#012E71] px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link href={'/contact'}>
                    <Button className="bg-[#012E71] hover:bg-blue-800 text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#012E71] mb-8">Complete Simcoe County Coverage</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h3 className="font-bold text-[#012E71] mb-4">Central Simcoe</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Barrie (Main Hub)</li>
                    <li>• Oro-Medonte</li>
                    <li>• Springwater</li>
                    <li>• Innisfil</li>
                    <li>• Angus</li>
                    <li>• Midhurst</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#012E71] mb-4">North Simcoe</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Orillia</li>
                    <li>• Midland</li>
                    <li>• Penetanguishene</li>
                    <li>• Tiny</li>
                    <li>• Tay</li>
                    <li>• Severn</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#012E71] mb-4">Surrounding Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Wasaga Beach</li>
                    <li>• Collingwood</li>
                    <li>• Elmvale</li>
                    <li>• Port McNicoll</li>
                    <li>• Creemore</li>
                    <li>• Alliston</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Book in Your Area?</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience professional cleaning services backed by 26 years of excellence across Simcoe County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={'/contact'}>
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Area
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
    </div>
  )
}
