import React from "react";
import { Link } from "react-router-dom";
import BannerHeader from "../BannerHeader";

const HotelHeader = () => {
  return (
    <div className="bg-gradient-to-tr from-purple-400 to-green-700 h-screen w-full bg-cover bg-center">
      <img
        src="https://wallpaperaccess.com/full/1388994.jpg"
        alt=""
        className="h-screen w-full object-cover absolute mix-blend-overlay"
      />
      <div className="breadcrumbs flex flex-col justify-center items-center h-screen w-full text-white text-2xl font-bold">
        <ul className="flex-row">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/tour">Tour</Link>
          </li>
          <li className="">
            <Link to="/hotel">Hotel</Link>
          </li>
        </ul>
        <div className="flex-col py-5">
          <h3 className="text-8xl font-bold">Hotel</h3>
        </div>
      </div>
      <BannerHeader />
    </div>
  );
};

export default HotelHeader;
