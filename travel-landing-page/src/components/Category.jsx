import React from "react";
import { Mountain, Palmtree, Heart, Compass } from "lucide-react";

const categories = [
  {
    title: "Adventure",
    trips: "120+ Trips",
    icon: <Compass size={28} />,
  },
  {
    title: "Beach",
    trips: "80+ Trips",
    icon: <Palmtree size={28} />,
  },
  {
    title: "Honeymoon",
    trips: "60+ Trips",
    icon: <Heart size={28} />,
  },
  {
    title: "Mountain",
    trips: "100+ Trips",
    icon: <Mountain size={28} />,
  },
];

const Category = () => {
  return (
    <section className="bg-[#0a0a0a] pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Explore by Category
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Find your perfect destination by category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group bg-[#121212] rounded-2xl p-8 flex flex-col items-center text-center
                         hover:bg-[#1a1a1a] transition-all duration-300
                         hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div
                className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mb-5
                              text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition"
              >
                {item.icon}
              </div>

              {/* Text */}
              <h4 className="text-white font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-400 text-sm mt-1">{item.trips}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
