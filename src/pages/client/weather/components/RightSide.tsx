import React from "react";
import { Box, Stack } from "@mui/material";
import RightCard from "./RightCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { rightCard } from "../../../../services/raw_data";

const RightSide = () => {
  return (
    <>
    <Swiper
   
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {rightCard.map((item, index) => (
        <SwiperSlide key={index}>
          <Box px={2}> {/* Add spacing using Box component with px */}
            <RightCard
              title={item.title}
              logo={item.logo}
              num={item.num}
              type={item.type}
              index={index}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
    
    </>
    
  );
  
};

export default RightSide;
