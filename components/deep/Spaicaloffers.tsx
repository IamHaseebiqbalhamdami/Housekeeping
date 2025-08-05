import React from "react";
import { Gift } from "lucide-react";

function SpecialOffers() {
  return (
    <section className="py-16 bg-[#012E71] text-white text-center">
      <div className="container mx-auto px-4">
        <Gift className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-4">Special Offers Just for You!</h2>
        <p className="text-xl mb-6">Get 15% OFF on your first deep cleaning appointment.</p>
        <button className="bg-white text-[#012E71] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Claim Offer Now
        </button>
      </div>
    </section>
  );
}

export default SpecialOffers;
