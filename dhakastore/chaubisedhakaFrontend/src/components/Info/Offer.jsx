import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Offer = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    // Get the first item to determine scroll width
    const firstItem = container.querySelector("[data-offer-item]");
    if (firstItem) {
      const cardWidth = firstItem.offsetWidth;
      const gap = parseInt(window.getComputedStyle(container).gap) || 24;
      const scrollAmount = cardWidth + gap;
      container.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="max-w-[1600px] mx-auto relative group/carousel">
        {/* Side Navigation Arrows - Visible on screens smaller than lg */}
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous offers"
          className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/10 backdrop-blur-md border border-black/10 flex items-center justify-center text-gray-800 shadow-xl hover:bg-black/20 transition-all lg:hidden"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll(1)}
          aria-label="Next offers"
          className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/10 backdrop-blur-md border border-black/10 flex items-center justify-center text-gray-800 shadow-xl hover:bg-black/20 transition-all lg:hidden"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-6 h-auto lg:h-[650px] scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Main Card (Red Shoe) */}
          <div
            data-offer-item
            className="flex-shrink-0 min-w-full lg:min-w-0 lg:row-span-2 lg:h-full snap-start relative overflow-hidden rounded-2xl bg-[#f8f8f8] flex flex-col justify-end p-8 md:p-12 h-[500px] group"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80"
                alt="Red Running Shoe"
                className="w-full h-full object-contain object-center scale-95 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="relative z-10 w-full max-w-md">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Step Into Style
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-sm uppercase tracking-wider text-gray-500">
                  Up to
                </span>
                <span className="text-5xl font-black text-gray-900">30%</span>
                <span className="text-sm text-gray-500">off on all shoes!</span>
              </div>
              <Link to="/shop">
                <button className="px-8 py-3 bg-[#1a1a1a] text-white rounded-md font-semibold hover:bg-black transition-colors">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Retro Collection Card */}
          <div
            data-offer-item
            className="flex-shrink-0 min-w-full lg:min-w-0 snap-start relative overflow-hidden rounded-2xl bg-[#f3f4f6] flex items-center p-8 md:p-10 h-[280px] lg:h-auto group"
          >
            <div className="relative z-10 w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                Retro Collection
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-xs uppercase tracking-wider text-gray-500">
                  Up to
                </span>
                <span className="text-4xl font-black text-gray-900">70%</span>
              </div>
              <p className="text-sm text-gray-600 mb-6 hidden md:block">
                Sale for all urban styles!
              </p>
              <Link to="/shop">
                <button className="px-6 py-2.5 bg-[#1a1a1a] text-white rounded-sm text-sm font-semibold hover:bg-black transition-colors">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
                alt="Colorful Lifestyle Sneaker"
                className="w-full h-full object-contain scale-110 -rotate-12 group-hover:rotate-0 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Comfort First Card */}
          <div
            data-offer-item
            className="flex-shrink-0 min-w-full lg:min-w-0 snap-start relative overflow-hidden rounded-2xl bg-[#eff1f3] flex items-center p-8 md:p-10 h-[280px] lg:h-auto group"
          >
            <div className="relative z-10 w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                Comfort First
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-xs uppercase tracking-wider text-gray-500">
                  Up to
                </span>
                <span className="text-4xl font-black text-gray-900">50%</span>
              </div>
              <p className="text-sm text-gray-600 mb-6 hidden md:block">
                Sale for all casual collections!
              </p>
              <Link to="/shop">
                <button className="px-6 py-2.5 bg-[#1a1a1a] text-white rounded-sm text-sm font-semibold hover:bg-black transition-colors">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
                alt="Green Sport Shoe"
                className="w-full h-full object-contain scale-125 rotate-6 group-hover:rotate-0 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
