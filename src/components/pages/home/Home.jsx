import React from "react";
import Hero from "./hero/Hero";
import FishingSpots from "./fishing-spots/FishingSpots";
import GearGuide from "./gear-guide/GearGuide";
import Tips from "./tips/Tips";
import Cta from "../../partials/Cta";
import Footer from "../../partials/Footer";
import Navigation from "../../partials/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <FishingSpots />
      <GearGuide />
      <Tips />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
