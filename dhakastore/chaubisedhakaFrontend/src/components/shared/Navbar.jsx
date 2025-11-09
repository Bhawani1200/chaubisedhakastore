import { FaSignInAlt, FaStore } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  const path = useLocation().pathname;
  return (
    <div className="h-[70px] bg-linear-to-r from-orange-400 to-pink-600 text-white z-50 flex items-center sticky top-0">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
        <Link className="flex items-center text-2xl font-bold" to="/">
          <FaStore className="text-2xl mr-2" />
          <span className="font-[poppins]">Chaubise-Dhaka</span>
        </Link>
        <ul className="flex gap-4 text-slate-800">
          <li className="font-[500px] transition-all duration-150">
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
                path === "/contacts"
                  ? "text-white  font-semibold"
                  : "text-gray-200"
              }`}
              to="/contacts"
            >
              Contacts
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
                badgeContent={0}
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
              className="flex space-x-2 px-4 py-[6px] 
              bg-gradient-to-r from bg-purple-600 to to-red-500
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
      </div>
    </div>
  );
};

export default Navbar;
