import React from "react";

function Testimonials() {
  const reviews = [
    { name: "Sarah M.", text: "The team did an amazing job! My home looks brand new.", rating: 5 ,img:"/rieviewimages/sarah.jpeg"},
    { name: "John D.", text: "Very professional and thorough cleaning service.", rating: 4,
    img:"/rieviewimages/image.png"
    },
    { name: "Emily R.", text: "Great attention to detail and friendly staff. looks brand new", rating: 5, img:"/rieviewimages/emily.jpeg"

     },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#012E71] mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <p className="font-semibold text-[#012E71]">{review.name}</p>
              <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
              <img src={review.img} alt="" className="w-16 h-16 rounded-full object-cover mb-4"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
