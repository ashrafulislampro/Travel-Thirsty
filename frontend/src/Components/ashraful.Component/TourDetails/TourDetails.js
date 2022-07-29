import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgEreader } from "react-icons/cg";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import ReactStars from "react-rating-stars-component";
import { Fade, Flip, Reveal, Slide } from "react-reveal";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
// import Carousel from "react-elastic-carousel";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import auth from "../../../firebase.init";
import UseHook from "../../ashraful.Component/UseHooks/UseHooks";
import Loading from "../../Loading";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "34rem",
    boxShadow: "2px 2px 5px gray, -2px -2px 5px gray",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const TourDetails = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const [user] = useAuthState(auth);
  const [singleD, setSingleData] = useState({});
  const [tour_D, setTour_D] = useState([]);
  const [bookingD, setBookingD] = useState({});
  const [text, setText] = useState({});
  const [checkBooking, setCheckBooking] = useState(1);
  const [loading, setLoading] = useState(false);

  const { baseURL } = UseHook();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  /*---------------------------------------------------------*/
  /*                 CAROUSEL BREAKPOINTS                    */
  /*---------------------------------------------------------*/

  /*---------------------------------------------------------*/
  /*                 Load DATA FROM DATABASE                 */
  /*---------------------------------------------------------*/
  useEffect(() => {
    setLoading(true);
    const fetchDataById = () => {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await axios.get(
            `${baseURL}/api/v1/tour/single-tour-plan?id=${id}`
          );
          const singleData = await result.data.data;
          if (singleData) {
            setLoading(false);
          }
          setSingleData(singleData);
          resolve(result);
        } catch (error) {
          console.log(error);
          reject(error);
        }
      });
    };
    fetchDataById();
  }, [id, baseURL]);
  /*---------------------------------------------------------*/
  /*                 HANDLE FORM FUNCTIONALITY               */
  /*---------------------------------------------------------*/
  const onSubmit = (data) => {
    setText(data);
    console.log(data);
    const filtering = singleD?.tour?.filter(
      (item) =>
        (parseInt(item.guest1) === parseInt(data.guest) &&
          parseInt(item.children1) === parseInt(data.children)) ||
        (parseInt(item.guest2) === parseInt(data.guest) &&
          parseInt(item.children2) === parseInt(data.children)) ||
        (parseInt(item.guest3) === parseInt(data.guest) &&
          parseInt(item.children3) === parseInt(data.children))
    );
    setCheckBooking(filtering.length);
    setTour_D(filtering);
    reset();
  };

  /*---------------------------------------------------------*/
  /*              HANDLE MODAL FUNCTIONALITY                 */
  /*---------------------------------------------------------*/

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const onSubmitBooking = (data) => {
    const book_data = {
      user_name: data.user_name,
      user_email: user?.email,
      from_date: data.from_d,
      end_date: data.end_d,
      booking_price: bookingD.price,
    };
    const bookingAllTD = {
      ...bookingD,
      ...book_data,
    };

    reset();
    console.log(bookingAllTD);
    axios
      .post(`${baseURL}/api/v1/user/post-service-booking`, bookingAllTD)
      .then((data) => {
        if (data.status === 200) {
          closeModal();
          swal("Good job!", "Tour Booking Successfully", "success");
          setBookingD({});
          setCheckBooking(0);
        }
      });
  };

  /*---------------------------------------------------------*/
  /*                HANDLE BOOKING FUNCTIONALITY             */
  /*---------------------------------------------------------*/
  const handleBooking = (id) => {
    const filtering = singleD?.tour?.find((item) => item._id === id);
    setBookingD(filtering);
    openModal();
  };
  /* ----------------------------------------------------------------*/
  /*                       FUNCTIONALITY END                         */
  /* ----------------------------------------------------------------*/
  return (
    <div className="p-2 mb-10">
      <div>{loading && <Loading />}</div>

      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={30}
          loop={Infinity}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {singleD?.images &&
            singleD.images.map((data, index) => (
              <SwiperSlide className="mt-2" key={index}>
                <div>
                  <img className="w-screen" src={data} alt="" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div>
        <p data-aos="zoom-in" data-aos-duration="1500" className="text-lg">
          Our Best hotels & Rooms
        </p>
        <h3
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="text-4xl py-3 text-black-600 font-semibold"
        >
          {singleD?.name}
        </h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="flex items-center text-lg"
          >
            <span className="text-red-500 mr-2">
              <CgEreader />
            </span>{" "}
            {singleD?.address}
          </div>

          <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="flex items-center"
          >
            <ReactStars
              size="20"
              activeColor="red"
              color="gray"
              count={5}
              edit={false}
              value={singleD?.rating}
            />
            <span className="ml-2">{singleD?.rating} Rating</span>
          </div>
        </div>
        <div className="py-10">
          <p data-aos="zoom-in-left" data-aos-duration="1500">
            {singleD?.description?.textOne}
          </p>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="grid grid-cols-1 gap-3 my-11 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
          >
            {singleD?.description &&
              singleD?.description?.facilities.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
          </div>
          <p data-aos="zoom-in-right" data-aos-duration="1500">
            {singleD?.description?.textTwo}
          </p>
        </div>
        <div className="my-6">
          <Fade left>
            <h3 className="text-3xl font-semibold">Take A Tour</h3>
          </Fade>
          <Fade right>
            <div className="w-full flex justify-center">
              <ReactPlayer url="https://youtu.be/hVU9Jh_4gT4" />
            </div>
          </Fade>
        </div>

        <Fade right>
          {checkBooking > 0 ? (
            <div>
              {tour_D.length ? (
                <h3 className="text-3xl my-5 font-semibold">
                  Specific Tour Place
                </h3>
              ) : (
                ""
              )}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {tour_D.length &&
                  tour_D.map((item, index) => (
                    <div key={index} className="col-span-1 mb-10 flex flex-col">
                      <div className=" min-w-xs m-3 group h-full bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        <img
                          className="rounded-t-lg h-60 w-full"
                          src={item?.image}
                          alt="coming"
                        />
                        <div className="divide-y p-2">
                          <div className="p-3">
                            <div className="flex justify-between">
                              <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {item.name}
                              </h5>
                              <div className="text-2xl font-semibold text-blue-400">
                                ${item.price}
                              </div>
                            </div>
                            <div className="flex justify-between py-2">
                              <p className="flex items-center">
                                <span
                                  className="-py-10"
                                  style={{ fontSize: "5px !important" }}
                                >
                                  <ReactStars
                                    size="20"
                                    color="gray"
                                    activeColor="red"
                                    edit={false}
                                    value={item?.rating}
                                  />
                                </span>
                                <span className="ml-2">
                                  {item?.rating} Rating
                                </span>
                              </p>
                              <p className=" font-semibold text-blue-400">
                                /night
                              </p>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                              {item?.description}
                            </p>
                          </div>
                          <div className="flex justify-between px-5 py-1">
                            <p className="flex items-center">
                              <span className="mr-1 ">
                                <CgEreader />
                              </span>
                              {item?.city}
                            </p>
                            <button
                              onClick={() => handleBooking(item._id)}
                              className="bg-green-400 px-3 p-1 text-white rounded"
                            >
                              Booking
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div className="my-10 text-3xl text-red-500 text-center">
              No Tour Available
            </div>
          )}
        </Fade>

        <div className={checkBooking > 1 ? "" : "mt-16"}></div>
        <div>
          <Flip left>
            <h3 className="text-3xl font-semibold py-4">
              Check Availablility & Booking
            </h3>
          </Flip>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <Slide left>
                  <div className="mb-6">
                    <input
                      type="text"
                      id="name"
                      defaultValue={user?.displayName}
                      className="shadow-sm bg-gray-50
                   border border-gray-300 text-gray-900
                    text-sm rounded focus:ring-red-400
                     focus:border-red-400 block w-full
                      p-2.5 py-4 dark:bg-gray-700
                       dark:border-gray-600 
                       dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Enter Your Name"
                      {...register("name")}
                      required
                    />
                  </div>
                </Slide>
                <Slide right>
                  <div className="mb-6">
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50
                   border border-gray-300 text-gray-900
                    text-sm rounded focus:ring-red-400
                     focus:border-red-400 block w-full
                      p-2.5 py-4 dark:bg-gray-700
                       dark:border-gray-600 
                       dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Enter Your Email"
                      {...register("email")}
                      required
                      defaultValue={user?.email}
                    />
                  </div>
                </Slide>
                <Slide left>
                  <div className="mb-6 ">
                    <input
                      id="from_date"
                      type="date"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-red-400 focus:border-red-400 block w-full  p-2.5 py-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="From Date"
                      {...register("from_date")}
                    />
                  </div>
                </Slide>
                <Slide right>
                  <div className="mb-6">
                    <input
                      id="end_date"
                      type="date"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-red-400 focus:border-red-400 block w-full  p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="End Date"
                      {...register("end_date")}
                    />
                  </div>
                </Slide>
                <Slide left>
                  <div className="mb-6">
                    <select
                      id="default"
                      {...register("guest")}
                      className="appearance-none border 
                    border-gray-300 text-gray-700 text-sm
                     rounded focus:ring-red-400 focus:border-red-400 block w-full py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option className="hover:bg-red-400" value="default">
                        Guest
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </Slide>
                <Slide right>
                  <div className="mb-6">
                    <select
                      id="default"
                      {...register("children")}
                      className="appearance-none border py-4
                     border-gray-300 text-gray-700 text-sm rounded 
                     focus:ring-red-400 focus:border-red-400 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option className="hover:bg-red-400" value="default">
                        Children
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </Slide>
              </div>
              <Reveal effect="fadeInUp">
                <button
                  type="submit"
                  className="w-full text-white bg-red-500 hover:bg-white
                 hover:text-red-500 border-2 hover:border-red-500
                 focus:ring-4
                 focus:ring-red-500 font-medium rounded 
                 text-sm px-5 py-4 text-center dark:bg-blue-600 
                 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Check Availability
                </button>
              </Reveal>
            </form>

            <div className="my-20">
              <Flip left>
                <h3 className="text-2xl text-gray-800 mb-3 font-semibold pt-5">
                  Reviews && Ratings
                </h3>
              </Flip>
              <Slide bottom>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id="cat-5"
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor="cat-5"
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      <ReactStars
                        size="20"
                        color="gray"
                        activeColor="red"
                        edit={false}
                        value={5}
                      />
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">(5)</div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id="cat-4"
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor="cat-4"
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      <ReactStars
                        size="20"
                        color="gray"
                        activeColor="red"
                        edit={false}
                        value={4}
                      />
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">(4)</div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id="cat-3"
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor="cat-3"
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      <ReactStars
                        size="20"
                        color="gray"
                        activeColor="red"
                        edit={false}
                        value={3}
                      />
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">(3)</div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id="cat-2"
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor="cat-2"
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      <ReactStars
                        size="20"
                        color="gray"
                        activeColor="red"
                        edit={false}
                        value={2}
                      />
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">(2)</div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id="cat-1"
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor="cat-1"
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      <ReactStars
                        size="20"
                        color="gray"
                        activeColor="red"
                        edit={false}
                        value={1}
                      />
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">(1)</div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>

        {/* Modal Start */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex justify-between m-2">
            <div className="text-3xl font-semibold">Booking Form</div>
            <button className="text-3xl" onClick={closeModal}>
              <AiFillCloseCircle />
            </button>
          </div>
          <form className="mx-2 mt-6" onSubmit={handleSubmit(onSubmitBooking)}>
            <input
              type="text"
              className="w-full py-4 my-2 rounded"
              defaultValue={text.name}
              placeholder="type your name"
              {...register("user_name")}
              required
            />
            <input
              type="email"
              className="w-full py-4 my-2 rounded"
              value={user?.email}
              placeholder="type your email"
              {...register("user_email")}
              required
            />
            <input
              type="text"
              className="w-full py-4 my-2 rounded"
              defaultValue={text.from_date}
              placeholder="type from date"
              {...register("from_d")}
              required
            />
            <input
              type="text"
              className="w-full py-4 my-2 rounded"
              defaultValue={text.end_date}
              placeholder="type end date"
              {...register("end_d")}
              required
            />
            <input
              type="number"
              defaultValue={bookingD?.price}
              className="w-full py-4 my-2 rounded"
              placeholder="Enter price"
              {...register("booking_price")}
              required
            />
            <button
              className="w-full py-4 my-2 rounded text-white border-2 bg-red-500 hover:border-red-500 font-semibold "
              type="submit"
            >
              Booking
            </button>
          </form>
        </Modal>
        {/* Modal End */}
      </div>
      <Fade bottom>
        <h2 className="text-4xl mt-20 font-bold">Related Tours</h2>
      </Fade>
    </div>
  );
};

export default TourDetails;
