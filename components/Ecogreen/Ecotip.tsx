"use client"
import { Droplets, Recycle, Lightbulb } from "lucide-react"

export default function EcoTips() {
  const tips = [
    { icon: <Lightbulb className="w-8 h-8 text-green-600" />, title: "Switch to LED", desc: "LED bulbs use 80% less energy than traditional lights." },
    { icon: <Droplets className="w-8 h-8 text-green-600" />, title: "Save Water", desc: "Turn off taps when not in use to conserve water." },
    { icon: <Recycle className="w-8 h-8 text-green-600" />, title: "Recycle More", desc: "Separate waste and recycle materials whenever possible." },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Eco Tips</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
