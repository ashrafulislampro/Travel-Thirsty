import { faClose, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { toast } from "react-toastify";
import swal from "sweetalert";
import UseHooks from "../../../../Components/ashraful.Component/UseHooks/UseHooks";
import useHotel from "../../../../hooks/useHotels";

const ManageHotels = () => {
  const [hotels] = useHotel();
  const { baseURL } = UseHooks();
  const EditHotel = (id) => {};

  const deleteHotel = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`${baseURL}/api/v1/admin/delete-hotel?id=${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast("Successfully Remove an Hotel");
              // refetch();
            }
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div className=" h-full w-full">
      <div className="w-full flex items-center justify-center text-left">
        <div className="absolute top-40 bg-base-200 shadow rounded py-12 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700 py-5">
            Manage All Hotel's
          </p>
          <div className="">
            {hotels?.map((hotel) => (
              <div className="flex justify-between items-center w-full m-2 bg-rose-300 px-3 rounded">
                <img
                  src={hotel?.image}
                  alt="Friend"
                  className="w-16 h-16 p-2 rounded-full"
                />
                <h3 className="text-xl font-semibold">{hotel?.name}</h3>
                <div className="w-28 flex justify-around">
                  <button onClick={() => EditHotel(hotel?._id)} className="">
                    <FontAwesomeIcon
                      className="text-3xl text-red-700 hover:text-gray-500"
                      icon={faEdit}
                    />
                  </button>
                  <button onClick={() => deleteHotel(hotel?._id)} className="">
                    <FontAwesomeIcon
                      className="text-3xl text-green-700 hover:text-purple-700"
                      icon={faClose}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageHotels;
