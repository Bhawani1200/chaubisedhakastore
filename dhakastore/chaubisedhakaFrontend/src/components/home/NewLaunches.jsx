import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import LaunchCard from "../shared/LaunchCard";
import { LAUNCHES } from "../../constants/index";

// ---------------------------------------------------------------------------
// Custom Arrow Buttons
// ---------------------------------------------------------------------------
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-500 transition shadow-sm shrink-0"
    aria-label="Previous"
  >
    <ChevronLeft size={16} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-500 transition shadow-sm shrink-0"
    aria-label="Next"
  >
    <ChevronRight size={16} />
  </button>
);

// ---------------------------------------------------------------------------
// NewLaunches Section
// ---------------------------------------------------------------------------
const NewLaunches = () => {
  const sliderRef = useRef(null);
  const [dotActive, setDotActive] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    // Custom dot renderer
    appendDots: (dots) => (
      <div style={{ marginTop: "20px" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            padding: 0,
            margin: 0,
            listStyle: "none",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: i === dotActive ? "12px" : "8px",
          height: "8px",
          borderRadius: "5px",
          backgroundColor: i === dotActive ? "#262626" : "#9ca3af",
          display: "inline-block",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      />
    ),
    responsive: [
      // Large desktop (≥1400): 4 cards, no dots
      {
        breakpoint: 9999,
        settings: { slidesToShow: 4, dots: false },
      },
      // Desktop (1100–1400): 4 cards, no dots
      {
        breakpoint: 1400,
        settings: { slidesToShow: 4, dots: false },
      },
      // Laptop (768–1100): 3 cards, no dots
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3, dots: false },
      },
      // Tablet (480–768): 2 cards, with dots
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, dots: true },
      },
      // Mobile (<480): 1 card, with dots
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, dots: true },
      },
    ],
  };

  return (
    <section className="w-full bg-[#e8ebe4] py-8 md:py-12 px-4 sm:px-6 lg:px-12">
      <div className="w-full">
        {/* ── Header ── */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            New Launches
          </h2>

          {/* Arrows — hide on mobile (swipe), show on sm+ */}
          <div className="hidden sm:flex items-center gap-3">
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </div>

        {/* ── Slider ── */}
        <Slider ref={sliderRef} {...settings} className="new-launches-slider">
          {LAUNCHES.map((product) => (
            <div key={product.id} className="px-1.5 h-full">
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
        </Slider>

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
