import { FaSignInAlt, FaStore } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { GiShoppingCart } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { cart } = useSelector((state) => state.carts);

  return (
    <div className="h-[70px] bg-linear-to-r from-gray-800 to-black  text-white z-50 flex items-center sticky top-0">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
        <Link className="flex items-center text-2xl font-bold" to="/">
          <FaStore className="text-2xl mr-2" />
          <span className="font-[Poppins]">Chaubise Dhaka</span>
          {/* <img src={logo}
          className="h-14 w-auto"
        /> */}
        </Link>
        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center  text-slate-800 sm:static absolute left-0 top-[70px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          }  transition-all duration-100 sm:h-fit sm:bg-none  bg-linear-to-r from-gray-800 to-black   text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li className="font-medium transition-all duration-150">
            <Link
              className={`${
                path === "/" ? "text-white  font-semibold" : "text-gray-200"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="font-[500px] transition-all duration-150">
            <Link
              className={`${
                path === "/products"
                  ? "text-white  font-semibold"
                  : "text-gray-200"
              }`}
              to="/products"
            >
              Products
            </Link>
          </li>
          <li className="font-[500px] transition-all duration-150">
            <Link
              className={`${
                path === "/contact"
                  ? "text-white  font-semibold"
                  : "text-gray-200"
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="font-[500px] transition-all duration-150">
            <Link
              className={`${
                path === "/about"
                  ? "text-white  font-semibold"
                  : "text-gray-200"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="font-[500px] transition-all duration-150">
            <Link
              className={`${
                path === "/cart" ? "text-white  font-semibold" : "text-gray-200"
              }`}
              to="/cart"
            >
              <Badge
                showZero
                badgeContent={cart?.length || 0}
                color="primary"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                overlap="circular"
              >
                <GiShoppingCart size={25} />
              </Badge>
            </Link>
          </li>
          <li className="font-[500px] transition-all duration-150">
            <Link
              className="flex space-x-2 px-4 py-1.5 
              bg-linear-to-r from bg-purple-600 to to-red-500
              text-white font-semibold rounded-md shadow-lg
              hover:from-purple-500 hover:to-red-400 transition-duration-300 ease-in-out transform
              "
              to="/login"
            >
              <FaSignInAlt className="" />
              <span>Login</span>
            </Link>
          </li>
        </ul>
        <button
          className="sm:hidden flex items-center sm:mt-0 mt-2"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl " />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
