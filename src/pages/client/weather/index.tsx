import React from "react";
import { Box, Typography } from "@mui/material";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Intro from "./components/Intro";
import BG_BODY from "../../../assets/images/bg-body.png";

const ClientWeather = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${BG_BODY})`,
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box sx={{maxWidth: '1800px', m: '0 auto', padding: '0 20px',}}>
          <Intro />
          <Typography
            sx={{
              fontSize: "30px",
              ml: "210px",
              mt: "20px",
              fontWeight: "20px",
              color: "#003B72",
            }}
          >
            DỰ BÁO CHI TIẾT
          </Typography>
          <Box display="flex" gap="35px">
            <LeftSide />
            <RightSide />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ClientWeather;
