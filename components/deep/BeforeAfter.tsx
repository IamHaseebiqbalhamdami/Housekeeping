import React from "react";
import Image from "next/image";
function BeforeAfter() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#012E71] mb-10">See the Difference</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
  {/* Before Image */}
  <div className="relative w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg group">
    <img
      src="/images/Bathroom-deep-cleaning.jpg"
      alt="Before Cleaning"
      className="w-full h-[400px] object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
    />
    <p className="absolute bottom-4 left-4 bg-white/90 text-[#012E71] px-4 py-2 font-semibold rounded-lg shadow-md">
      Before
    </p>
  </div>

  {/* After Image */}
  <div className="relative w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg group">
    <img
      src="/images/image.png"
      alt="After Cleaning"
      className="w-full h-[400px] object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
    />
    <p className="absolute bottom-4 left-4 bg-white/90 text-[#012E71] px-4 py-2 font-semibold rounded-lg shadow-md">
      After
    </p>
  </div>
</div>

      </div>
    </section>
  );
}

export default BeforeAfter;
