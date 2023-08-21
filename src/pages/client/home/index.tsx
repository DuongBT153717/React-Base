import { Box, Container } from "@mui/material";
import BG_BODY from "../../../assets/images/bg-body.png";
import BG_BODY_DARK from '../../../assets/images/bg-dark.jpg';
import useBackGround from "../../../hooks/useBackGround";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import Supplies from "./components/Supplies";
const ClientIntro = () => {
  const isLight = useBackGround()
  return (
    <>
      <Hero />
      <Box
        sx={{
          backgroundImage: isLight? `url(${BG_BODY})`: `url(${BG_BODY_DARK})`,
          width: "100%",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Feature />
        </Container>
        <Introduce />
        <Container maxWidth="lg">
          <Supplies />
        </Container>
      </Box>
    </>
  );
};

export default ClientIntro;
