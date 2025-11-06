import { Pagination } from "@mui/material";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { bannerList } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";

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
            <div></div>
          </SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
