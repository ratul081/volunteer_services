import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
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
        <ul className="menu menu-horizontal px-1 text-2xl">
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
              to="/events"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600" : ""
              }>
              Events
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
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        <a className="btn btn-neutral text-lg normal-case">Login</a>
        <a className="btn btn-neutral text-lg normal-case">Sing up</a>
      </div>
    </div>
  );
};

export default Header;

// https://i.ibb.co/hV6McG3/cloud-upload-outline-1.png
// https://i.ibb.co/dbhrWTs/Group-1329.png
// https://i.ibb.co/sP92x79/plus-1.png
// https://i.ibb.co/1sMqgGH/trash-2-9.png
// https://i.ibb.co/v4rWXx0/users-alt-1.png
