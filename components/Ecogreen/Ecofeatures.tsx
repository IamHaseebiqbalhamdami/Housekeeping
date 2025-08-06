"use client"
import { Leaf, CheckCircle, Recycle } from "lucide-react"

export default function EcoFeatures() {
  const features = [
    { icon: <Leaf className="w-8 h-8 text-green-600" />, title: "Renewable Energy", desc: "100% green energy solutions for homes and businesses." },
    { icon: <Recycle className="w-8 h-8 text-green-600" />, title: "Zero Waste", desc: "Practices that reduce waste and promote recycling." },
    { icon: <CheckCircle className="w-8 h-8 text-green-600" />, title: "Eco Materials", desc: "Using sustainable and eco-friendly materials in all projects." },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Eco-Friendly Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
