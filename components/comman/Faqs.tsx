import React from 'react'

function Faqs() {
  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#012E71] text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">
            How often should I book seasonal cleaning?
          </h3>
          <p className="text-gray-600">
            We recommend at least 4 times a year to align with seasonal
            changes.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Do you bring your own supplies?
          </h3>
          <p className="text-gray-600">
            Yes, we bring eco-friendly products and all necessary tools.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Faqs
