import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import UseHooks from "../../../../Components/ashraful.Component/UseHooks/UseHooks";

const AddTour = () => {
  const { register, handleSubmit, reset } = useForm();
  const imageUrlKey = "e738f1d16de6b265746b7f82cc157644";
  const { baseURL } = UseHooks();

  const handleAddTour = (data) => {
    const {
      name,
      price,
      address,
      city,
      day,
      night,
      descriptionOne,
      descriptionTwo,
      facilities,
    } = data;

    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageUrlKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          const tourData = {
            name: name,
            price: parseFloat(price),
            images: [img, img, img],
            address,
            city,
            rating: 5,
            duration: {
              day: parseInt(day),
              night: parseInt(night),
            },
            description: {
              textOne: descriptionOne,
              textTwo: descriptionTwo,
              facilities: facilities.split(","),
            },
          };
          console.log(tourData);
          // Post to database
          fetch(`${baseURL}/api/v1/admin/post-tour-plan`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(tourData),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.success) {
                toast.success(result.message);
                reset();
              }
            });
        }
      });
  };

  return (
    <div className=" text-left h-full w-full lg:pt-20">
      <div className="w-full flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
            Add a Tour Package
          </p>
          <form
            onSubmit={handleSubmit(handleAddTour)}
            className="mb-32"
            action=""
          >
            <div className="md:flex items-center mt-12">
              <div className="w-full flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Package Name
                </label>
                <input
                  {...register("name")}
                  required
                  tabIndex={0}
                  arial-label="Please input name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input Name"
                />
              </div>
            </div>

            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Package Price
                </label>
                <input
                  {...register("price")}
                  required
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input Country"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Package Image
                </label>
                <input
                  {...register("image")}
                  required
                  tabIndex={0}
                  arial-label="Please input name"
                  type="file"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input Image"
                />
              </div>
            </div>

            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Address
                </label>
                <input
                  {...register("address")}
                  required
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input Country"
                />
              </div>

              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  City
                </label>
                <input
                  {...register("city")}
                  required
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input Country"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Day
                </label>
                <input
                  {...register("day")}
                  required
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="number"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input Country"
                />
              </div>

              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Night
                </label>
                <input
                  {...register("night")}
                  required
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="number"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input Country"
                />
              </div>
            </div>

            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Tour Description
                </label>
                <textarea
                  {...register("descriptionOne")}
                  required
                  tabIndex={0}
                  aria-label="leave a message"
                  type="text"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200  resize-none"
                  placeholder="Description One"
                />
                <textarea
                  {...register("descriptionTwo")}
                  required
                  tabIndex={0}
                  aria-label="leave a message"
                  type="text"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200  resize-none"
                  placeholder="Descripion Two"
                />
                <textarea
                  {...register("facilities")}
                  required
                  tabIndex={0}
                  aria-label="leave a message"
                  type="text"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200  resize-none"
                  placeholder="Facilities (Separate with comma)"
                />
              </div>
            </div>

            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-secondary rounded hover:bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none"
              >
                Add Tour Package
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTour;
