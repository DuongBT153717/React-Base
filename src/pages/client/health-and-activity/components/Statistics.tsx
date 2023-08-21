import { Box } from "@mui/material";
import { Statistic } from "./Statistic";

const Statistics = () => {
  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.80)",
        width: "100%",
        mt: 3,
        mb: 3
      }}
    >
      <Statistic />
      <Statistic />
      <Statistic />
      <Statistic />
      <Box sx={{pb: 3}}></Box>
    </Box>
  );
};

export default Statistics;
