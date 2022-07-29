import React, { useEffect, useState } from "react";
import Authentication from "./HeaderComponent/Authentication";
import Nav from "./HeaderComponent/Nav";
import NavMobile from "./HeaderComponent/NavMobile";

const BannerHeader = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-white h-16" : "h-20 text-white"
      } flex items-center fixed top-0 w-full text-dark z-10 px-3 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <a className="flex items-center gap-1" href="/">
          <img
            className="w-12"
            src="https://i.ibb.co/vwKdjV4/icons.png"
            alt=""
          />{" "}
          <span className="text-3xl font-bold">Travel Thirsty</span>
        </a>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Authentication */}
        <div className="">
          <Authentication />
        </div>
        {/* nav mobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default BannerHeader;
