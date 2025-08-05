"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Phone, Menu, X } from "lucide-react"

// Navigation Dropdown Component
function NavigationDropdown({
  title,
  items,
}: { title: string; items: { name: string; href: string; description: string }[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center text-gray-700 hover:text-[#012E71] transition-colors">
        {title}
        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 animate-in slide-in-from-top-2">
          <div className="p-4">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="font-medium text-[#012E71] group-hover:text-blue-600 mb-1">{item.name}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function SharedHeader({ currentPage }: { currentPage: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const servicesDropdown = [
    {
      name: "Residential Housing",
      href: "/services/residential",
      description: "Complete home cleaning for houses and condos",
    },
    { name: "Commercial Properties", href: "/services/commercial", description: "Office and retail space cleaning" },
    { name: "Airbnb Cleaning", href: "/services/airbnb", description: "Turnover cleaning for short-term rentals" },
    { name: "Office Spaces", href: "/services/office", description: "Professional office cleaning services" },
    { name: "Deep Cleaning", href: "/services/deep", description: "Comprehensive deep cleaning services" },
    { name: "Seaosonal Cleaning", href: "/services/seasonal", description: "Comprehensive Seaosonal cleaning services" },
    { name: "Eco-Friendly", href: "/services/eco", description: "Green cleaning with safe products" },
  ]

  const areasDropdown = [
    { name: "Barrie", href: "/areas/barrie", description: "Our main service hub in Ontario" },
    { name: "Orillia", href: "/areas/orillia", description: "Serving Orillia and surrounding area" },
    { name: "Midland", href: "/areas/midland", description: "Midland, Penetanguishene, and area" },
    { name: "Simcoe County", href: "/areas/simcoe", description: "All communities in Simcoe County" },
    { name: "Wasaga Beach", href: "/areas/wasaga", description: "Seasonal and year-round properties" },
    { name: "All Areas", href: "/areas", description: "View complete service area map" },
  ]

  return (
    <header className="bg-white backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="HouseKeeping PRO Logo"
                width={240}
                height={120}
                className="h-24 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${currentPage === "home" ? "text-[#012E71] font-medium" : "text-gray-700 hover:text-[#012E71]"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${currentPage === "about" ? "text-[#012E71] font-medium" : "text-gray-700 hover:text-[#012E71]"}`}
            >
              About
            </Link>
            <NavigationDropdown title="Services" items={servicesDropdown} />
            <NavigationDropdown title="Service Areas" items={areasDropdown} />
            <Link
              href="/pricing"
              className={`transition-colors ${currentPage === "pricing" ? "text-[#012E71] font-medium" : "text-gray-700 hover:text-[#012E71]"}`}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className={`transition-colors ${currentPage === "blog" ? "text-[#012E71] font-medium" : "text-gray-700 hover:text-[#012E71]"}`}
            >
              Blog
            </Link>
            <Link
              href="/reviews"
              className={`transition-colors ${currentPage === "reviews" ? "text-[#012E71] font-medium" : "text-gray-700 hover:text-[#012E71]"}`}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${currentPage === "contact" ? "text-[#012E71] font-medium" : "text-gray-700 hover:text-[#012E71]"}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
            >
              <Phone className="w-4 h-4 mr-2" />
              (705) 555-0123
            </Button>
            <Button className="bg-[#012E71] hover:bg-blue-800 text-white">Book Online</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="/" className="text-gray-700 hover:text-[#012E71] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#012E71] transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-[#012E71] transition-colors">
                Services
              </Link>
              <Link href="/areas" className="text-gray-700 hover:text-[#012E71] transition-colors">
                Service Areas
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-[#012E71] transition-colors">
                Pricing
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#012E71] transition-colors">
                Blog
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-[#012E71] transition-colors">
                Reviews
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#012E71] transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (705) 555-0123
                </Button>
                <Button className="bg-[#012E71] hover:bg-blue-800 text-white">Book Online</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
