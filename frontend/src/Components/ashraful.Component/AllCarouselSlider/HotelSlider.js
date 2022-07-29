import React from "react";
import Carousel from "react-elastic-carousel";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgEreader } from "react-icons/cg";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import "../../../../src/App.css";

const HotelSlider = ({ Data }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 5 },
  ];
  const navigate = useNavigate();

  const handleButton = (id) => {
    navigate(`/hotel/details/${id}`);
  };
  return (
    <Carousel
      enableAutoPlay
      autoPlaySpeed={2500}
      loop={Infinity}
      // infiniteLoop={true}
      infiniteLoop="true"
      breakPoints={breakPoints}
    >
      {Data.length &&
        Data.map((data, index) => (
          <div
            key={index}
            className="min-w-xs m-3 h-full bg-white group rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="relative">
              <p className="absolute h-full w-full insert-0 flex justify-center items-center">
                <span
                  onClick={() => handleButton(data._id)}
                  className=" group-hover:bg-white cursor-pointer opacity-0 group-hover:opacity-100 p-5 rounded-full "
                >
                  <BiSearchAlt2 className="" />
                </span>
              </p>
              <a href="/#">
                <img
                  className="rounded-t-lg h-64 w-full"
                  src={data?.images[0]}
                  alt=""
                />
              </a>
            </div>

            <div className="divide-y p-2">
              <div className="p-3">
                <div className="flex justify-between">
                  <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {data?.name}
                  </h5>
                  <div className="text-2xl font-semibold text-blue-400">
                    ${data?.price}
                  </div>
                </div>
                <div className="flex justify-between py-2">
                  <p className="flex items-center">
                    <span
                      className="-py-10"
                      style={{ fontSize: "5px !important" }}
                    >
                      <ReactStars size="20" edit={false} value={data?.rating} />
                    </span>
                    <span className="ml-2">{data?.rating} Rating</span>
                  </p>
                  <p className="text-blue-400">/night</p>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data?.description?.facilities[0]}
                  {data?.description?.facilities[1].slice(0, 38)}...
                </p>
              </div>
              <div className="flex justify-between px-5 py-1">
                <p className="flex items-center">
                  <span className="mr-1 ">
                    <CgEreader />
                  </span>
                  {data?.city}
                </p>
                <button
                  onClick={() => handleButton(data._id)}
                  className="bg-green-400 px-3 p-1 text-white rounded"
                >
                  Discover
                </button>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
};

export default HotelSlider;
