import React from "react";
import { Stack } from "@mui/material";
import PredictWeather from "./PredictWeather";
import HourTemp from "./HourTemp";
import News from "./News";

const RightSide = () => {
  return (
    <Stack direction="column" width="calc(100% - 225px)">
      <PredictWeather />
      <HourTemp />
      <News />
    </Stack>
  );
};

export default RightSide;
