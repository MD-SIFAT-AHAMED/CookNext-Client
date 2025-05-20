import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router";
const Navbar = () => {
  const links = (
    <>
      <Link to={'/'}>
        <li>Home</li>
      </Link>
      <Link to={'/allRecipe'}>
        <li>All Recipes</li>
      </Link>
      <Link to={'/addRecipe'}>
        <li>Add Recipe</li>
      </Link>
      <Link to={'/myRecipe'}>
        <li>My Recipe</li>
      </Link>
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
            {
                links
            }
          </ul>
        </div>
        <figure>
            <img className="w-15 md:w-20" src={logo} alt="Logo" />
        </figure>
        <Link to={'/'} className="text-xl md:text-2xl font-semibold">Cook<span className="text-orange-500">Nest</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="md:text-lg  space-x-4 menu menu-horizontal px-1 *:hover:text-orange-600">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end">
        <div className="md:text-lg font-semibold space-x-1">
            <Link to={'/register'} className="bg-linear-to-l from-[#f9942a] to-[#e14752] hover:from-[#e14752] text-white px-3 py-2 rounded-lg">Register</Link>
            <Link to={'/login'} className="border text-[#f9942a] border-[#f9942a] hover:bg-[#f9942a] hover:text-white px-3 py-2 rounded-lg">Login</Link>
        </div>
        <div>
            {/* prfile */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
