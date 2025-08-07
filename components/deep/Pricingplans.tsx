import React from "react";
import { Button } from "../ui/button";

function PricingPlans() {
  const plans = [
    { name: "Basic", price: "$99", features: ["1 Bedroom", "1 Bathroom", "Basic Kitchen"] },
    { name: "Standard", price: "$149", features: ["2 Bedrooms", "2 Bathrooms", "Full Kitchen"] },
    { name: "Premium", price: "$199", features: ["4 Bedrooms", "3 Bathrooms", "Full Kitchen + Windows"] },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#012E71] mb-10">Our Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-[#012E71] mb-6">{plan.price}</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <Button size="lg" className="bg-[#012E71] text-white hover:bg-blue-800">
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
