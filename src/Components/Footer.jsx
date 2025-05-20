import React from "react";
import logo from "../assets/logo.jpg";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {

  return (
    <footer className="footer footer-horizontal footer-center p-10">
      <aside>
       
        <figure>
          <img className="w-20 md:w-25" src={logo} alt="logo" />
        </figure>
        <p className="font-bold md:text-lg">
          CookNest
          <br />
          Discover delicious, easy-to-make recipes from every kitchen corner.
        </p>
        <nav className="space-x-2">
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </nav>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved CookNest
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col text-3xl gap-4">
          <Link to={'https://www.facebook.com/heyiamsifatahamed'}>
            <FaFacebook />
          </Link>
          <Link to={'https://www.youtube.com/@mdsifatahamed6339'}>
            <FaYoutube />
          </Link>
          <Link to={'https://www.facebook.com/heyiamsifatahamed'}>
            <FaTwitter />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
