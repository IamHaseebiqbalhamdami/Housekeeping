import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, Home, Leaf, Mail, MapPin, Phone, Shield, Sparkles, Facebook, Instagram } from 'lucide-react'

function Footer() {
  return (
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
            Professional commercial cleaning services across Simcoe County for 26 years.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Commercial Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Office Cleaning</li>
            <li>Retail Space Cleaning</li>
            <li>Medical Office Cleaning</li>
            <li>Post-Construction</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Barrie</li>
            <li>Orillia</li>
            <li>Midland</li>
            <li>Oro-Medonte</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              
  (647) 534-8050

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
  )
}

export default Footer
