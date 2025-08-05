import { CheckCircle } from 'lucide-react'
import React from 'react'

function Spaicaladsons() {
  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-[#012E71] mb-8">
        Special Add-Ons
      </h2>
      <p className="text-lg text-gray-700 mb-10">
        Enhance your seasonal cleaning with these extra services:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Window Cleaning", "Carpet Shampoo", "Appliance Deep Clean"].map((service, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl shadow flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-gray-700 font-medium">{service}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Spaicaladsons
