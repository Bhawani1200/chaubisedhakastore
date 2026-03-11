import React, { useState } from "react";
import { ChevronRight, ChevronDown, Home } from "lucide-react";

const ProductsLayout = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState("Featured");

  const sortOptions = [
    "Featured",
    "Newest First",
    "Best Selling",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const handleSortSelect = (option) => {
    setCurrentSort(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full bg-white font-sans">
      <div className="mt-5 mx-auto border-b border-gray-200" />
      <div className="max-w-full mx-auto border-b border-gray-200">
        <div className="border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          {/* Icons Row: Breadcrumb placed just above the heading */}
          <div className="flex items-center text-gray-400 text-[14px] mb-6">
            <Home
              size={30}
              strokeWidth={1.5}
              className="hover:text-black cursor-pointer"
            />
            <ChevronRight
              size={30}
              strokeWidth={1.5}
              className="mx-2 text-gray-300"
            />
          </div>

          {/* Heading Section: Flex layout for title and sort dropdown */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-10 md:gap-16">
            <h1 className="text-4xl md:text-[52px] font-normal text-slate-800 tracking-tight leading-none">
              All Products
            </h1>

            {/* Sort Dropdown container */}
            <div className="relative">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`rounded-full border ${
                  isDropdownOpen
                    ? "border-amber-600 ring-1 ring-amber-600"
                    : "border-gray-400"
                } shrink-0 self-start sm:self-center bg-white shadow-sm hover:shadow transition-all cursor-pointer`}
              >
                <div className="flex items-center px-10 py-4">
                  <span className="text-gray-500 text-[25px] mr-1">
                    Sort by:
                  </span>
                  <span className="font-medium text-slate-800 text-[25px]">
                    {currentSort}
                  </span>
                  <ChevronDown
                    size={26}
                    strokeWidth={1.5}
                    className={`ml-3 text-slate-600 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[450px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 py-2 z-50 overflow-hidden">
                  {sortOptions.map((option, index) => (
                    <div
                      key={option}
                      onClick={() => handleSortSelect(option)}
                      className={`flex items-center px-8 py-6 cursor-pointer hover:bg-gray-50 transition-colors ${
                        index !== sortOptions.length - 1
                          ? "border-b border-gray-50"
                          : ""
                      }`}
                    >
                      <div className="mr-6 flex items-center justify-center">
                        <div
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                            currentSort === option
                              ? "border-gray-800"
                              : "border-gray-300"
                          }`}
                        >
                          {currentSort === option && (
                            <div className="w-4 h-4 rounded-full bg-gray-800" />
                          )}
                        </div>
                      </div>
                      <span
                        className={`text-[24px] ${
                          currentSort === option
                            ? "font-medium text-gray-900"
                            : "text-gray-600"
                        }`}
                      >
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 mx-auto border-b border-gray-200" />
    </div>
  );
};

export default ProductsLayout;
