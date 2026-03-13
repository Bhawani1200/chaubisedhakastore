import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import LaunchCard from "../shared/LaunchCard";
import { LAUNCHES } from "../../constants/index";

const NewLaunches = () => {
  return (
    <section className="w-full bg-[#e8ebe4] py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        {/* ── Header ── */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            New Launches
          </h2>
        </div>

        {/* ── Product Grid — same dynamic pattern as ProductSidebar (1 / 2 / 4 cols) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LAUNCHES.map((product) => (
            <div key={product.id}>
              <LaunchCard
                productId={product.id}
                productName={product.productName}
                image={product.image}
                description={product.description}
                quantity={product.quantity}
                price={product.price}
                discount={product.discount}
                specialPrice={product.specialPrice}
                rating={product.rating}
                reviewCount={product.reviewCount}
                colors={product.colors}
              />
            </div>
          ))}
        </div>

        {/* ── View All ── */}
        <div className="flex justify-center mt-8 md:mt-10">
          <Link to="/shop">
            <button className="flex items-center gap-2 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full border border-gray-800 text-gray-800 text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200">
              View All
              <ChevronRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewLaunches;
