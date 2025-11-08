import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <div className="h-[70px] bg-custom-gradient text-white z-50 flex items-center sticky top-0 ">
    <div className="h-[70px] bg-gradient-to-r from-orange-400 to-pink-600 text-white z-50 flex items-center sticky top-0">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
        <Link className="flex items-center text-2xl font-bold" to="/">
          <FaStore className="text-2xl mr-2" />
          <span className="font-[poppins]">Chaubise-Dhaka</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
