"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  Building2,
  Sparkles,
  Users,
  Leaf,
  Calendar,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Shield,
  MapPin,
  Mail,
} from "lucide-react"
import SharedHeader from "@/components/shared-header"

// Service Filter Component
function ServiceFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`${
            activeCategory === category
              ? "bg-[#012E71] text-white"
              : "border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

// Service Card Component
function ServiceCard({ service }: { service: any }) {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          width={400}
          height={300}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#012E71]/60 to-transparent group-hover:from-[#012E71]/80 transition-all duration-300" />
        <div className="absolute top-4 left-4">
          <div className="bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg">
            <service.icon className="w-6 h-6 text-[#012E71]" />
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-[#012E71] text-white px-3 py-1 rounded-full text-sm font-medium">{service.category}</div>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-[#012E71] mb-3 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-[#313131] mb-4 leading-relaxed">{service.description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-[#313131]">
            <Clock className="w-4 h-4 mr-2 text-[#012E71]" />
            Duration: {service.duration}
          </div>
          <div className="flex items-center text-sm text-[#313131]">
            <Star className="w-4 h-4 mr-2 text-[#012E71]" />
            Starting at ${service.price}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link href={service.href}>
            <Button
              variant="outline"
              className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
            >
              Learn More
            </Button>
          </Link>
          <Button className="bg-[#012E71] hover:bg-blue-800 text-white">Book Now</Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Feature Highlight Component
function FeatureHighlight({ feature }: { feature: any }) {
  return (
    <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg">
      <div className="bg-[#012E71] text-white p-3 rounded-full flex-shrink-0">
        <feature.icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#012E71] mb-2">{feature.title}</h3>
        <p className="text-[#313131] text-sm">{feature.description}</p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Services")

  const categories = ["All Services", "Residential", "Commercial", "Specialized", "Eco-Friendly"]

  const services = [
    {
      icon: Home,
      title: "Ongoing Cleaning",
      description:
        "Regular weekly, bi-weekly, or monthly cleaning services to maintain your home's cleanliness consistently.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop",
      category: "Residential",
      duration: "2-4 hours",
      price: "89",
      href: "/services/ongoing",
    },
    {
      icon: Sparkles,
      title: "One-Time Deep Cleaning",
      description:
        "Comprehensive deep cleaning service perfect for special occasions, spring cleaning, or first-time service.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      category: "Residential",
      duration: "4-6 hours",
      price: "149",
      href: "/services/one-time",
    },
    {
      icon: Building2,
      title: "Move In/Move Out Cleaning",
      description: "Complete cleaning service for moving transitions, ensuring your new or old home is spotless.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      category: "Specialized",
      duration: "5-8 hours",
      price: "199",
      href: "/services/move-in-out",
    },
    {
      icon: Building2,
      title: "Apartment Cleaning",
      description: "Specialized cleaning services designed for apartments, condos, and smaller living spaces.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      category: "Residential",
      duration: "1-3 hours",
      price: "69",
      href: "/services/apartment",
    },
    {
      icon: Users,
      title: "Cleaning for Seniors",
      description: "Gentle, compassionate cleaning services tailored to the unique needs of senior clients.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      category: "Specialized",
      duration: "2-4 hours",
      price: "79",
      href: "/services/seniors",
    },
    {
      icon: Leaf,
      title: "Green Housekeeping",
      description: "Eco-friendly cleaning using 100% non-toxic, biodegradable products safe for your family and pets.",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
      category: "Eco-Friendly",
      duration: "2-5 hours",
      price: "99",
      href: "/services/green",
    },
    {
      icon: Building2,
      title: "Office Cleaning",
      description:
        "Professional commercial cleaning services for offices, ensuring a clean and productive work environment.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      category: "Commercial",
      duration: "2-6 hours",
      price: "129",
      href: "/services/office",
    },
    {
      icon: Building2,
      title: "Retail Space Cleaning",
      description: "Specialized cleaning for retail stores, boutiques, and customer-facing commercial spaces.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      category: "Commercial",
      duration: "3-8 hours",
      price: "179",
      href: "/services/retail",
    },
    {
      icon: Sparkles,
      title: "Post-Construction Cleanup",
      description:
        "Thorough cleaning service for newly constructed or renovated spaces, removing all construction debris.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      category: "Specialized",
      duration: "6-12 hours",
      price: "299",
      href: "/services/post-construction",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Fully Insured & Bonded",
      description: "Complete protection and peace of mind with comprehensive insurance coverage.",
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee - if you're not happy, we'll make it right.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Options",
      description: "Green cleaning products available for environmentally conscious customers.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book services at times that work best for your schedule, including weekends.",
    },
  ]

  const filteredServices =
    activeCategory === "All Services" ? services : services.filter((service) => service.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SharedHeader currentPage="services" />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Cleaning Services</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional cleaning solutions for every need - from regular home maintenance to specialized commercial
              services across Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
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

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureHighlight key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Choose Your Service</h2>
            <p className="text-xl text-[#313131] max-w-3xl mx-auto">
              From regular home cleaning to specialized commercial services, we have the perfect solution for your
              needs.
            </p>
          </div>

          {/* Service Filter */}
          <ServiceFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-[#313131]">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#012E71] mb-4">Why Choose Our Services?</h2>
              <p className="text-xl text-[#313131]">
                We go above and beyond to ensure every cleaning service exceeds your expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop"
                  alt="Professional cleaning team at work"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#012E71] text-white p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#012E71] mb-2">Professional Training</h3>
                    <p className="text-[#313131]">
                      All team members undergo comprehensive training and certification programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#012E71] text-white p-2 rounded-full flex-shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#012E71] mb-2">Background Checked</h3>
                    <p className="text-[#313131]">
                      Every team member is thoroughly vetted and background checked for your security.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#012E71] text-white p-2 rounded-full flex-shrink-0">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#012E71] mb-2">Quality Assurance</h3>
                    <p className="text-[#313131]">
                      Regular quality checks and customer feedback ensure consistent excellence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#012E71] text-white p-2 rounded-full flex-shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#012E71] mb-2">Eco-Friendly Options</h3>
                    <p className="text-[#313131]">
                      Green cleaning products available for environmentally conscious customers.
                    </p>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Service?</h2>
            <p className="text-xl mb-8 opacity-90">
              Choose from our comprehensive range of cleaning services and experience the HouseKeeping PRO difference
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Online Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] px-8 py-4 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#313131] text-white py-16">
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
                Professional cleaning services across Canada. Your trusted partner for a spotless home.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Residential Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/services/ongoing" className="hover:text-white transition-colors">
                    Ongoing Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/one-time" className="hover:text-white transition-colors">
                    One-Time Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/apartment" className="hover:text-white transition-colors">
                    Apartment Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/move-in-out" className="hover:text-white transition-colors">
                    Move In/Out
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Commercial Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/services/office" className="hover:text-white transition-colors">
                    Office Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/retail" className="hover:text-white transition-colors">
                    Retail Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/post-construction" className="hover:text-white transition-colors">
                    Post-Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services/green" className="hover:text-white transition-colors">
                    Green Cleaning
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@housekeepingpro.ca
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Serving All of Canada
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HouseKeeping PRO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
