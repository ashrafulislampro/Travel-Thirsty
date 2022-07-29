import React from "react";
import BannerHeader from "../BannerHeader";

const HomeHeader = () => {
  return (
    <div className="bg-gradient-to-tr from-purple-400 to-green-700 h-screen w-full bg-cover bg-center">
      <img
        src="https://i.ibb.co/L98m2Qc/xhero-1-jpg-pagespeed-ic-DUdgc-Mb-Ja5.webp"
        alt=""
        className="h-screen w-full object-cover absolute mix-blend-overlay"
      />
      <div className="flex justify-left items-center w-5/6 h-screen mx-auto">
        <div className="text-left">
          <h3 className="text-5xl md:text-8xl text-white font-bold font-serif">
            Explore
          </h3>{" "}
          <br />
          <h3 className="text-4xl md:text-7xl text-white font-bold font-mono">
            Your Amazing City
          </h3>
        </div>
      </div>
      <BannerHeader />
    </div>
  );
};

export default HomeHeader;
