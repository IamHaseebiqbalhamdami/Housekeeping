import React from "react";
import { Calendar, Truck, Sparkles, Home } from "lucide-react";

function HowItWorks() {
  const steps = [
    { icon: Calendar, title: "Book Your Appointment", desc: "Schedule online or by phone in minutes." },
    { icon: Truck, title: "We Arrive Fully Equipped", desc: "Our team comes prepared with all tools and supplies." },
    { icon: Sparkles, title: "Deep Cleaning Process", desc: "Every corner cleaned, sanitized, and refreshed." },
    { icon: Home, title: "Enjoy Your Clean Space", desc: "Sit back and enjoy a spotless home or office." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#012E71] mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <step.icon className="w-12 h-12 text-[#012E71] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
