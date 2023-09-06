import { Stack } from "@mui/material";
import HourTemp from "./HourTemp";
import News from "./News";
import PredictWeather from "./PredictWeather";

const RightSide = () => {
  return (
      <Stack direction='column' width="calc(100% - 225px)" mb={3}>
        <PredictWeather />
        <HourTemp />
        <News />
      </Stack>
  );
};

export default RightSide;
