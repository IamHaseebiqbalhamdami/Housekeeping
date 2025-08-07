"use client"
import { Button } from "@/components/ui/button"
import { Sparkles, CheckCircle, Calendar, Phone } from "lucide-react"
import SharedHeader from "@/components/shared-header"
import CoomingSoon from "@/components/deep/CoomingSoon"
import Deephero from "@/components/deep/Deephero"
import HowItWorks from "@/components/deep/HowitsWork"
import Pricing from "@/components/comman/Pricing"
import WhyChooseUs from "@/components/deep/Whychoose"
import BeforeAfter from "@/components/deep/BeforeAfter"
import Testimonials from "@/components/deep/Testominals"
import SpecialOffers from "@/components/deep/Spaicaloffers"

export default function DeepCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <Deephero/>
      <HowItWorks/>
      <BeforeAfter/>
      <Testimonials/>
      <Pricing/>
    <SpecialOffers/>
      <WhyChooseUs/>
      {/* Coming Soon Content */}
     <CoomingSoon/>
    </div>
  )
}
