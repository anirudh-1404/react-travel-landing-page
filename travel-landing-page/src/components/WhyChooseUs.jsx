import React from "react";
import { BadgeCheck, Headphones, Wallet, MapPin } from "lucide-react";

const features = [
  {
    title: "Best Price Guarantee",
    desc: "Affordable travel packages with no hidden costs.",
    icon: <Wallet size={22} />,
  },
  {
    title: "Expert Travel Guides",
    desc: "Experienced guides to make your journey memorable.",
    icon: <MapPin size={22} />,
  },
  {
    title: "Easy & Secure Booking",
    desc: "Simple booking process with complete security.",
    icon: <BadgeCheck size={22} />,
  },
  {
    title: "24/7 Customer Support",
    desc: "We are always here to assist you anytime.",
    icon: <Headphones size={22} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center md:justify-start">
          <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-2xl" />
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Why choose us"
            className="relative w-full max-w-md rounded-2xl object-cover drop-shadow-2xl"
          />
        </div>

        <div className="text-white space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
            <p className="text-gray-400 max-w-lg mt-3">
              We provide the best travel experience with trusted services,
              expert guidance and affordable pricing.
            </p>
          </div>

          <div className="space-y-5">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
