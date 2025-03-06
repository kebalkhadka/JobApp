import React from "react";
import Navbar from "./shared/Navbar";
import Herosection from "./Herosection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJob from "./LatestJob";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <CategoryCarousel />
      <LatestJob />
    </div>
  );
};

export default Home;
