import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-[#C8E6C9] shadow-sm md:px-[120px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex='-1'
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className="font-semibold text-[#000000e6]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/plants" className="font-semibold text-[#000000e6]">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="font-semibold text-[#000000e6]">
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <img
              src={logoImg}
              className="w-8 h-8 bg-transparent"
              alt="Hero logo image"
            />
          </div>
          <div>
            <Link
              to="/"
              className="text-base font-bold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent"
            >
              GreenNest
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent font-semibold"
                  : "font-semibold text-[#000000e6]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plants"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent font-semibold"
                  : "font-semibold text-[#000000e6]"
              }
            >
              Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent font-semibold"
                  : "font-semibold text-[#000000e6]"
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-[10px]">
        <Link
          to="/auth/login"
          className="btn w-[77px] md:w-[100px] h-40px bg-gradient-to-r from-green-700 to-emerald-500"
        >
          <span className="font-semibold text-white">Login</span>
        </Link>
        <Link
          to="/auth/signup"
          className="btn w-[80px] md:w-[100px] h-40px bg-gradient-to-r from-green-700 to-emerald-500"
        >
          <span className="font-semibold text-white">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
