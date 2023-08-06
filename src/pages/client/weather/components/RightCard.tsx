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
    <Card sx={{ mt: 2,borderRadius: '20px',backgroundColor:"rgba(255, 255, 255, 0.7)",width:'200px'}}>
      <CardContent sx={{ display: 'flex',alignItems:'center',mx:'10px',justifyContent:'space-between' }}>
       <Box >
       <Typography sx={{ fontSize:10,fontWeight:"30px",maxWidth:"100px"}}>
          {props.title}
        </Typography>
        <Typography  color="text.secondary">
          {props.type}
        </Typography>
       </Box>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <img 
            src={`${props.logo}`}
            height="30px"
            width="30px"
          />
        <Typography sx={{fontSize:"12px" }}>
          {props.num}
        </Typography>
      </Box>
      </CardContent>
    </Card>
  );
};

export default RightCard;
