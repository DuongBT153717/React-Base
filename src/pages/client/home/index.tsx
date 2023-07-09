import { Typography, Box } from '@mui/material';
import Hero from "./components/Hero";
import Feature from './components/Feature';
import Introduce from './components/Introduce';
import Supplies from './components/Supplies';
import BG_BODY from '../../../assets/images/bg-body.png'

const ClientIntro = () => {
  return (
    <>
      <Hero />
      <Box sx={{backgroundImage: `url(${BG_BODY})`, width: '100%', backgroundPosition:'center'}}>
          <Feature />
          <Introduce />
          <Supplies />
      </Box>
    </>
  );
};

export default ClientIntro;
