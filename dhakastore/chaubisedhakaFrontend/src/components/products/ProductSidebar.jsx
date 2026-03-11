import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import Image from "../designLayouts/Image";
import { LAUNCHES } from "../../constants/index";
import { useState } from "react";

const FilterSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-gray-900 hover:text-blue-600 transition-colors"
      >
        <span className="text-xl tracking-tight uppercase">{title}</span>
        {isOpen ? (
          <FiChevronUp className="text-gray-400" />
        ) : (
          <FiChevronDown className="text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 animate-in fade-in slide-in-from-top-1 duration-200">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductSidebar = () => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 py-10">
      {/* Filter Sidebar */}
      <div className="w-[320px] hidden lg:block pr-8 py-2">
        <FilterSection title="Gender" defaultOpen={true}>
          <div className="space-y-3">
            {["Men", "Women", "Unisex"].map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black"
                />
                <span className="text-lg text-gray-700 group-hover:text-black font-medium transition-colors">
                  {opt}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Product type | Category"></FilterSection>
        <FilterSection title="Collections | Usage"></FilterSection>

        <FilterSection title="Size">
          <div className="grid grid-cols-4 gap-2">
            {["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"].map((size) => (
              <button
                key={size}
                className="border border-gray-200 py-2 text-xs font-medium rounded hover:border-black transition-colors"
              >
                {size}
              </button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Color">
          <div className="flex flex-wrap gap-3">
            {["#000", "#fff", "#ff0000", "#0000ff", "#008000", "#ffff00"].map(
              (color) => (
                <div
                  key={color}
                  className="w-6 h-6 rounded-full border border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                />
              ),
            )}
          </div>
        </FilterSection>

        <FilterSection title="Price"></FilterSection>
        <FilterSection title="Discounts"></FilterSection>
        <FilterSection title="Availability"></FilterSection>
      </div>

      {/* Product Image Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LAUNCHES.slice(0, 4).map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 block"
            >
              <Image
                imgSrc={product.image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-bold tracking-widest uppercase py-2 px-4 border border-white rounded-sm transition-opacity">
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
