"use client"
import { Button } from "@/components/ui/button"
import { Leaf, CheckCircle, Calendar, Phone } from "lucide-react"
import SharedHeader from "@/components/shared-header"
import Hero from "@/components/Ecogreen/Hero"
import ComingsoonEco from "@/components/Ecogreen/ComingsoonEco"
import AboutEco from "@/components/Ecogreen/AboutEco"
import EcoFeatures from "@/components/Ecogreen/Ecofeatures"
import EcoTips from "@/components/Ecogreen/Ecotip"
import EcoCTA from "@/components/Ecogreen/Ecocta"
// im
export default function EcoFriendlyServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <Hero/>
      <AboutEco/>
      <EcoFeatures/>
      <EcoTips/>
      <EcoCTA/>
      {/* Coming Soon Content */}
     <ComingsoonEco/>
    </div>
  )
}
