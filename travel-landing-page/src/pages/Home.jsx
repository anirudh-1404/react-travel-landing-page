import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Destinations from "../components/Destinations";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subsscribe";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <Subscribe />
    </>
  );
};

export default Home;
