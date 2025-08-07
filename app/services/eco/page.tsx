"use client"
import { Button } from "@/components/ui/button"
import { Leaf, CheckCircle, Calendar, Phone } from "lucide-react"
import SharedHeader from "@/components/shared-header"
import Hero from "@/components/Ecogreen/Hero"
import ComingsoonEco from "@/components/Ecogreen/ComingsoonEco"
// im
export default function EcoFriendlyServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <Hero/>

      {/* Coming Soon Content */}
     <ComingsoonEco/>
    </div>
  )
}
