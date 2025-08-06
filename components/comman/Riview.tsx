import { Star } from 'lucide-react';
import React from 'react';

function Riview() {
  const clients = [
    { name:"Tom", img: "/rieviewimages/maleimage.jpeg" },
    {  name:"harry",img: "/rieviewimages/pexels-photo-220453.jpeg" },
    {  name:"Bob",img: "/rieviewimages/pexels-photo-936229.jpeg" },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-[#012E71] mb-8">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {clients.map((client, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow flex flex-col items-center">
            <img
              src={client.img}
          
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <p className="text-gray-600 mb-4 text-center">
              “Amazing service! My house feels brand new every season.”
            </p>
            <div className="flex justify-center text-yellow-500 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5" />
              ))}
            </div>
            <p className="font-semibold">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Riview;
