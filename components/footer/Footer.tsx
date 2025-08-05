import React from 'react'
import Image from 'next/image'
import Link from 'next/link'  // ✅ Correct import for navigation links
import { Building2, Home, Leaf, Mail, MapPin, Phone, Shield, Sparkles } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo & Info */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-02%20at%2020.55.30_d31d3cc8.jpg-ltfbL4qxNsZJM19pu8YgBkJBiRmUlE.jpeg"
              alt="HouseKeeping PRO Logo"
              width={180}
              height={60}
              className="h-12 w-auto mb-4"
              priority
            />
            <p className="text-gray-300 mb-4">
              Canadian owned and operated cleaning services serving Simcoe County for 26 years.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm">
                <Shield className="w-4 h-4 mr-2" />
                <span>Fully Insured</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/residential" className="hover:text-white transition-colors">
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="hover:text-white transition-colors">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/airbnb" className="hover:text-white transition-colors">
                  Airbnb Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/deep" className="hover:text-white transition-colors">
                  Deep Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/areas/barrie" className="hover:text-white transition-colors">
                  Barrie
                </Link>
              </li>
              <li>
                <Link href="/areas/orillia" className="hover:text-white transition-colors">
                  Orillia
                </Link>
              </li>
              <li>
                <Link href="/areas/midland" className="hover:text-white transition-colors">
                  Midland
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-white transition-colors">
                  All Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
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
                Simcoe County, Ontario
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HouseKeeping PRO. All rights reserved. | 26 Years Serving Simcoe County</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
