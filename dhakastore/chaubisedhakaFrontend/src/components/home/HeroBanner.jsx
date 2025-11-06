import { Pagination } from "@mui/material";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { bannerList } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";

const colors = [
  "bg-color-[#FDC200]",
  "bg-color-[#FF2C2C]",
  "bg-color-[#21AD61]",
];
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
        {bannerList.map((item, i) => {
          <SwiperSlide>
            <div
              className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}
            >
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
