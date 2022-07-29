import React from "react";
import { Fade } from "react-reveal";
import Jump from "react-reveal/Jump";
import { whyUsData } from "../../../Components/Data";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  return (
    <div className="bg-gradient-to-tr from-purple-400 to-green-700 text-center">
      <img
        src="https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w"
        alt=""
        className="object-cover w-full h-full absolute mix-blend-overlay"
      />
      <Fade left>
        <h3 className="text-white font-sans text-2xl pt-16">
          SIMPLY AMAZING PLACES
        </h3>
      </Fade>
      <Jump>
        <h3 className="text-white font-serif text-5xl lg:text-7xl py-16">
          Why Choose Us?
        </h3>
      </Jump>
      <div className="container grid grid-cols-1 gap-5 lg:grid-cols-3 mx-auto -mt-16 ">
        {whyUsData.map((data, index) => (
          <WhyUsCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
