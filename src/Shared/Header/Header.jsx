import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import defaultImage from "../../../public/dessert_dandroid.png";
import UseAuth from "../../CustomHook/UseAuth";

const Header = () => {
  const { user, LogOut }= UseAuth();
  // console.log(user)
  const [showName, setShowName] = useState(false);

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };

  const navbar = (
    <>
      <div className="lg:flex list-none gap-4">
        <li>
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/allArt"> AllArt &craft Items</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/addCraftItem">Add CraftItem</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/ craftList"> Craft List</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/update">Update</NavLink>{" "}
        </li>
        <li className="lg:hidden">
          <Link to="/login">
            <button className="bg-sky-400 text-black btn ">Login</button>{" "}
          </Link>
        </li>
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar bg-zinc-200 shadow-md shadow-slate-700">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"> Craft </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="  px-1"> {navbar} </ul>
        </div>
        <div className="navbar-end list-none flex relative">
          {user ? (
            <>
              <div
                className="flex relative items-center gap-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {showName && <h1 className='absolute top-14 bg-gray-600 px-4 rounded-md text-white border-l-8 z-50 border-l-blue-400'>{user?.displayName}</h1>}

                <div className="w-12 h-12 bg-yellow-400 rounded-full p-1">
                  {user && (
                    <img
                      className="w-full rounded-full h-full "
                      src={user.photoURL || defaultImage}
                      alt=""
                    />
                  )}
                </div>
                <button className="btn-ghost btn btn-success" onClick={LogOut}>
                  {" "}
                  log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <button className=" p-3 z-0 hidden lg:block">Login</button>{" "}
                </Link>
              </li>
              <li className=" ">
                <Link to="/registration">
                  <button className="bg-black btn pr-10 z-[999] text-white rounded-full ">
                    Sign Up
                  </button>
                </Link>{" "}
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
