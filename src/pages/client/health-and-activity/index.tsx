import { Box } from '@mui/material';
import BG_BODY from "../../../assets/images/bg-body.png";
import BG_BODY_DARK from "../../../assets/images/bg-dark.jpg";

import useBackGround from "../../../hooks/useBackGround";
import Statistics from './components/Statistics';

const ClientHealthAndActivity = () => {
  const isLight = useBackGround();
  
  return (
    <Box
      sx={{
        backgroundImage: `url(${BG_BODY})`,
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{ maxWidth: "1800px", margin: "0 auto", padding: "0 20px", }}
      >
        <Statistics />
      </Box>
    </Box>
  );
};

export default ClientHealthAndActivity;
