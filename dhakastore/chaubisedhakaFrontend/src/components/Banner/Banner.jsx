import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FiPlay, FiPause, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
  bannerImgFive
} from "../../assets/images";

import Image from "../designLayouts/Image";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const togglePlay = () => {
    if (sliderRef.current) {
      if (isPaused) {
        sliderRef.current.slickPlay();
        setIsPaused(false);
      } else {
        sliderRef.current.slickPause();
        setIsPaused(true);
      }
    }
  };

  const handleNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: !isPaused,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <ul style={{ margin: "0px", padding: "0px", display: "flex", alignItems: "center", gap: "8px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: i === dotActive ? "8px" : "6px",
          height: i === dotActive ? "8px" : "6px",
          backgroundColor: i === dotActive ? "#fff" : "rgba(255,255,255,0.5)",
          borderRadius: "50%",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "inline-block",
        }}
      ></div>
    ),
  };

  return (
    <div className="w-full relative bg-black h-[600px] md:h-[800px] overflow-hidden group">
      <Slider ref={sliderRef} {...settings} className="h-full">
        <Link to="/offer" className="block h-full outline-none">
          <div className="h-[600px] md:h-[800px] w-full">
            <Image imgSrc={bannerImgOne} className="w-full h-full object-cover opacity-80" />
          </div>
        </Link>
        <Link to="/offer" className="block h-full outline-none">
          <div className="h-[600px] md:h-[800px] w-full">
            <Image imgSrc={bannerImgTwo} className="w-full h-full object-cover opacity-80" />
          </div>
        </Link>
        <Link to="/offer" className="block h-full outline-none">
          <div className="h-[600px] md:h-[800px] w-full">
            <Image imgSrc={bannerImgThree} className="w-full h-full object-cover opacity-80" />
          </div>
        </Link>
        <Link to="/offer" className="block h-full outline-none">
          <div className="h-[600px] md:h-[800px] w-full">
            <Image imgSrc={bannerImgFour} className="w-full h-full object-cover opacity-80" />
          </div>
        </Link>
        <Link to="/offer" className="block h-full outline-none">
          <div className="h-[600px] md:h-[800px] w-full">
            <Image imgSrc={bannerImgFive} className="w-full h-full object-cover opacity-80" />
          </div>
        </Link>
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4">
        <h1
          className="text-white text-6xl sm:text-7xl md:text-[140px] font-black uppercase tracking-tighter text-center leading-[0.9]"
          style={{ textShadow: "0 4px 12px rgba(0,0,0,0.4)" }}
        >
          AIR MAX 95
        </h1>
        <p
          className="text-white text-base sm:text-lg md:text-2xl font-semibold mt-4 text-center"
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.4)" }}
        >
          Above the Influence
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 pointer-events-auto">
          <Link to="/shop">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-base hover:bg-gray-200 transition">
              Shop
            </button>
          </Link>
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-gray-200 transition">
            Watch <FaPlay className="text-xs" />
          </button>
        </div>
      </div>

      {/* Bottom Right Controls */}
      <div className="absolute bottom-8 right-8 flex gap-3 z-20 pointer-events-auto">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-transparent border-2 border-white flex justify-center items-center text-white hover:bg-white hover:text-black transition"
          aria-label={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? <FiPlay /> : <FiPause />}
        </button>
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-transparent border-2 border-white flex justify-center items-center text-white hover:bg-white hover:text-black transition"
          aria-label="Previous"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-transparent border-2 border-white flex justify-center items-center text-white hover:bg-white hover:text-black transition"
          aria-label="Next"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
