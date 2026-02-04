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
// import React, { useContext } from "react";
// import Logo2 from "./logo/logo2.jpg";
// import { Link } from "react-router-dom";
// import CountryDropDown from "./DropDown/CountryDropDown";
// import { IoBagAdd, IoSearchSharp } from "react-icons/io5";
// import { Button } from "@mui/material";
// import { FaUser } from "react-icons/fa";
// import { TiShoppingCart } from "react-icons/ti";
// import SearchBox from "./DropDown/SearchBox";
// import Category from "./DropDown/Category";
// import { MyContext } from "../../App";

// const Navbar = () => {
//   const context = useContext(MyContext);

//   return (
//     <div className="headerWrapper">
//       <div className="top-strip bg-purple">
//         <div className="container">
//           <p className="mt-0 mb-0 text-center ">
//             Get <b>50%</b> off in new season, last upto 45 days
//           </p>
//         </div>
//       </div>

//       <header className="header">
//         <div className="container">
//           <div className="row">
//             <div className="logoWrapper d-flex aligns-items-center col-sm-2">
//               <Link to="/">
//                 <img src={Logo2} alt="sneakerszone" />
//               </Link>
//             </div>

//             <div className="col-sm-10 d-flex align-items-center part2 gap-6">
//               {context.countryList.length!==0 && <CountryDropDown />}

//               <SearchBox />

//               <div className="part3 d-flex align-items-center ms-auto">
//                 <Button className="circle mr-5">
//                   <FaUser />
//                 </Button>
//                 <div className="ms-auto classTab d-flex align-items-center">
//                   <span className="price">$400</span>
//                   <div className="position-relative ml-2">
//                     <Button className="circle ">
//                       <IoBagAdd />
//                     </Button>
//                     <span className="count d-flex align-items-center justify-content-center">
//                       1
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <Category />
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { navBarList } from "../../constants/index.jsx";
import Image from "../designLayouts/Image.jsx";
import { logo1 } from "../../assets/logo/index.jsx";
import Flex from "../designLayouts/Flex.jsx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <Image className="w-20 object-cover" imgSrc={logo1} />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-4 decoration-1 hover:text-[#262626] md:border-r-2 border-r-gray-300 hoverEffect last:border-r-0"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <img
                      className="w-28 mb-6"
                      src={logoLight}
                      alt="logoLight"
                    />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-4 decoration-1 hover:text-white md:border-r-2 border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Brand
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Navbar;
