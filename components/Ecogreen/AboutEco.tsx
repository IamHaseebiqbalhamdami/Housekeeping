"use client"
import { Leaf } from "lucide-react"

export default function AboutEco() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <Leaf className="w-12 h-12 mx-auto text-green-600 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          About Our Eco-Friendly Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are committed to building a sustainable future by offering eco-friendly solutions 
          that reduce environmental impact and promote green living. Our mission is to make 
          sustainability simple and accessible for everyone.
        </p>
      </div>
    </section>
  )
}
