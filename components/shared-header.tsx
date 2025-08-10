"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Phone, Menu, X } from 'lucide-react'

// ✅ Navigation Dropdown Component
function NavigationDropdown({
  title,
  items,
}: { title: string; items: { name: string; href: string; description: string }[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center px-3 py-2 rounded transition-all ${
          isOpen ? "bg-black text-white" : "text-gray-700 hover:bg-[#012E71] hover:text-white"
        }`}
      >
        {title}
        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 min-w-[20rem] bg-white rounded-lg shadow-xl border border-gray-200 z-50 transition-all duration-200">
          <div className="p-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <ChevronRight className="w-4 h-4 text-[#012E71] mt-1 group-hover:translate-x-1 transition-transform" />
                <div>
                  <div className="font-medium text-[#012E71] group-hover:text-blue-600 mb-1">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ✅ Mobile Expandable Section Component
function MobileExpandableSection({
  title,
  items,
  currentPage,
  onLinkClick,
}: {
  title: string
  items: { name: string; href: string; description: string }[]
  currentPage: string
  onLinkClick: () => void
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full px-3 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
      </button>
      {isExpanded && (
        <div className="pb-2">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-start gap-3 px-6 py-2 text-sm hover:bg-gray-50 transition-colors"
              onClick={onLinkClick}
            >
              <ChevronRight className="w-3 h-3 text-[#012E71] mt-1 flex-shrink-0" />
              <div>
                <div className="font-medium text-[#012E71] mb-1">{item.name}</div>
                <div className="text-xs text-gray-600">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ✅ Main Header Component
export default function SharedHeader({ currentPage }: { currentPage: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const servicesDropdown = [
    {
      name: "Residential Housing",
      href: "/services/residential",
      description: "Complete home cleaning for houses and condos",
    },
    {
      name: "Commercial Properties",
      href: "/services/commercial",
      description: "Office and retail space cleaning",
    },
    {
      name: "Airbnb Cleaning",
      href: "/services/airbnb",
      description: "Turnover cleaning for short-term rentals",
    },
    {
      name: "Office Spaces",
      href: "/services/office",
      description: "Professional office cleaning services",
    },
    {
      name: "Deep Cleaning",
      href: "/services/deep",
      description: "Comprehensive deep cleaning services",
    },
    {
      name: "Seasonal Cleaning",
      href: "/services/seasonal",
      description: "Comprehensive seasonal cleaning services",
    },
    {
      name: "Eco-Friendly",
      href: "/services/eco",
      description: "Green cleaning with safe products",
    },
  ]

  const areasDropdown = [
    {
      name: "Barrie",
      href: "/areas/barrie",
      description: "Our main service hub in Ontario",
    },
    {
      name: "Orillia",
      href: "/areas/orillia",
      description: "Serving Orillia and surrounding area",
    },
    {
      name: "Midland",
      href: "/areas/midland",
      description: "Midland, Penetanguishene, and area",
    },
    {
      name: "Simcoe County",
      href: "/areas/simcoe",
      description: "All communities in Simcoe County",
    },
    {
      name: "Wasaga Beach",
      href: "/areas/wasaga",
      description: "Seasonal and year-round properties",
    },
    {
      name: "All Areas",
      href: "/areas",
      description: "View complete service area map",
    },
    {
      name: "All Locations",
      href: "/areas/location",
      description: "Full list of places we serve",
    },
  ]

  return (
    <header className="bg-white backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="HouseKeeping PRO Logo"
              width={240}
              height={120}
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {[
              { label: "Home", href: "/", key: "home" },
              { label: "About", href: "/about", key: "about" },
              { label: "Pricing", href: "/pricing", key: "pricing" },
              { label: "Blog", href: "/blog", key: "blog" },
              { label: "Reviews", href: "/reviews", key: "reviews" },
              { label: "Contact", href: "/contact", key: "contact" },
            ].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-3 py-2 rounded transition-all ${
                  currentPage === item.key
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-[#012E71] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <NavigationDropdown title="Services" items={servicesDropdown} />
            <NavigationDropdown title="Service Areas" items={areasDropdown} />
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
              >
                <Phone className="w-4 h-4 mr-2" />
                (+1) 6475348050
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-[#012E71] hover:bg-blue-800 text-white">Book Online</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col mt-4">
              {/* Regular Navigation Items */}
              {[
                { label: "Home", href: "/", key: "home" },
                { label: "About", href: "/about", key: "about" },
                { label: "Pricing", href: "/pricing", key: "pricing" },
                { label: "Blog", href: "/blog", key: "blog" },
                { label: "Reviews", href: "/reviews", key: "reviews" },
                { label: "Contact", href: "/contact", key: "contact" },
              ].map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`px-3 py-3 border-b border-gray-100 transition-all ${
                    currentPage === item.key
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Expandable Sections */}
              <MobileExpandableSection
                title="Services"
                items={servicesDropdown}
                currentPage={currentPage}
                onLinkClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileExpandableSection
                title="Service Areas"
                items={areasDropdown}
                currentPage={currentPage}
                onLinkClick={() => setIsMobileMenuOpen(false)}
              />

              {/* CTA Buttons */}
              <div className="flex flex-col space-y-3 p-4 bg-gray-50 mt-4">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (+1) 6475348050
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#012E71] hover:bg-blue-800 text-white">
                    Book Online
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
