"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Award,
  Shield,
  Users,
  Clock,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Heart,
  Leaf,
} from "lucide-react"
import SharedHeader from "@/components/shared-header"
import CompanyStory from "@/components/company-story"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Margaret Thompson",
      role: "Founder & CEO",
      experience: "26 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__91137.png",
      bio: "Founded HouseKeeping PRO in 1998 with a vision to provide exceptional cleaning services across Simcoe County.",
    },
    {
      name: "David Rodriguez",
      role: "CTO & Operations Manager",
      experience: "15 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__91136.png",
      bio: "Oversees daily operations and ensures our high standards are maintained across all service areas.",
    },
    {
      name: "Sarah Wilson",
      role: "Quality Assurance Director",
      experience: "12 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__91135.png",
      bio: "Leads our quality control initiatives and training programs for all cleaning professionals.",
    },
    {
      name: "Michael Chen",
      role: "Customer Relations Manager",
      experience: "8 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__91134.png",
      bio: "Ensures exceptional customer service and manages client relationships across all service areas.",
    },
    {
      name: "Emily Johnson",
      role: "Senior Cleaning Specialist",
      experience: "10 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__91133.png",
      bio: "Expert in deep cleaning and specialized residential services with exceptional attention to detail.",
    },
    {
      name: "Robert Martinez",
      role: "Commercial Team Lead",
      experience: "9 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__91131.png",
      bio: "Leads our commercial cleaning team with expertise in office and retail facility maintenance.",
    },
    {
      name: "Lisa Anderson",
      role: "Eco-Friendly Specialist",
      experience: "7 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__85731.png",
      bio: "Specializes in green cleaning practices and eco-friendly product implementation.",
    },
    {
      name: "James Wilson",
      role: "Equipment Manager",
      experience: "11 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__85730.png",
      bio: "Manages all cleaning equipment and ensures proper maintenance of professional tools.",
    },
    {
      name: "Maria Garcia",
      role: "Residential Team Lead",
      experience: "8 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__85729.png",
      bio: "Leads our residential cleaning team with focus on customer satisfaction and quality service.",
    },
    {
      name: "Thomas Brown",
      role: "Safety Coordinator",
      experience: "6 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__85728.png",
      bio: "Ensures all safety protocols are followed and maintains workplace safety standards.",
    },
    {
      name: "Jennifer Lee",
      role: "Training Coordinator",
      experience: "9 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__85726.png",
      bio: "Develops and implements training programs for all cleaning professionals.",
    },
    {
      name: "Christopher Davis",
      role: "Quality Control Specialist",
      experience: "7 years",
      image: "/team/freepik__the-style-is-candid-image-photography-with-natural__35067.png",
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

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader currentPage="about" />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About HouseKeeping PRO</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              26 years of trusted cleaning services across Simcoe County. Canadian owned and operated since 1998.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 1998 by Margaret Thompson, HouseKeeping PRO began as a small residential cleaning service in
                Barrie, Ontario. With a commitment to excellence and customer satisfaction, we've grown to become Simcoe
                County's most trusted cleaning service provider.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over the past 26 years, we've expanded our services to include commercial cleaning, Airbnb turnover
                services, and eco-friendly cleaning options. Our team of professional cleaners serves over 1,200 clients
                across Barrie, Orillia, Midland, and surrounding communities.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                What sets us apart is our unwavering commitment to quality, reliability, and customer service. Every
                member of our team is fully trained, insured, and dedicated to exceeding your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#012E71] hover:bg-blue-800 text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Our Services
                </Button>
                <Button
                  variant="outline"
                  className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <video
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                  controls
                  poster="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop"
                >
                  <source src="/videos/cleaning-process.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 left-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-02%20at%2020.55.30_d31d3cc8.jpg-ltfbL4qxNsZJM19pu8YgBkJBiRmUlE.jpeg"
                    alt="HouseKeeping PRO Logo"
                    width={100}
                    height={40}
                    className="h-10 w-auto bg-white/90 p-2 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Company Story */}
      <CompanyStory />

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-16 h-16 text-[#012E71] mb-4" />
              <div className="text-4xl font-bold text-[#012E71] mb-2">26</div>
              <p className="text-gray-700 font-medium">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-16 h-16 text-[#012E71] mb-4" />
              <div className="text-4xl font-bold text-[#012E71] mb-2">1,200+</div>
              <p className="text-gray-700 font-medium">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-16 h-16 text-[#012E71] mb-4" />
              <div className="text-4xl font-bold text-[#012E71] mb-2">98%</div>
              <p className="text-gray-700 font-medium">Satisfaction Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-16 h-16 text-[#012E71] mb-4" />
              <div className="text-4xl font-bold text-[#012E71] mb-2">50+</div>
              <p className="text-gray-700 font-medium">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Our Values</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do at HouseKeeping PRO
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-md"
              >
                <value.icon className="w-16 h-16 text-[#012E71] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-[#012E71] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Uniforms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              The experienced professionals who lead HouseKeeping PRO's commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012E71]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center mb-2">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{member.experience}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-[#012E71] mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 font-medium">{member.role}</p>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <p className="text-xs text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Photos Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop"
                  alt="Residential Cleaning Team"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 px-3 py-1 rounded-full">
                    <span className="text-[#012E71] font-semibold text-sm">Residential Team</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#012E71] mb-3">Our Residential Cleaning Specialists</h3>
                <p className="text-gray-600 leading-relaxed">
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
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 px-3 py-1 rounded-full">
                    <span className="text-[#012E71] font-semibold text-sm">Commercial Team</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#012E71] mb-3">Our Commercial Cleaning Experts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our commercial team specializes in office buildings, retail spaces, and business facilities. They wear
                  navy HouseKeeping PRO uniforms and follow strict protocols for professional environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Our Journey</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              26 years of growth, innovation, and service excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <span className="text-2xl font-bold text-[#012E71]">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-[#012E71] rounded-full mr-8"></div>
                  <div className="flex-grow">
                    <p className="text-lg text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Insurance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Fully Licensed & Insured</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Your peace of mind is our priority. We maintain comprehensive insurance and certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <Shield className="w-16 h-16 text-[#012E71] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#012E71] mb-4">Fully Insured</h3>
              <p className="text-gray-600">Comprehensive liability and bonding insurance for complete protection.</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CheckCircle className="w-16 h-16 text-[#012E71] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#012E71] mb-4">Background Checked</h3>
              <p className="text-gray-600">All team members undergo thorough background checks and training.</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <Award className="w-16 h-16 text-[#012E71] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#012E71] mb-4">Certified Professionals</h3>
              <p className="text-gray-600">Industry-certified cleaning professionals with ongoing training.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the HouseKeeping PRO Difference</h2>
            <p className="text-xl mb-8 opacity-90">
              Join 1,200+ satisfied clients who trust us with their cleaning needs. Experience 26 years of professional
              service excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Service
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
                Canadian owned and operated cleaning services serving Simcoe County for 26 years.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/reviews" className="hover:text-white transition-colors">
                    Client Reviews
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    Cleaning Tips Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Residential Cleaning</li>
                <li>Commercial Cleaning</li>
                <li>Airbnb Cleaning</li>
                <li>Deep Cleaning</li>
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
