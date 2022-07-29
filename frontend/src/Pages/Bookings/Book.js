import React from "react";
import { toast } from "react-toastify";
import Header from "../Header/Header";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import UseHooks from "../../Components/ashraful.Component/UseHooks/UseHooks";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Bookings = () => {
  const [hotelBookings, setHotelBookings] = useState([]);
  const [tourBookings, setTourBookings] = useState([]);
  const { baseURL } = UseHooks();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `${baseURL}/api/v1/user/get-user-bookedHotel?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHotelBookings(data?.data);
      });
  }, [baseURL, user]);

  useEffect(() => {
    const url = `${baseURL}/api/v1/user/get-user-bookedService?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTourBookings(data?.data);
      });
  }, [baseURL, user]);

  const deleteHotelBooking = (id) => {
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`${baseURL}/api/v1/user/delete-hotel-booking?id=${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.data?.deletedCount > 0) {
              toast("Successfully Remove an Hotel");
              const restHotelBookings = hotelBookings.filter(
                (book) => book._id !== id
              );
              setHotelBookings(restHotelBookings);
              // refetch();
            }
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  const deleteTourBooking = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`${baseURL}/api/v1/user/delete-service-booking?id=${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.data?.deletedCount > 0) {
              toast("Successfully Remove an Hotel");
              const restTourBookings = tourBookings.filter(
                (book) => book._id !== id
              );
              setTourBookings(restTourBookings);
              // refetch();
            }
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div className="bg-gradient-to-l from-secondary to-accent text-left h-full w-full lg:pt-20">
      <Header />
      <div className="w-full flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
            Hotel Bookings
          </p>
          <div className="">
            {hotelBookings?.map((book) => {
              console.log(book);
              return (
                <div className="flex justify-between items-center w-full m-2 bg-rose-300 px-3 rounded">
                  <img
                    src={book?.image}
                    alt="Friend"
                    className="w-16 h-16 p-2 rounded-full"
                  />
                  <h3 className="text-xl font-semibold">{book?.name}</h3>
                  <button
                    onClick={() => deleteHotelBooking(book?._id)}
                    className=""
                  >
                    <FontAwesomeIcon
                      className="text-3xl text-green-700 hover:text-purple-700"
                      icon={faClose}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
            Tour Bookings
          </p>
          <div className="">
            {tourBookings?.map((book) => (
              <div className="flex justify-between items-center w-full m-2 bg-rose-300 px-3 rounded">
                <img
                  src={book?.image}
                  alt="Friend"
                  className="w-16 h-16 p-2 rounded-full"
                />
                <h3 className="text-xl font-semibold">{book?.name}</h3>
                <button
                  onClick={() => deleteTourBooking(book?._id)}
                  className=""
                >
                  <FontAwesomeIcon
                    className="text-3xl text-green-700 hover:text-purple-700"
                    icon={faClose}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
