import React from "react";
import LeftCard from "./LeftCard";
import { Stack } from '@mui/material';
import { leftCard } from "../../../../services/raw_data";



const LeftSide = () => {
  return (
    <Stack spacing={-1} style={{}} display="flex" justifyContent="center" direction='column'>
      {  leftCard.map((item, index) => (            
      <LeftCard  title={item.title} num={item.num} sugest={item.sugest} avg={item.avg} index={index} />
    ))}
    
   
    </Stack>
  );
};

export default LeftSide;
