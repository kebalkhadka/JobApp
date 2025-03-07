import React from "react";
import Navbar from "./shared/Navbar";
import Herosection from "./Herosection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJob from "./LatestJob";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <CategoryCarousel />
      <LatestJob />
      <Footer />
    </div>
  );
};

export default Home;
