import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h2 className="text-white text-2xl font-bold tracking-wide">GoTrip</h2>

        <ul className="hidden md:flex items-center space-x-10 text-white font-medium">
          <li className="hover:text-orange-400 transition cursor-pointer">
            Home
          </li>
          <li className="hover:text-orange-400 transition cursor-pointer">
            About
          </li>
          <li className="hover:text-orange-400 transition cursor-pointer">
            Packages
          </li>
          <li className="hover:text-orange-400 transition cursor-pointer">
            Contact
          </li>
        </ul>

        <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-full font-medium shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
