"use client"
import { Button } from "@/components/ui/button"

export default function EcoCTA() {
  return (
    <section className="py-16 bg-green-600 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Join the Green Revolution</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Be part of the change for a sustainable future. Sign up today to get exclusive eco-friendly tips and updates.
        </p>
        <Button variant="secondary" className="bg-white text-green-600 font-semibold hover:bg-gray-100">
          Get Started
        </Button>
      </div>
    </section>
  )
}
