import React from "react";
import Carousel from "react-elastic-carousel";
import { BiSearchAlt2 } from "react-icons/bi";
import "../../../../src/App.css";
const ElasticSlider = ({ featureData }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, navigator: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <div className="elastic_style">
      <Carousel
        enableAutoPlay
        autoPlaySpeed={2500}
        loop={Infinity}
        breakPoints={breakPoints}
      >
        {featureData.length &&
          featureData.map((data, index) => (
            <div
              key={index}
              className="min-w-xs group m-3 h-[24rem] bg-white shadow-lg dark:bg-gray-800"
            >
              <div className="relative">
                <p className="absolute h-full w-full insert-0 flex justify-center items-center">
                  <span className=" group-hover:bg-white  opacity-0 group-hover:opacity-100 p-5 rounded-full ">
                    <BiSearchAlt2 className="" />
                  </span>
                </p>
                <a href="/#">
                  <img className="h-60 w-80" src={data.img} alt="" />
                </a>
              </div>
              <div className="text-center py-3">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data?.title}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data?.list} listing
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default ElasticSlider;
