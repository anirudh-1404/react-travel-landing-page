import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 
                        rounded-3xl p-12 text-center max-w-3xl mx-auto
                        border border-orange-500/20 relative overflow-hidden"
        >
          {/* subtle glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Get the latest travel deals, tips and updates directly in your
            inbox.
          </p>

          <form className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-5 py-3 rounded-full bg-[#121212]
                         text-white placeholder-gray-400 outline-none
                         border border-white/10 focus:border-orange-500"
            />

            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-600 transition
                         text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-orange-500/30"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
