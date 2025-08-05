import { CheckCircle } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function Pricing() {
  return (
    <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-[#012E71] mb-6">
        Seasonal Subscription Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Basic", price: "$199/season", features: ["1 seasonal visit", "Standard cleaning", "Eco-friendly products"] },
          { name: "Premium", price: "$299/season", features: ["2 seasonal visits", "Deep cleaning", "Carpet & window add-ons"] },
          { name: "Elite", price: "$499/year", features: ["4 seasonal visits", "Priority booking", "All add-ons included"] }
        ].map((plan, idx) => (
          <div key={idx} className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-2xl font-bold text-[#012E71] mb-2">{plan.name}</h3>
            <p className="text-xl text-gray-700 mb-4">{plan.price}</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-[#012E71] text-white hover:bg-blue-800">Choose Plan</Button>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Pricing
