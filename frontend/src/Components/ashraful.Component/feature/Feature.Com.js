import React from "react";
import Fade from "react-reveal/Fade";
import featureData from "../../../Services/featureData.json";
import ElasticSlider from "../AllCarouselSlider/ElasticSlider";

const Feature = () => {
  return (
    <div className="container px-8 mx-auto py-16">
      <Fade left>
        <div className="">
          <h5 className="text-lg">Featured</h5>
          <h2 className="text-3xl">
            <span className="font-bold">Featured </span>Destination
          </h2>
        </div>
      </Fade>
      <Fade bottom>
        <div className="pt-10">
          <ElasticSlider featureData={featureData} />
        </div>
      </Fade>
    </div>
  );
};

export default Feature;
