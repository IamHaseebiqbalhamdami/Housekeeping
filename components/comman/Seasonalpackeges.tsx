import React from "react";
import { Shield, Clock, Leaf, DollarSign, Users } from "lucide-react";
import { Button } from "../ui/button";

function SeasonalBenefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#012E71] mb-6">
          Benifits of Seasonal Packages?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Enjoy year-round comfort with our seasonal cleaning solutions designed
          to keep your home fresh, healthy, and spotless through every season.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Cost Effective",
              icon: <DollarSign className="w-8 h-8 text-blue-700 mb-4" />,
              desc: "Save more with bundled seasonal packages.",
            },
            {
              title: "Season-Specific Care",
              icon: <Leaf className="w-8 h-8 text-blue-700 mb-4" />,
              desc: "Tailored cleaning for spring, summer, fall, and winter.",
            },
            {
              title: "Trusted Professionals",
              icon: <Users className="w-8 h-8 text-blue-700 mb-4" />,
              desc: "Expert team with years of experience.",
            },
            {
              title: "Eco-Friendly",
              icon: <Shield className="w-8 h-8 text-blue-700 mb-4" />,
              desc: "Safe and sustainable cleaning products.",
            },
            {
              title: "Time-Saving",
              icon: <Clock className="w-8 h-8 text-blue-700 mb-4" />,
              desc: "We handle everything, so you can relax.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center"
            >
              {benefit.icon}
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button className="bg-[#012E71] text-white hover:bg-blue-800">
            Explore Packages
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SeasonalBenefits;
