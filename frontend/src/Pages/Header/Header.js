import React from "react";
import Authentication from "./HeaderComponent/Authentication";
import IntNav from "./HeaderComponent/IntNav";
import NavMobile from "./HeaderComponent/NavMobile";

const Header = () => {
  return (
    <header
      className={`bg-white h-16 flex items-center fixed top-0 w-full text-dark z-50 px-3 transition-all duration-300`}
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
          <IntNav />
        </div>
        <label
          for="my-drawer-2"
          className="btn btn-primary flex w-20 m-2 drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
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

export default Header;
