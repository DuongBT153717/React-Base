import React from "react";
import { Box, Typography } from "@mui/material";
import videoFile from "../video2.mp4";

const Intro = () => {
  return (
    <Box
      width="208vh"
      height="88vh"
      sx={{
        position: "relative",
       
      }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={videoFile} type="video/mp4" />
        </video>
      </Box>
    </Box>
  );
};

export default Intro;
