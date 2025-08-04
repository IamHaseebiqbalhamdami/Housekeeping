import React from "react";
import { ShieldCheck, Leaf, Clock, Star } from "lucide-react";

function WhyChooseUs() {
  const features = [
    { icon: ShieldCheck, text: "Certified & Insured Professionals" },
    { icon: Leaf, text: "Eco-Friendly Cleaning Products" },
    { icon: Clock, text: "Flexible Scheduling Options" },
    { icon: Star, text: "100% Satisfaction Guarantee" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#012E71] mb-8">Why Choose Our Deep Cleaning Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <feature.icon className="w-10 h-10 text-[#012E71] mx-auto mb-4" />
              <p className="text-gray-700 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
