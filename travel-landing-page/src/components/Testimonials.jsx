import React from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Traveler",
    review:
      "Absolutely amazing experience! Everything was well planned and smooth from start to finish.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Verma",
    role: "Explorer",
    review:
      "The destinations, service, and support were top-notch. Highly recommended for stress-free trips.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohan Mehta",
    role: "Adventure Lover",
    review:
      "One of the best travel experiences I’ve ever had. Great pricing and excellent support.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Our Travelers Say
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Real experiences from our happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#121212] rounded-2xl p-8
                         hover:bg-[#1a1a1a] transition
                         hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                “{item.review}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <span className="text-gray-400 text-sm">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
