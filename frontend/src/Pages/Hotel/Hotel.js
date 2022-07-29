import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { Outlet } from "react-router-dom";
import GridProduct from "../../Components/ashraful.Component/AllProducts/GridProduct";
import Sidebar from "../../Components/ashraful.Component/Sidebars/Sidebar";
import UseHooks from "../../Components/ashraful.Component/UseHooks/UseHooks";
import Loading from "../../Components/Loading";
import HotelHeader from "../Header/HeaderBanner/HotelHeader";
const Hotel = () => {
  const [allTour_D, set_allTour_D] = useState([]);
  const [paginatedData, set_paginatedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPg, setSearchPg] = useState(true);
  const [priceErr, setPriceErr] = useState(false);
  const [price, setPrice] = useState(10);

  const [currentPage, set_currentPage] = useState(1);
  const { baseURL } = UseHooks();

  const pageSize = 6;
  /* ----------------------------------------------------------------*/
  /*                      LOAD ALL TOUR DATA START                   */
  /* ----------------------------------------------------------------*/

  useEffect(() => {
    setLoading(true);
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(async () => {
            await axios
              .get(`${baseURL}/api/v1/hotels/get-all-hotel`)
              .then((data) => {
                const allData = data.data.data;
                if (allData) {
                  setLoading(false);
                  setSearchPg(true);
                }

                set_allTour_D(allData);
                set_paginatedData(_(allData).slice(0).take(pageSize).value());
                resolve(allData);
              });
          }, 1500);
        } catch (err) {
          reject(err);
        }
      });
    };
    fetchData();
  }, [baseURL]);

  // useEffect(() => {
  //   setLoading(true);
  //   try {
  //     setTimeout(async () => {
  //       await axios.get(`${baseURL}/hotels/get-all-hotel`).then((data) => {
  //         const allData = data.data.data;
  //         if (allData) {
  //           setLoading(false);
  //           setSearchPg(true);
  //         }
  //         set_allTour_D(allData);
  //         set_paginatedData(_(allData).slice(0).take(pageSize).value());
  //       });
  //     }, 1500);
  //   } catch (error) {
  //     setTimeout(async () => {
  //       await axios.get(`${baseURL}/hotels/get-all-hotel`).then((data) => {
  //         const allData = data.data.data;
  //         if (allData) {
  //           setLoading(false);
  //           setSearchPg(true);
  //         }
  //         set_allTour_D(allData);
  //         set_paginatedData(_(allData).slice(0).take(pageSize).value());
  //       });
  //     }, 1500);
  //     console.log(error);
  //   } finally {
  //     setTimeout(async () => {
  //       await axios.get(`${baseURL}/hotels/get-all-hotel`).then((data) => {
  //         const allData = data.data.data;
  //         if (allData) {
  //           setLoading(false);
  //           setSearchPg(true);
  //         }
  //         set_allTour_D(allData);
  //         set_paginatedData(_(allData).slice(0).take(pageSize).value());
  //       });
  //     }, 1500);
  //   }
  // }, [baseURL]);

  /* ----------------------------------------------------------------*/
  /*                 PRICE RANGE FILTERING FUNCTIONALITY             */
  /* ----------------------------------------------------------------*/
  const handlePrice = (num) => {
    setPrice(num);
  };
  useEffect(() => {
    if (price > 100) {
      const filterPrice = allTour_D.filter(
        (hData) => hData.price < parseInt(price, 10)
      );
      setSearchPg(false);

      set_paginatedData(filterPrice);
    } else {
      set_paginatedData([]);
      setSearchPg(false);
      setPriceErr(true);
    }
  }, [price]);

  /* ----------------------------------------------------------------*/
  /*                  PAGINATION FUNCTIONALITY START                 */
  /* ----------------------------------------------------------------*/
  const pageCount = allTour_D ? Math.ceil(allTour_D.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const handlePagination = (pageno) => {
    set_currentPage(pageno);
    const startIndex = (pageno - 1) * pageSize;
    const paginateData = _(allTour_D).slice(startIndex).take(pageSize).value();
    set_paginatedData(paginateData);
  };

  /* ----------------------------------------------------------------*/
  /*                  SEARCH FILTERING FUNCTIONALITY                 */
  /* ----------------------------------------------------------------*/
  const handleSearchFiltering = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchPg(false);
    }
    const filterData = allTour_D.filter(
      (hData) =>
        hData.city.toLowerCase().includes(value.toLowerCase()) ||
        hData.name.toLowerCase().includes(value.toLowerCase())
    );
    set_paginatedData(filterData);
  };
  const handleFilterNum = (num) => {
    if (num) {
      setSearchPg(false);
    }
    const filterData = allTour_D.filter(
      (hData) => parseInt(hData.rating) === parseInt(num)
    );
    set_paginatedData(filterData);
  };

  /* ----------------------------------------------------------------*/
  /*                SEARCH FILTERING FUNCTIONALITY END               */
  /* ----------------------------------------------------------------*/

  return (
    <div className="">
      <HotelHeader />
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 lg:gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
            <Fade left>
              <div className="md:mb-3">
                <Sidebar
                  handleSearchFiltering={handleSearchFiltering}
                  handleFilterNum={handleFilterNum}
                  allTour_D={allTour_D}
                  handlePrice={handlePrice}
                />
              </div>
            </Fade>
            <div className="col-span-3">
              <Outlet />
              <div>{loading && <Loading />}</div>
              <div>
                <Fade bottom>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {paginatedData.length ? (
                      paginatedData.map((data, index) => (
                        <GridProduct data={data} key={index} />
                      ))
                    ) : (
                      <div className="col-span-3 text-3xl p-2 text-center text-red-500 font-semibold">
                        {priceErr ? (
                          <p>
                            There are no hotels for your Price Range. <br />
                            Please try to increase your price Amount.
                          </p>
                        ) : (
                          <p>
                            There are no hotels for your search keyword. <br />
                            Please try searching with other keywords.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </Fade>
                {searchPg && (
                  <Fade bottom>
                    <div className="my-8 mr-4 float-right">
                      <nav aria-label="Page navigation">
                        <ul className="inline-flex space-x-2">
                          <li>
                            <button className="flex mr-3 items-center justify-center w-10 h-10 text-red-600 transition-colors duration-150 rounded-full focus:shadow-outline ring-1 ring-red-300 bg-red-100 hover:bg-red-500 hover:text-white">
                              <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </li>
                          {pages.map((number, index) => (
                            <li
                              key={index}
                              onClick={() => handlePagination(number)}
                              className="w-10 h-10 flex items-center justify-center 
                      text-red-600 transition-colors
                       duration-150 rounded-full bg-red-100 hover:bg-red-300 hover:text-white focus:shadow-outline ring-1 ring-red-300 "
                            >
                              <button
                                className={
                                  number === currentPage
                                    ? "bg-red-500 w-10 h-10 rounded-full text-white"
                                    : ""
                                }
                              >
                                {number}
                              </button>
                            </li>
                          ))}

                          <li>
                            <button className="flex items-center ml-3 justify-center w-10 h-10 text-red-600 transition-colors duration-150  rounded-full focus:shadow-outline ring-1 ring-red-300 bg-red-100 hover:bg-red-500 hover:text-white">
                              <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Fade>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
