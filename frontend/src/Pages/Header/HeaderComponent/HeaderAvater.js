import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import useToken from "../../../hooks/useToken";

const HeaderAvater = () => {
  const [user] = useAuthState(auth);
  const token = useToken(user?.email);
  const isAdmin = useAdmin(user?.email);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      localStorage.removeItem("accessToken");
      if (!token) {
        navigate("/signin");
        toast.success("User SignOut Successfully", { position: "top-left" });
      }
    });
  };
  return (
    <div className="dropdown dropdown-end">
      <div className="flex justify-center items-center gap-2">
        <div className="badge badge-primary hidden lg:block badge-outline mx-auto">
          {user?.displayName}
        </div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              className="border-2 border-white rounded-full"
              src="https://placeimg.com/80/80/people"
              alt=""
            />
          </div>
        </label>
      </div>

      <ul
        tabIndex={0}
        className="mt-2 p-2 shadow menu menu-compact dropdown-content gap-2 bg-base-100 text-gray-500 rounded-box w-44"
      >
        <div className="badge badge-natural block lg:hidden badge-outline mx-auto">
          {user?.displayName}
        </div>
        <li>
          <Link to="/profile">Profile</Link>
        </li>

        {isAdmin && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}

        {!isAdmin && (
          <li>
            <Link to="/bookings">Bookings</Link>
          </li>
        )}

        {!isAdmin && <li>{/* <Link to="/addreview">Add Review</Link> */}</li>}

        <li>
          <button onClick={handleSignOut}>SignOut</button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderAvater;
