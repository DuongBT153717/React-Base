import React from "react";
import { Stack } from "@mui/material";
import PredictWeather from "./PredictWeather";
import HourTemp from "./HourTemp";

const RightSide = () => {
  return (
    <Stack direction="column" width="calc(100% - 185px)">
      <PredictWeather />
      <HourTemp />
    </Stack>
  );
};

export default RightSide;
