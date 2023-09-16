import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Sidebar from "../Others/Sidebar";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("🚀 ~ file: Header.jsx:7 ~ Header ~ user:", user);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange-600" : ""
                }>
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange-600" : ""
                }>
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange-600" : ""
                }>
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            className="w-32"
            src="https://i.ibb.co/dbhrWTs/Group-1329.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-8 menu-horizontal px-1 text-2xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600" : ""
              }>
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600" : ""
              }>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600" : ""
              }>
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        {user?.uid ? (
          <>
            <div className="dropdown dropdown-hover dropdown-end">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://i.postimg.cc/kXm44xCH/1b96ad1f07feee81fa83c877a1e350ce.png"
                    }
                    alt=""
                  />
                </div>
              </label>
            </div>
            <button onClick={handleLogOut}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn normal-case btn-md">
              Login
            </Link>
            <Link to="/register" className="btn normal-case btn-md">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
