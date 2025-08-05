"use client";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  Phone,
  Sun,
  Leaf,
  Snowflake,
  Flower,
  CheckCircle,
} from "lucide-react";
import SharedHeader from "@/components/shared-header";
import Seasonalpackeges from "@/components/comman/Seasonalpackeges";
import Spaicaladsonce from "@/components/comman/spaicaladsonce";
import Riview from "@/components/comman/Riview";
import Pricing from "@/components/comman/Pricing";
import Faqs from "@/components/comman/Faqs";
import Hero from "@/components/comman/Hero";
import Whyseasonal from "@/components/comman/Whyseasonal";
import Calltoaction from "@/components/comman/Calltoaction";
import Tips from "@/components/comman/Tips";
import Spaicaladsons from "@/components/comman/Spaicaladsons";

export default function SeasonalCleaningServicesPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
    

      {/* Hero Section */}
      <Hero/>
      {/* Why Seasonal Cleaning */}
      <Whyseasonal/>

      {/* Seasonal Packages */}
     
<Seasonalpackeges/>
      {/* ✅ NEW SECTION: Special Add-Ons */}
     {/* <Spaicaladsonce/> */}
<Spaicaladsons/>
      {/* ✅ NEW SECTION: Pricing Plans */}
     <Pricing/>
<Riview/>
      {/* FAQ */}
<Faqs/>   
<Tips/>   

      {/* Call to Action */}
      <Calltoaction/>
    </div>
  );
}
