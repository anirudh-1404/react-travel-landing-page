import React from "react";

const Hero = () => {
  return (
    <section className="pt-36 pb-16 bg-gradient-to-b from-[#0a0a0a] via-[#0c0c0c] to-black relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Make Your <span className="text-orange-500">Trip</span> <br />
            Truly Memorable
          </h1>

          <p className="text-gray-400 text-lg max-w-lg">
            Explore the world with exclusive travel packages, hand-picked
            destinations and unforgettable experiences.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-orange-500/30">
              Explore Now
            </button>

            <button className="border border-white/30 hover:border-orange-500 hover:text-orange-400 transition text-white px-8 py-3 rounded-full font-medium">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end relative">
          <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel"
            className="relative w-full max-w-md object-contain drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
