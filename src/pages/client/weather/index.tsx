import React from 'react';
import { Box ,Typography} from '@mui/material';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Intro from './components/Intro';
import BG_BODY from '../../../assets/images/bg-body.png';
import UnRightSide from './components/UnRightSide';

const ClientWeather = () => {
  return (
    <>
      <Intro />
      
      <Box sx={{ backgroundImage: `url(${BG_BODY})`, width: '100%', backgroundPosition: 'center', backgroundSize: 'cover' }} px='45px' width='100%'>
      <Typography
       sx={{fontSize:"30px",ml:"210px",mt:"20px",fontWeight:"20px",color:"#003B72"}}>
      DỰ BÁO CHI TIẾT
      </Typography>
        <Box display="flex" gap='35px'>
          <LeftSide />
          <RightSide />
        </Box>
       
      </Box>
    </>
  );
};

export default ClientWeather;
