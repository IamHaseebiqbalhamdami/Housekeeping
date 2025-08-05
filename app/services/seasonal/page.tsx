"use client";
import Riview from "@/components/comman/Riview";
import Pricing from "@/components/comman/Pricing";
import Faqs from "@/components/comman/Faqs";
import Hero from "@/components/comman/Hero";
import Whyseasonal from "@/components/comman/Whyseasonal";
import Calltoaction from "@/components/comman/Calltoaction";
import Tips from "@/components/comman/Tips";
import Spaicaladsons from "@/components/comman/Spaicaladsons";
import SeasonalBenefits from "@/components/comman/Seasonalpackeges";
export default function SeasonalCleaningServicesPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
    

      {/* Hero Section */}
      <Hero/>
      {/* Why Seasonal Cleaning */}
      <Whyseasonal/>

      {/* Seasonal Packages */}
     
<SeasonalBenefits/>
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
