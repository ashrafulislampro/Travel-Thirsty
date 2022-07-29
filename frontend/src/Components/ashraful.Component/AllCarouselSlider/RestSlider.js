import React from "react";
import Carousel from "react-elastic-carousel";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgEreader } from "react-icons/cg";
import ReactStars from "react-rating-stars-component";
import "../../../../src/App.css";
const RestSlider = ({ Data }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 4, itemsToScroll: 1 },
  ];
  return (
    <Carousel
      enableAutoPlay
      autoPlaySpeed={2500}
      loop={Infinity}
      breakPoints={breakPoints}
    >
      {Data.length &&
        Data.map((data, index) => (
          <div
            key={index}
            className="min-w-xs m-3 group h-full bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="relative">
              <p className="absolute h-full w-full insert-0 flex justify-center items-center">
                <span className=" group-hover:bg-white  opacity-0 group-hover:opacity-100 p-5 rounded-full ">
                  <BiSearchAlt2 className="" />
                </span>
              </p>
              <a href="/#">
                <img
                  className="rounded-t-lg h-64 w-full"
                  src={data.img1}
                  alt=""
                />
              </a>
            </div>
            <div className="divide-y p-2">
              <div className="p-3">
                <div className="flex justify-between">
                  <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                </div>
                <p className="flex items-center py-2">
                  <span
                    className="-py-10"
                    style={{ fontSize: "5px !important" }}
                  >
                    <ReactStars size="20" edit={false} value={data.rate} />
                  </span>
                  <span className="ml-2">{data.rate} Rating</span>
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
              <div className="flex justify-between px-5 pt-1">
                <p className="flex items-center">
                  <span className="mr-1 ">
                    <CgEreader />
                  </span>
                  {data.area}
                </p>
                <button className="bg-green-400 px-3 p-1 text-white rounded">
                  Discover
                </button>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
};

export default RestSlider;
