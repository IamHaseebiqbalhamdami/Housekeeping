"use client"

import { useState, useEffect } from "react"
import { ShieldCheck, Leaf, Clock, Star, X, Phone, Mail } from "lucide-react"
import Link from "next/link"

function WhyChooseUs() {
  const [isOpen, setIsOpen] = useState(false)

  const features = [
    { icon: ShieldCheck, text: "Certified & Insured Professionals" },
    { icon: Leaf, text: "Eco-Friendly Cleaning Products" },
    { icon: Clock, text: "Flexible Scheduling Options" },
    { icon: Star, text: "100% Satisfaction Guarantee" },
  ]

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden" // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#012E71] mb-8">Why Choose Our Deep Cleaning Services?</h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center transform hover:scale-105"
            >
              <feature.icon className="w-10 h-10 text-[#012E71] mb-4" />
              <p className="text-gray-700 font-medium mb-4">{feature.text}</p>

              <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-3 bg-[#012E71] text-white rounded-lg hover:bg-[#02358b] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#012E71] focus:ring-offset-2"
                aria-label={`Choose plan for ${feature.text}`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white p-8 rounded-xl shadow-2xl w-96 relative text-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#012E71] focus:ring-offset-2 rounded-full p-1"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 id="modal-title" className="text-2xl font-bold text-[#012E71] mb-2">
              Get Started Today!
            </h3>
            <p className="text-gray-600 mb-8">
              Ready to experience our premium cleaning services? Get in touch with us now.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="/contact"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-[#012E71] text-white rounded-lg hover:bg-[#02358b] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#012E71] focus:ring-offset-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
              <Link 
                href="/contact"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 text-[#012E71] rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#012E71] focus:ring-offset-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </Link>
              <Link
                href="tel:+1234567890"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: (647) 534-8050
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default WhyChooseUs
