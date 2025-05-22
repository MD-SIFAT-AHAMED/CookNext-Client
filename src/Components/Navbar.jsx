import React, { use, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";
import { NavLink } from "react-router";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);
  const [isDark, setIsDark] = useState(false);

  const handlerSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("SignOut Successfully");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  const handlerTheme = () => {
    setIsDark(!isDark);
    const currentTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      currentTheme === "light" ? "dark" : "light"
    );
  };
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-orange-500 font-bold" : ""
        }
        to={"/"}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-orange-500 font-bold" : ""
        }
        to={"/allRecipe"}
      >
        <li>All Recipes</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-orange-500 font-bold" : ""
        }
        to={"/addRecipe"}
      >
        <li>Add Recipe</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-orange-500 font-bold" : ""
        }
        to={"/myRecipe"}
      >
        <li>My Recipe</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar">
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
            tabIndex={0}
            className=" space-y-2 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 "
          >
            {links}
          </ul>
        </div>
        <figure>
          <img className="w-18 md:w-20" src={logo} alt="Logo" />
        </figure>
        <Link to={"/"} className="text-xl hidden md:block md:text-2xl font-semibold">
          Cook<span className="text-orange-500">Nest</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="md:text-lg  space-x-4 menu menu-horizontal px-1 *:hover:text-orange-600">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <div className="md:text-lg font-semibold space-x-1">
            <Link
              to={"/register"}
              className="bg-linear-to-l from-[#f9942a] to-[#e14752] hover:from-[#e14752] text-white px-3 py-2 rounded-lg"
            >
              Register
            </Link>
            <Link
              to={"/login"}
              className="border text-[#f9942a] border-[#f9942a] hover:bg-[#f9942a] hover:text-white px-3 py-2 rounded-lg"
            >
              Login
            </Link>
          </div>
        )}
        {user && (
          <div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="m-1">
                <div className="avatar w-10 h-10 avatar-online">
                  <img
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
                    alt="Profile"
                    className="mx-auto ring-2 ring-orange-400 rounded-full object-cover"
                  />
                </div>
              </div>
              <div
                tabIndex={0}
                className="dropdown-content menu z-20 bg-white shadow-xl border border-gray-200 rounded-2xl w-64 p-5 space-y-5 relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 rounded-t-2xl"></div>

                {/* User Info */}
                <div className="text-center space-y-1">
                  <p className="text-md font-semibold text-gray-800">
                    {user.displayName}
                  </p>
                </div>

                {/* Sign Out Button */}
                <button
                  onClick={handlerSignOut}
                  className="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
        <div onClick={handlerTheme} className="flex border-2 border-gray-400 rounded-full p-1 ml-2 ">
          {isDark ? (
            <MdOutlineWbSunny size={28} />
          ) : (
            <IoMoonOutline size={28} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
