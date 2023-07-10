import React from 'react';
import { Typography, Card, CardContent,Box } from '@mui/material';

interface IRightCard {
  title: string;
  num: string;
  type: string;
  logo: string;
  index: number;
}

const RightCard = (props: IRightCard) => {
  return (
    <Card sx={{ml:'10px', width: 300, mt: 2,borderRadius: '20px',backgroundColor:"rgba(255, 255, 255, 0.7)"}}>
      <CardContent sx={{ display: 'flex',alignItems:'center',mx:'10px',justifyContent:'space-between' }}>
       <Box >
       <Typography sx={{ fontSize: 20,fontWeight:"30px",maxWidth:"100px"}}>
          {props.title}
        </Typography>
        <Typography  color="text.secondary">
          {props.type}
        </Typography>
       </Box>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <img 
            src={`${props.logo}`}
            height="50px"
            width="50px"
          />
        <Typography sx={{fontSize:"16px" }}>
          {props.num}
        </Typography>
      </Box>
      </CardContent>
    </Card>
  );
};

export default RightCard;
