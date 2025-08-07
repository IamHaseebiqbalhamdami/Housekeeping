import { Flower, Leaf, Snowflake, Sun } from 'lucide-react'
import React from 'react'

function Whyseasonal() {
  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-[#012E71] mb-8">
        Why Seasonal Cleaning?
      </h2>
      <p className="text-lg text-gray-700 mb-10">
        Each season brings unique challenges—dust, allergens, and weather
        effects. Our tailored cleaning keeps your home or office fresh
        year-round.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Spring Cleaning", icon: <Flower className="w-10 h-10 text-blue-700 mb-4" />, desc: "Deep refresh to remove winter dust and clutter." },
          { title: "Summer Shine", icon: <Sun className="w-10 h-10 text-blue-700 mb-4" />, desc: "Brighten your space for warm sunny days." },
          { title: "Fall Prep", icon: <Leaf className="w-10 h-10 text-blue-700 mb-4" />, desc: "Clear leaves and prep for colder months." },
          { title: "Winter Cozy", icon: <Snowflake className="w-10 h-10 text-blue-700 mb-4" />, desc: "Get your home ready for holiday gatherings." }
        ].map((item, idx) => (
          <div key={idx} className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center">
            {item.icon}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Whyseasonal
