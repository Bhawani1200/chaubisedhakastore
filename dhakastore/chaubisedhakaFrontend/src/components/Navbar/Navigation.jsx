import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiMenu,
  FiX
} from "react-icons/fi";
import { MdStorefront } from "react-icons/md";

const Navigation = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Set target date for the sale (example: 5 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <header className="w-full flex flex-col font-bodyFont relative">
      {/* Top Banner (Holi Splash Sale) */}
      <div className="w-full bg-gradient-to-r from-purple-800 via-[#e11d48] to-[#ea580c] py-2 md:py-1.5 flex items-center justify-center text-white text-xs sm:text-sm md:text-[15px] px-2 md:px-4 font-medium">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-5">
          <span className="uppercase tracking-widest text-center">
            HOLI SPLASH SALE, Ends In:
          </span>
          {/* Timer blocks */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <TimerBlock value={formatNumber(timeLeft.days)} label="Day" />
            <span className="font-bold text-base md:text-lg mb-1">:</span>
            <TimerBlock value={formatNumber(timeLeft.hours)} label="Hours" />
            <span className="font-bold text-base md:text-lg mb-1">:</span>
            <TimerBlock value={formatNumber(timeLeft.minutes)} label="Min" />
            <span className="font-bold text-base md:text-lg mb-1">:</span>
            <TimerBlock value={formatNumber(timeLeft.seconds)} label="Sec" />
          </div>
        </div>
      </div>

      {/* Secondary Navbar */}
      <div className="w-full bg-[#202020] text-gray-200 text-[11px] md:text-[13px] py-1.5 px-4 lg:px-12 flex flex-col md:flex-row justify-between items-center z-10">
        
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors duration-300">
          <MdStorefront className="text-base" />
          <span className="font-medium tracking-wide">Nearby Stores</span>
        </div>

        {/* Center Carousel Text */}
        <div className="flex items-center gap-2 sm:gap-6 py-1 md:py-0 w-full md:w-auto justify-center md:justify-start">
          <FiChevronLeft className="cursor-pointer hover:text-white text-base md:text-lg xl:block hidden" />
          <span className="font-medium uppercase tracking-[0.15em] flex items-center gap-2 text-center text-[9px] sm:text-[11px] lg:text-[12px]">
            <span className="text-sm">🌱</span> 3.2M+ PLASTIC BOTTLES RECYCLED
          </span>
          <FiChevronRight className="cursor-pointer hover:text-white text-base md:text-lg xl:block hidden" />
        </div>

        {/* Right Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium">
          <Link to="/track-order" className="hover:text-white cursor-pointer tracking-wider transition-colors duration-300">
            Track Order
          </Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300">
            <span className="tracking-wider">About</span>
            <FiChevronDown className="mt-0.5" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300">
            <span className="tracking-wider">Help</span>
            <FiChevronDown className="mt-0.5" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-[#f8f8f8] border-b border-gray-200 px-4 xl:px-12 py-3 flex justify-between items-center h-[70px] md:h-[80px] sticky top-0 z-50">
        
        {/* Mobile Hamburger Menu Icon */}
        <div 
          className="lg:hidden flex items-center justify-center cursor-pointer text-[#111] hover:text-gray-600 mr-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </div>

        {/* Logo */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start cursor-pointer mix-blend-multiply mr-auto lg:mr-0">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-bodyFont tracking-[0.2em] md:tracking-[0.25em] text-[#111] font-medium">
            NEEMAN'S
          </h1>
        </div>

        {/* Desktop Menu Items */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] xl:text-[14px] font-semibold text-[#111] xl:ml-8">
          <NavItem title="NEW" />
          <NavItem title="MEN" />
          <NavItem title="WOMEN" />
          <NavItem title="OFFERS" />
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5 xl:gap-6 ml-auto">
          {/* Search Bar - Hidden on mobile, shown on tablet/desktop */}
          <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 w-[220px] lg:w-[280px] xl:w-[380px] hover:border-gray-400 focus-within:border-gray-800 transition-colors shadow-sm">
            <FiSearch className="text-gray-500 text-lg flex-shrink-0" />
            <input
              type="text"
              placeholder="Search Holi Splash Sale"
              className="bg-transparent outline-none border-none text-[12px] xl:text-[13px] w-full ml-3 text-primeColor placeholder:text-gray-500 font-medium"
            />
          </div>

          {/* Mobile Search Icon */}
          <div className="md:hidden flex flex-col items-center justify-center cursor-pointer text-[#111] hover:text-gray-600 transition-colors">
            <FiSearch className="text-[20px]" />
          </div>

          {/* Account */}
          <div className="hidden sm:flex flex-col items-center justify-center cursor-pointer text-[#111] hover:text-gray-600 transition-colors group">
            <FiUser className="text-[20px] xl:text-[22px] group-hover:scale-110 transition-transform" />
            <span className="text-[9px] xl:text-[10px] mt-1 font-semibold tracking-wider">
              ACCOUNT
            </span>
          </div>

          {/* Cart */}
          <Link to="/cart" className="flex flex-col items-center justify-center cursor-pointer text-[#111] hover:text-gray-600 transition-colors group relative">
            <FiShoppingCart className="text-[20px] xl:text-[22px] group-hover:scale-110 transition-transform" />
            {/* Optional badge indicator */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              0
            </span>
            <span className="text-[9px] xl:text-[10px] mt-1 font-semibold tracking-wider">
              CART
            </span>
          </Link>
        </div>
      </div>
      
      {/* Mobile Drawer Dropdown items */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col z-[100]">
          {/* Mobile Search Input */}
          <div className="p-4 border-b border-gray-100 flex md:hidden items-center bg-gray-50 rounded-md mx-4 mt-4">
            <FiSearch className="text-gray-500 text-lg mr-3" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full text-sm font-medium"
            />
          </div>
          
          <MobileNavItem title="NEW" />
          <MobileNavItem title="MEN" />
          <MobileNavItem title="WOMEN" />
          <MobileNavItem title="OFFERS" />
          
          <div className="mt-4 bg-gray-50 p-4 border-t border-gray-100 grid grid-cols-2 gap-4">
               <span className="text-sm font-medium text-gray-700 flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-md bg-white">
                 <FiUser /> Account
               </span>
               <span className="text-sm font-medium text-gray-700 flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-md bg-white">
                 <MdStorefront /> Stores
               </span>
          </div>
        </div>
      )}
    </header>
  );
};

const TimerBlock = ({ value, label }) => (
  <div className="bg-white text-black flex flex-col items-center justify-center w-[34px] sm:w-[38px] h-[38px] sm:h-[42px] rounded-sm shadow-sm md:shadow-md">
    <span className="font-bold text-[14px] sm:text-[16px] md:text-[17px] leading-tight md:leading-none md:mb-0.5">{value}</span>
    <span className="text-[8px] md:text-[9px] uppercase leading-none text-gray-500 font-bold tracking-wider">
      {label}
    </span>
  </div>
);

const NavItem = ({ title }) => (
  <div className="flex items-center gap-1.5 cursor-pointer text-gray-800 hover:text-black transition-colors py-2 relative group">
    <span className="tracking-widest uppercase">{title}</span>
    <FiChevronDown className="text-xs mb-0.5 transition-transform group-hover:rotate-180" />
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
  </div>
);

const MobileNavItem = ({ title }) => (
  <div className="flex justify-between items-center py-4 px-6 border-b border-gray-100 hover:bg-gray-50 cursor-pointer text-gray-800">
    <span className="tracking-widest font-semibold">{title}</span>
    <FiChevronRight className="text-gray-400" />
  </div>
);

export default Navigation;
