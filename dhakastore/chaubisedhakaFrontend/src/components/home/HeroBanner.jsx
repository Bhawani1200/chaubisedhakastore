// import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// import { bannerList } from "../../utils";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/autoplay";
// import "swiper/css/effect-fade";

// import { Link } from "react-router-dom";
// import { Button } from "@headlessui/react";

// const colors = ["bg-[#FDC200]", "bg-[#FF2C2C]", "bg-[#21AD61]"];

// const HeroBanner = () => {
//   return (
//     <div className="py-2 rounded-md">
//       <Swiper
//         grabCursor={true}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         navigation
//         modules={[Pagination, EffectFade, Navigation, Autoplay]}
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         slidesPerView={1}
//       >
//         {bannerList.map((item, i) => (
//           <SwiperSlide key={item.id}>
//             <div
//               className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}
//             >
//               <div className="flex justify-center items-center">
//                 <div className="lg:flex hidden justify-center w-1/2 p-8">
//                   <div className="text-center">
//                     <h3 className="text-3xl text-white font-bold">
//                       {item.title}
//                     </h3>
//                     <h1 className="text-5xl text-white font-bold mt-2">
//                       {item.subtitle}
//                     </h1>
//                     <p className="font-bold text-white mt-4">
//                       {item.description}
//                     </p>
//                     <Link
//                       className="bg-black text-white mt-4 inline-block py-2 px-4 rounded hover:bg-gray-800"
//                       to="/products"
//                     >
//                       Shop
//                     </Link>
//                   </div>
//                   <div className="w-full flex justify-center lg:w-1/2 p-4">
//                     <img src={item?.image} 
//                      className="w-[600px] h-[500px] object-cover"/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroBanner;

import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@headlessui/react";
import { bannerList } from "../../utils";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerList.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerList.length) % bannerList.length
    );
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {bannerList.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-2 text-balance">
                {slide.subtitle}
              </p>
              <p className="text-lg mb-8 text-pretty max-w-2xl mx-auto">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="flex justify-center items-center text-3xl bg-blue-800 hover:bg-blue-600 rounded-md py-1 px-2"
                >
                  <Link to="/products"> Shop Collection</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex justify-center items-center text-3xl text-white hover:bg-slate-600 bg-slate-800 rounded-md  hover:text-foreground py-1 px-2"
                >
                  Learn Our Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerList.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};
export default HeroSection;
