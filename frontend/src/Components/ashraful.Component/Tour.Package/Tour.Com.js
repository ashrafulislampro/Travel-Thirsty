import axios from "axios";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import TourSlider from "../../ashraful.Component/AllCarouselSlider/TourSlider";
import Loading from "../../Loading";
import UseHooks from "../UseHooks/UseHooks";
const Tour = () => {
  const [tourData, setTourData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { baseURL } = UseHooks();

  /* ----------------------------------------------------------------*/
  /*                       LOAD ALL TOUR DATA                        */
  /* ----------------------------------------------------------------*/
  useEffect(() => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const result = await axios.get(`${baseURL}/api/v1/tour/all-tour-plan`);

        const allTour = await result.data.data;
        console.log(allTour);
        if (allTour) {
          setLoading(false);
        }
        setTourData(allTour);
      }, 1500);
    } catch (error) {
      setTimeout(async () => {
        const result = await axios.get(`${baseURL}/api/v1/tour/all-tour-plan`);

        const allTour = await result.data.data;
        console.log(allTour);
        if (allTour) {
          setLoading(false);
        }
        setTourData(allTour);
      }, 1500);
      console.log(error);
    } finally {
      setTimeout(async () => {
        const result = await axios.get(`${baseURL}/api/v1/tour/all-tour-plan`);

        const allTour = await result.data.data;
        console.log(allTour);
        if (allTour) {
          setLoading(false);
        }
        setTourData(allTour);
      }, 1500);
    }
  }, [baseURL]);

  /* ----------------------------------------------------------------*/
  /*                       FUNCTIONALITY END                         */
  /* ----------------------------------------------------------------*/
  return (
    <div className="bg-[#F8FAFF] py-16">
      <Fade right>
        <div className="container px-8 mx-auto mb-5">
          <h5 className="text-lg">Special Offers</h5>
          <h2 className="text-3xl py-5">
            <span className="font-bold">Top</span> Tour Packages
          </h2>
        </div>
      </Fade>
      {loading && <Loading />}
      <Fade bottom>
        <div className="px-8">
          {tourData.length && <TourSlider Data={tourData} />}
        </div>
      </Fade>
    </div>
  );
};

export default Tour;
