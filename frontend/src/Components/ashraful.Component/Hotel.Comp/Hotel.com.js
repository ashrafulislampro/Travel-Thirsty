import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import Loading from "../../Loading";
import HotelSlider from "../AllCarouselSlider/HotelSlider";
import UseHooks from "../UseHooks/UseHooks";
const Hotel = () => {
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { baseURL } = UseHooks();
  /* ----------------------------------------------------------------*/
  /*                       LOAD ALL HOTEL DATA                       */
  /* ----------------------------------------------------------------*/
  useEffect(() => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const result = await axios.get(
          `${baseURL}/api/v1/hotels/get-all-hotel`
        );

        const allTour = result.data.data;
        if (allTour) {
          setLoading(false);
        }
        setHotelData(allTour);
      }, 1500);
    } catch (error) {
      setTimeout(async () => {
        const result = await axios.get(
          `${baseURL}/api/v1/hotels/get-all-hotel`
        );

        const allTour = result.data.data;
        if (allTour) {
          setLoading(false);
        }
        setHotelData(allTour);
      }, 1500);
      console.log(error);
    }
  }, [baseURL]);
  /* ----------------------------------------------------------------*/
  /*                       FUNCTIONALITY END                         */
  /* ----------------------------------------------------------------*/
  return (
    <div className="py-16">
      <Fade right>
        <div className="container px-8 mx-auto mb-5">
          <h5 className="text-lg">Special Offers</h5>
          <h2 className="text-3xl py-5">
            <span className="font-bold">Popular</span> Hotels & Rooms
          </h2>
        </div>
      </Fade>
      {loading && <Loading />}
      <Fade left>
        <div className="px-8">
          {hotelData.length && <HotelSlider Data={hotelData} />}
        </div>
      </Fade>
    </div>
  );
};

export default Hotel;
