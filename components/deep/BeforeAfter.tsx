import React from "react";

function BeforeAfter() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#012E71] mb-10">See the Difference</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="relative w-full md:w-1/2">
            <img src="/images/before.jpg" alt="Before Cleaning" className="rounded-lg shadow" />
            <p className="absolute bottom-4 left-4 bg-white text-[#012E71] px-3 py-1 font-semibold rounded">Before</p>
          </div>
          <div className="relative w-full md:w-1/2">
            <img src="/images/after.jpg" alt="After Cleaning" className="rounded-lg shadow" />
            <p className="absolute bottom-4 left-4 bg-white text-[#012E71] px-3 py-1 font-semibold rounded">After</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
