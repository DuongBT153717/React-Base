import React from "react";
import { Box, Typography, Stack, Chip } from "@mui/material";
import HOUR_ICON from "../../../../assets/images/hour_icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { hourTemp } from "../../../../services/raw_data";
const HourTemp = () => {
  return (
    <Box mt={6} display="flex" gap={3}>
      <img src={HOUR_ICON} alt="" />
      <Box width="calc(100% - 265px)" bgcolor="rgba(255, 255, 255, 0.7)" borderRadius="20px">
        <Swiper
          slidesPerView={7}
          spaceBetween={50}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <Box
            justifyContent="space-between"
            display="flex"    
          >
            {hourTemp.map((item) => (
              <SwiperSlide>
                <Stack direction="column" alignItems="center">
                  <Chip
                    label={item.time}
                    sx={{
                      mt: "25px",
                      bgcolor: "#005CB0",
                      color: "#fff",
                      fontFamily: "Lato",
                      px: "5px",
                    }}
                  />
                  <img
                    src={item.img}
                    alt=""
                    width="92px"
                    height="92px"
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      objectFit: "contain",
                    }}
                  />
                  <Box
                    sx={{ mb: "20px" }}
                    display="flex"
                    justifyContent="center"
                    gap="20px"
                  >
                    <Typography sx={{ color: "#000" }}>
                      {item.degree}
                    </Typography>
                    <Typography sx={{ color: "#000" }} fontWeight="300">
                      {item.degree}
                    </Typography>
                  </Box>
                </Stack>
              </SwiperSlide>
            ))}
          </Box>
        </Swiper>
      </Box>
    </Box>
  );
};

export default HourTemp;
