import React from 'react'
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { rightCard } from "../../../../services/raw_data";
import RightCard from './RightCard';
const PredictWeather = () => {
  return (
    <>
        <Box >
        <Typography
          sx={{
            fontSize: "30px",
            mt: "20px",
            color: "#003B72",
          }}
        >
          DỰ BÁO CHI TIẾT
        </Typography>

        <Swiper
          spaceBetween={70}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
            {rightCard.map((item, index) => (
              <SwiperSlide key={index}>
                <RightCard
                  title={item.title}
                  logo={item.logo}
                  num={item.num}
                  type={item.type}
                  index={index}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </>
  )
}

export default PredictWeather