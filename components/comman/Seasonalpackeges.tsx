import React from 'react'
import { Button } from '../ui/button'
import { CheckCircle, Flower, Leaf, Snowflake, Sun } from 'lucide-react'

function Seasonalpackeges() {
  return (
    <section className="py-20 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-[#012E71] mb-6">
      Our Seasonal Packages
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Spring Refresh",
          icon: <Flower className="w-8 h-8 text-blue-700 mb-4" />,
          desc: "Deep clean for allergens, windows, and carpets.",
          price: "$149",
          duration: "4-5 Hours",
          details: [
            "Dusting & vacuuming all rooms",
            "Window & glass cleaning",
            "Carpet deep cleaning",
            "Eco-friendly products",
          ],
        },
        {
          title: "Summer Shine",
          icon: <Sun className="w-8 h-8 text-blue-700 mb-4" />,
          desc: "Keep your home cool and dust-free.",
          price: "$159",
          duration: "4 Hours",
          details: [
            "Detailed floor cleaning",
            "Bathroom & kitchen sanitization",
            "Patio/Deck cleanup",
            "Appliance wipe-down",
          ],
        },
        {
          title: "Fall Prep",
          icon: <Leaf className="w-8 h-8 text-blue-700 mb-4" />,
          desc: "Remove fallen leaves and dirt buildup.",
          price: "$169",
          duration: "5 Hours",
          details: [
            "Gutter & exterior cleaning",
            "Deep vacuuming",
            "Upholstery refresh",
            "Mold & mildew removal",
          ],
        },
        {
          title: "Winter Cozy",
          icon: <Snowflake className="w-8 h-8 text-blue-700 mb-4" />,
          desc: "Ready your home for winter festivities.",
          price: "$179",
          duration: "5-6 Hours",
          details: [
            "Fireplace & chimney cleaning",
            "Curtain & carpet wash",
            "Disinfecting high-touch areas",
            "Holiday prep cleaning",
          ],
        },
      ].map((pkg, index) => (
        <div
          key={index}
          className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between"
        >
          {pkg.icon}
          <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
          <p className="text-gray-600 mb-2">{pkg.desc}</p>
          <p className="text-[#012E71] font-bold text-lg mb-2">{pkg.price}</p>
          <p className="text-sm text-gray-500 mb-4">Duration: {pkg.duration}</p>

          <div className="space-y-2 text-left mb-4">
            {pkg.details.slice(0, 2).map((detail, i) => (
              <p key={i} className="text-gray-600 flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                {detail}
              </p>
            ))}
            <p className="text-blue-600 text-sm cursor-pointer hover:underline">
              + View More
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Button className="bg-[#012E71] text-white hover:bg-blue-800">
              Book Now
            </Button>
            <Button
              variant="outline"
              className="border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white"
            >
              View Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default Seasonalpackeges
