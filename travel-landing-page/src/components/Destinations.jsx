import React from "react";

const destinations = [
  {
    name: "Bali, Indonesia",
    duration: "7 Days & 5 Nights",
    price: "₹12000",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "Paris, France",
    duration: "5 Days & 4 Nights",
    price: "₹50000",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    name: "Switzerland",
    duration: "6 Days & 5 Nights",
    price: "₹30000",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
];

const Destinations = () => {
  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Popular Destinations
          </h2>
          <button className="hidden sm:block text-orange-500 hover:text-orange-400 font-medium">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="bg-[#121212] rounded-2xl overflow-hidden
                         hover:shadow-xl hover:shadow-orange-500/10
                         transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover
                             group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <h4 className="text-white text-xl font-semibold">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-sm">{item.duration}</p>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-orange-500 font-semibold text-lg">
                    {item.price}
                  </span>
                  <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-full text-sm cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
