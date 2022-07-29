import React from "react";
import Fade from "react-reveal/Fade";
import data from "../../../Services/tourData.json";
import RestSlider from "../AllCarouselSlider/RestSlider";
const Restaurant = () => {
  return (
    <div className="container mx-auto py-16">
      <Fade right>
        <div className="mb-5 px-8">
          <h5 className="text-lg">Special Offers</h5>
          <h2 className="text-3xl py-5">
            <span className="font-bold">Popular</span> Restaurants
          </h2>
        </div>
      </Fade>
      <Fade left>
        <div className="px-8">
          <RestSlider Data={data} />
        </div>
      </Fade>
    </div>
  );
};

export default Restaurant;
