import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { newsMain } from "../../../../services/raw_data";
import NewsTitle from "./NewsTitle";

const News = () => {
  return (
    <Box display="flex">
      <Box sx={{ flex: 2 }} mt="-70px" padding="40px" ml="-500px" >
        <Container maxWidth="sm">
          <Stack direction="column">
            <Box display="flex" justifyContent="flex-start" mt="70px" > {/* Change justifyContent to flex-start */}
              <Box
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.7)",
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: "0px",
                  width: "100%",
                }}
              >
                <Swiper    
                  spaceBetween={30}
                  slidesPerView="auto"
                >
                  {newsMain.map((item, index) => (
                    <SwiperSlide key={index}>
                      <NewsTitle
                        img={item.img}
                        title={item.title}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default News;
