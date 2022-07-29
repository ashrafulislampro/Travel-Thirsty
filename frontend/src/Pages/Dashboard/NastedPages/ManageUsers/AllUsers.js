import React from "react";
import { useQuery } from "react-query";
import UseHooks from "../../../../Components/ashraful.Component/UseHooks/UseHooks";
import Loading from "../../../../Components/Loading";
import UserDetails from "./UserDetails";

const AllUsers = () => {
  const { baseURL } = UseHooks();
  const { data, isLoading, refetch } = useQuery("users", () =>
    fetch(`${baseURL}/api/v1/admin/get-all-user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" text-left h-full w-full">
      <div className="w-full flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">
            Total Users: {data.data?.length}
          </p>
          <div className="">
            <table class="border-collapse w-full bg-slate-200">
              <thead>
                <tr className="text-center">
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Index
                  </th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Users
                  </th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Status
                  </th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.data?.map((user, index) => (
                  <UserDetails
                    key={user._id}
                    user={user}
                    index={index}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
