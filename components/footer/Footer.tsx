import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const areasDropdown = [
  { name: "Barrie", href: "/areas/barrie" },
  { name: "Orillia", href: "/areas/orillia" },
  { name: "Midland", href: "/areas/midland" },
  { name: "Oro-Medonte", href: "/areas/oro-medonte" }, // not in dropdown but matching footer
]

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <Image
              src="/images/logo.png"
              alt="HouseKeeping PRO Logo"
              width={180}
              height={60}
              className="h-20 w-auto mb-4 invert"
            />
            <p className="text-gray-300 mb-4">
              Professional commercial cleaning services across Simcoe County for 26 years.
            </p>
          </div>

          {/* Commercial Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Commercial Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Office Cleaning</li>
              <li>Retail Space Cleaning</li>
              <li>Medical Office Cleaning</li>
              <li>Post-Construction</li>
            </ul>
          </div>

          {/* Service Areas with Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              {areasDropdown.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="hover:text-white transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
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

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HouseKeeping PRO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
