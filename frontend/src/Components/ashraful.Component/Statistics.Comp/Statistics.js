import React from "react";
import Fade from "react-reveal/Fade";
import Count from "./Count";

// background: linear-gradient(135deg, #2ebdc4 0%, #68e5b2 100%)
const Statistics = () => {
  return (
    <div
      style={{}}
      className="bg-gradient-to-tr from-[#05200e] to-[#1e684b] h-full w-full relative bg-cover bg-no-repeat bg-center "
    >
      <img
        src="https://i.ibb.co/1dpzpQ0/banners.webp"
        alt=""
        className="h-full w-full object-cover absolute mix-blend-overlay"
      />
      <div className="h-full flex py-40 justify-center items-center">
        <div>
          <Fade left>
            <div className="text-center">
              <h2 className="text-6xl text-white mb-6">Some fun facts</h2>
              <p className="text-white">More than 100,000 websites hosted</p>
            </div>
          </Fade>
          <Fade right>
            <div>
              <ul className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-24">
                <li className="text-center">
                  <h4 className="text-6xl text-white mb-6 font-bold">
                    <Count end="1000000"></Count>
                  </h4>
                  <p className="mt-3 text-2xl text-white">Happy Customers</p>
                </li>
                <li className="text-center">
                  <h4 className="text-6xl text-white mb-6 font-bold">
                    <Count end="40000"></Count>
                  </h4>
                  <p className="mt-3 text-2xl text-white">Destination Places</p>
                </li>
                <li className="text-center">
                  <h4 className="text-6xl text-white mb-6 font-bold">
                    <Count end="87000"></Count>
                  </h4>
                  <p className="mt-3 text-2xl text-white">Hotels</p>
                </li>
                <li className="text-center">
                  <h4 className="text-6xl text-white mb-6 font-bold">
                    <Count end="56400"></Count>
                  </h4>
                  <p className="mt-3 text-2xl text-white">Restaurant</p>
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
