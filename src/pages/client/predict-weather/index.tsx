import { Box } from "@mui/material";
import BG_BODY from "../../../assets/images/bg-body.png";
import BG_BODY_DARK from "../../../assets/images/bg-dark.jpg";
import useBackGround from "../../../hooks/useBackGround";
import News from "./components/News";
import RightSide from "./components/RightSide";

export const ClientPredictWeather = () => {
  const isLight = useBackGround();
  return (
    <Box
      sx={{
        backgroundImage:`url(${BG_BODY})`,
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      width="100%"
    >
      <Box
        sx={{ maxWidth: "1500px", margin: "20px auto", padding: "0 20px", display: 'flex', gap: '40px' }}
      >
        <News />
        <RightSide />
      </Box>
    </Box>
  );
};
