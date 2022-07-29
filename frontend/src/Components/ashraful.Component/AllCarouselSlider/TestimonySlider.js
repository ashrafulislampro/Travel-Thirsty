import React from "react";
import Carousel from "react-elastic-carousel";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonySlider = ({ Data }) => {
  return (
    <Carousel enableAutoPlay autoPlaySpeed={2500} loop={Infinity}>
      {Data.length &&
        Data.map((data, index) => (
          <div
            key={index}
            className="flex h-60 bg-white rounded-lg border shadow-md  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="columns-1 m-5">
              <div className="w-28 h-28">
                <img className="rounded-full" src={data.img} alt="" />
              </div>
              <div className="flex justify-end ml-4  -mt-7">
                <p className="w-16 h-15 bg-red-500 p-4 rounded-full">
                  <FaQuoteLeft className="text-3xl" />
                </p>
              </div>
            </div>
            <div className="columns-6 p-4 flex flex-col justify-around leading-normal">
              <div>
                <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{data.name}</h2>
                <p className="text-gray-400">Guest from {data.area}</p>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
};

export default TestimonySlider;
