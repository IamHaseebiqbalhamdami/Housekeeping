"use client"
import { Button } from "@/components/ui/button"
import { Building2, CheckCircle, Calendar, Phone } from "lucide-react"
import Hero from "@/components/office/Hero"
import ComingSoon from "@/components/office/ComingSoon"
export default function OfficeServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     <Hero/>
      {/* Coming Soon Content */}
       <ComingSoon/>
    </div>
  )
}
