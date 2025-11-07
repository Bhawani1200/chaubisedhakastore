import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { bannerList } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const colors = ["bg-[#FDC200]", "bg-[#FF2C2C]", "bg-[#21AD61]"];

const HeroBanner = () => {
  return (
    <div className="py-2 rounded-md">
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Pagination, EffectFade, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
      >
        {bannerList.map((item, i) =>(
             <SwiperSlide key={item.id}>
            <div
              className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}
            >
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <h3 className="text-3xl text-white font-bold">
                    {item.title}
                  </h3>
                  <h1 className="text-5xl text-white font-bold mt-2">{item.subtitle}</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
