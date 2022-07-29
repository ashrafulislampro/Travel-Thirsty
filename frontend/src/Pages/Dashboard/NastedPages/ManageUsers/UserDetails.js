import React from "react";
import { toast } from "react-toastify";
import UseHooks from "../../../../Components/ashraful.Component/UseHooks/UseHooks";

const UserDetails = ({ user, index, refetch }) => {
  const { _id, email, role } = user;
  const { baseURL } = UseHooks();

  const handleMakeAdmin = () => {
    fetch(`${baseURL}/api/v1/admin/make-user-admin?email=${email}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const { modifiedCount } = data?.data;
        if (modifiedCount > 0) {
          toast("Successfully Make an Admin");
          refetch();
        }
      });
  };

  const handleRemoveAdmin = () => {
    fetch(`${baseURL}/api/v1/admin/remove-admin?email=${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { deletedCount } = data?.data;
        if (deletedCount > 0) {
          toast("Successfully Remove admin");
          refetch();
        }
      });
  };

  const handleRemoveUser = (id) => {
    fetch(`${baseURL}/api/v1/admin/delete-one-user?id=${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { deletedCount } = data?.data;
        if (deletedCount > 0) {
          toast("Successfully Remove an User");
          refetch();
        }
      });
  };

  return (
    <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block font-semibold lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          Index
        </span>
        {index + 1}
      </td>
      <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          Email
        </span>
        {email}
      </td>
      <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          Status
        </span>
        {role === "admin" ? (
          <div class="badge text-blue-700 badge-outline">Admin</div>
        ) : (
          <button
            onClick={handleMakeAdmin}
            class="btn btn-xs btn-outline btn-primary"
          >
            Make Admin
          </button>
        )}
      </td>
      <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          Actions
        </span>
        {role !== "admin" ? (
          <button
            onClick={() => handleRemoveUser(_id)}
            class="btn btn-xs btn-outline btn-natural"
          >
            Remove User
          </button>
        ) : (
          <button
            onClick={handleRemoveAdmin}
            class="btn btn-xs btn-outline btn-secondary"
          >
            Remove Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserDetails;
