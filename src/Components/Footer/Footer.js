import React from "react";
import Logo from "Assets/Images/logo.svg";
import INSTAGRAM from "Assets/Images/insta.svg";
import fb from "Assets/Images/facebook.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
      <div className="h-[8rem]  hidden sm:flex items-center justify-between px-[3.5rem] py-4 border-t">
        <div className="flex-[0.86]">
          <img src={Logo} alt="Logo" className="w-[6.25rem]" />
        </div>
        <div className="flex justify-between gap-10 flex-1">
          <div className="flex flex-col gap-1 ">
            <Link to="/products" className="font-AMedium text-black text-sm">
              COLLECTIONS
            </Link>
            {/* <Link to="/products" className="font-AMedium text-black text-sm">
              SEARCH
            </Link> */}
            <Link to="/search" className="font-AMedium text-black text-sm">
              SEARCH
            </Link>
            <Link to="/cart" className="font-AMedium text-black text-sm">
              CART
            </Link>
          </div>
          <div className="flex flex-col gap-1 ">
            <a href="" className="font-AMedium text-black text-sm">
              FACEBOOK
            </a>

            <a href="" className="font-AMedium text-black text-sm">
              INSTAGRAM
            </a>
          </div>
          <p className="font-ARegular text-black text-sm">
            © 2024 All Rights Reserved
          </p>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="h-[5rem] border-t sm:hidden px-5 py-3 flex justify-between items-center gap-5">
        <img src={Logo} alt="Logo" className="w-[5rem] sm:-translate-x-4" />

        <div className="flex flex-row items-center gap-5 flex-wrap">
          <Link to="/products" className="font-AMedium text-black text-sm">
            COLLECTIONS
          </Link>
          {/* <Link to="/products" className="font-AMedium text-black text-sm">
              SEARCH
            </Link> */}
          <Link to="/search" className="font-AMedium text-black text-sm">
            SEARCH
          </Link>
          <Link to="/products" className="font-AMedium text-black text-sm">
            CART
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
