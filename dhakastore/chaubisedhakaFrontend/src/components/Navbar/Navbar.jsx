// import React from "react";
// import { FaSignInAlt, FaStore } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import Badge from "@mui/material/Badge";
// import { GiShoppingCart } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import { IoIosMenu } from "react-icons/io";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import UserMenu from "../UserMenu";

// const Navbar = () => {
//   const path = useLocation().pathname;
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   const { cart } = useSelector((state) => state.carts);
//   const { user } = useSelector((state) => state.auth);

//   return (
//     <div className="h-17.5 bg-linear-to-r from-gray-800 to-black  text-white z-50 flex items-center sticky top-0">
//       <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
//         <Link className="flex items-center text-2xl font-bold" to="/">
//           <FaStore className="text-2xl mr-2" />
//           <span className="font-[Poppins]">Chaubise Dhaka</span>
//           {/* <img src={logo}
//           className="h-14 w-auto"
//         /> */}
//         </Link>
//         <ul
//           className={`flex sm:gap-10 gap-4 sm:items-center  text-slate-800 sm:static absolute left-0 top-17.5 sm:shadow-none shadow-md ${
//             navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
//           }  transition-all duration-100 sm:h-fit sm:bg-none  bg-linear-to-r from-gray-800 to-black   text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
//         >
//           <li className="font-medium transition-all duration-150">
//             <Link
//               className={`${
//                 path === "/" ? "text-white  font-semibold" : "text-gray-200"
//               }`}
//               to="/"
//             >
//               Home
//             </Link>
//           </li>
//           <li className="font-[500px] transition-all duration-150">
//             <Link
//               className={`${
//                 path === "/products"
//                   ? "text-white  font-semibold"
//                   : "text-gray-200"
//               }`}
//               to="/products"
//             >
//               Products
//             </Link>
//           </li>
//           <li className="font-[500px] transition-all duration-150">
//             <Link
//               className={`${
//                 path === "/contact"
//                   ? "text-white  font-semibold"
//                   : "text-gray-200"
//               }`}
//               to="/contact"
//             >
//               Contact
//             </Link>
//           </li>
//           <li className="font-[500px] transition-all duration-150">
//             <Link
//               className={`${
//                 path === "/about"
//                   ? "text-white  font-semibold"
//                   : "text-gray-200"
//               }`}
//               to="/about"
//             >
//               About
//             </Link>
//           </li>
//           <li className="font-[500px] transition-all duration-150">
//             <Link
//               className={`${
//                 path === "/cart" ? "text-white  font-semibold" : "text-gray-200"
//               }`}
//               to="/cart"
//             >
//               <Badge
//                 showZero
//                 badgeContent={cart?.length || 0}
//                 color="primary"
//                 anchorOrigin={{ vertical: "top", horizontal: "right" }}
//                 overlap="circular"
//               >
//                 <GiShoppingCart size={25} />
//               </Badge>
//             </Link>
//           </li>
//           {user && user.id ? (
//             <div className="font-[500px] transition-all duration-150 ">
//            <UserMenu />
//             </div>
//           ) : (
//             <li className="font-[500px] transition-all duration-150">
//               <Link
//                 className="flex  items-center space-x-2 px-4 py-1.5
//               bg-linear-to-r from bg-purple-600 to to-red-500
//               text-white font-semibold rounded-md shadow-lg
//               hover:from-purple-500 hover:to-red-400 transition-duration-300 ease-in-out transform
//               "
//                 to="/login"
//               >
//                 <FaSignInAlt />
//                 <span>Login</span>
//               </Link>
//             </li>
//           )}
//         </ul>
//         <button
//           className="sm:hidden flex items-center sm:mt-0 mt-2"
//           onClick={() => setNavbarOpen(!navbarOpen)}
//         >
//           {navbarOpen ? (
//             <RxCross2 className="text-white text-3xl " />
//           ) : (
//             <IoIosMenu className="text-white text-3xl" />
//           )}
//         </button>
//       </div>
//     </div>

//   );
// };

// export default Navbar;
import React from "react";
import Logo2 from "./logo/logo2.jpg";
import { Link } from "react-router-dom";
import CountryDropDown from "./DropDown/CountryDropDown";
import { IoSearchSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaUser  } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
const Navbar = () => {
  return (
    <div className="headerWrapper">
      <div className="top-strip bg-purple">
        <div className="container">
          <p className="mt-0 mb-0 text-center ">
            Get <b>50%</b> off in new season, last upto 45 days
          </p>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex aligns-items-center col-sm-2">
              <Link to="/">
                <img src={Logo2} alt="sneakerszone" />
              </Link>
            </div>

            <div className="col-sm-10 d-flex align-items-center part2 gap-6">
              <CountryDropDown />

              <div className="headerSearch ml-3 mr-3">
                <input type="text" placeholder="search for products.." />
                <Button className="button">
                  <IoSearchSharp />
                </Button>
              </div>

              <div className="part3 d-flex align-items-center ms-auto">
                <Button className="circle mr-5">
                  <FaUser />
                </Button>
                <div className="ms-auto classTab">
                  <span className="price">$400</span>
                  <Button className="circle ml-4"><TiShoppingCart /></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
