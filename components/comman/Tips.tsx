"use client";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SharedHeader from "@/components/shared-header";

export default function Tips() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-[#012E71] to-blue-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Seasonal Cleaning Tips & Guides</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Learn expert tips for keeping your home clean and fresh throughout the year.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#012E71] text-center mb-10">
            Expert Tips by Season
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Spring Cleaning",
                tips: ["Dust and vacuum thoroughly", "Wash windows inside and out", "Declutter closets"],
              },
              {
                title: "Summer Cleaning",
                tips: ["Clean air filters", "Wash outdoor furniture", "Disinfect kitchens"],
              },
              {
                title: "Fall Cleaning",
                tips: ["Clean gutters", "Vacuum under heavy furniture", "Check for mold and dampness"],
              },
              {
                title: "Winter Cleaning",
                tips: ["Deep clean carpets", "Sanitize high-touch areas", "Prepare for holiday gatherings"],
              },
            ].map((season, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-[#012E71] mb-4">{season.title}</h3>
                <ul className="space-y-2">
                  {season.tips.map((tip, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
