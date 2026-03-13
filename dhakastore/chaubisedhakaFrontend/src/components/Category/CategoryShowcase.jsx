import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    key: "men",
    label: "MEN",
    description: "Explore performance-ready styles for him.",
    bg: "from-slate-900 via-slate-800 to-slate-700",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  },
  {
    key: "women",
    label: "WOMEN",
    description: "Discover bold and versatile looks for her.",
    bg: "from-indigo-800 via-indigo-600 to-purple-500",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
  },
  {
    key: "kids",
    label: "KIDS",
    description: "Fun, colorful comfort for little feet.",
    bg: "from-amber-400 via-yellow-300 to-orange-400",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
  },
  {
    key: "unisex",
    label: "UNISEX",
    description: "Clean silhouettes for every wardrobe.",
    bg: "from-emerald-700 via-emerald-600 to-teal-500",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80",
  },
  {
    key: "cleaners",
    label: "CLEANERS",
    description: "Keep your collection fresh and spotless.",
    bg: "from-neutral-800 via-neutral-700 to-neutral-600",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
  },
];

const CategoryShowcase = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 tracking-tight">
              Shop by Category
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
              Find your perfect fit across our specialized collections.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-1 text-sm sm:text-base font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View All
            <ChevronRight size={18} />
          </Link>
        </div>

        {/* Category Cards */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-3 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-visible">
          {CATEGORIES.map((category) => (
            <Link
              key={category.key}
              to={`/shop?category=${category.key}`}
              className="group relative flex-1 min-w-[70%] xs:min-w-[55%] sm:min-w-[45%] md:min-w-0"
            >
              <div
                className={`relative h-72 sm:h-80 md:h-[22rem] lg:h-[24rem] rounded-[30px] overflow-hidden shadow-lg bg-gradient-to-br ${category.bg}`}
              >
                {/* Category image */}
                <img
                  src={category.image}
                  alt={category.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7 md:p-8">
                  <p className="text-[11px] tracking-[0.28em] text-white/80 uppercase mb-1">
                    CATEGORY
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-[0.16em] mb-2">
                    {category.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 max-w-xs mb-4">
                    {category.description}
                  </p>
                  <div className="inline-flex items-center text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white/90">
                    Explore Now
                    <ChevronRight
                      size={16}
                      className="ml-1 transition-transform group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;

