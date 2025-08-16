"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Clock, Star, CheckCircle, Shield, Calendar, Phone, Mail, MapPin, Briefcase } from "lucide-react"
import SharedHeader from "@/components/shared-header"

export default function CommercialServicesPage() {
  const services = [
    {
      title: "Office Cleaning",
      description: "Daily, weekly, or monthly office cleaning to maintain a professional workspace.",
      price: "From $129",
      duration: "2-6 hours",
      features: ["Desk & surface cleaning", "Restroom sanitization", "Floor care", "Trash removal"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    },
    {
      title: "Retail Space Cleaning",
      description: "Specialized cleaning for retail stores, boutiques, and customer-facing spaces.",
      price: "From $179",
      duration: "3-8 hours",
      features: ["Display area cleaning", "Customer area focus", "Window cleaning", "Floor maintenance"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqz8F_XDzdoJ9GG0rqAnCvNncLgNag2uapA&s",
    },
    {
      title: "Medical Office Cleaning",
      description: "Specialized sanitization for medical and dental offices with strict hygiene standards.",
      price: "From $199",
      duration: "2-5 hours",
      features: ["Medical-grade sanitization", "Biohazard disposal", "Waiting area cleaning", "Equipment cleaning"],
      image: "https://www.servicemasterclean.com/images/JCP_ServiceMaster_PostRecovery_0111.2408230846570.jpg",
    },
  ]

  const teamMembers = [
    {
      name: "David Rodriguez",
      role: "Commercial Team Lead",
      experience: "10 years",
      image: "/Newteam/2.jpg",
      uniform: "Navy HouseKeeping PRO polo shirt with company logo",
    },
    {
      name: "Sarah Wilson",
      role: "Senior Commercial Cleaner",
      experience: "7 years",
      image: "/Newteam/3.jpg",
      uniform: "Navy HouseKeeping PRO polo shirt with company logo",
    },
    {
      name: "Linda Grace",
      role: "Quality Supervisor",
      experience: "8 years",
      image: "/Newteam/4.jpg",
      uniform: "Navy HouseKeeping PRO polo shirt with company logo",
    },
  ]
  const reviews = [
    {
      name: "Michael Foster",
      company: "Foster & Associates Law Firm",
      location: "Barrie, ON",
      rating: 5,
      text: "HouseKeeping PRO has been cleaning our law office for 4 years. They're professional, reliable, and work around our schedule perfectly.",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=100&h=100&fit=crop&crop=face", // Male portrait
      serviceImage: "https://images.unsplash.com/photo-1604014237744-df98734b2a4b?w=400&h=300&fit=crop", // Service image
    },
    {
      name: "James Turner",
      company: "Wilson Dental Clinic",
      location: "Orillia, ON",
      rating: 5,
      text: "Their medical office cleaning is exceptional. They understand the strict hygiene requirements and always exceed our expectations.",
      image: "https://images.unsplash.com/photo-1600488995720-5b1e3a3c5a7d?w=100&h=100&fit=crop&crop=face", // Male portrait
      serviceImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267d4?w=400&h=300&fit=crop", // Service image
    },
  ];
  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Commercial Cleaning Services</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional commercial cleaning services for offices, retail spaces, and medical facilities across Simcoe
              County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Commercial Service
              </Button>
              </Link>

{/* Get Free Quote */}
<Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Business Quote
              </Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Our Commercial Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized cleaning solutions for businesses of all sizes across Simcoe County.
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
                    <Building2 className="w-8 h-8 text-white bg-[#012E71]/50 p-1 rounded" />
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
                  <Link href={`/contact`}>
                  <Button className="w-full bg-[#012E71] hover:bg-blue-800 text-white">Get Quote</Button>
                  </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Meet Our Commercial Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our commercial cleaning specialists wear professional HouseKeeping PRO uniforms and are trained for
              business environments.
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
                    className="w-full h-84 object-fitwidth group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012E71]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
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
                    Commercial Certified & Bonded
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">What Our Business Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Real reviews from businesses across Simcoe County</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-xl border-0 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <Image
                      src={review.serviceImage || "/placeholder.svg"}
                      alt="Commercial service in progress"
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
                        <p className="text-gray-600 text-sm">{review.company}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Professional Commercial Cleaning?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join dozens of businesses across Simcoe County who trust HouseKeeping PRO for their commercial cleaning
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Commercial Service
              </Button>
              </Link>

{/* Get Free Quote */}
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
