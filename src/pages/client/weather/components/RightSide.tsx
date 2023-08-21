import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import RightCard from "./RightCard";
const RightSide = () => {
  return (
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <RightCard />
        </SwiperSlide>
        <SwiperSlide>
          <RightCard />
        </SwiperSlide>
        <SwiperSlide>
          <RightCard />
        </SwiperSlide>
        <SwiperSlide>
          <RightCard />
        </SwiperSlide>
        <SwiperSlide>
          <RightCard />
        </SwiperSlide>
      </Swiper>
  );
};

export default RightSide;
