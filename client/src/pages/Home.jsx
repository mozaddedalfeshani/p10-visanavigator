import React from "react";
import SliderShow from "../components/Home/CoverflowSlider";
import LatestCards from "../components/Home/LatestCards";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <SliderShow />
        <LatestCards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
