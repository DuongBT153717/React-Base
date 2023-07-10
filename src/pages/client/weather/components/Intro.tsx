import React from "react";
import { Box, CardMedia, Typography, Card } from "@mui/material";

const Intro = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        height: "85vh",
        mt: 5,
      }}
    >
      <Card sx={{height: '100%'}}>
        <CardMedia
          component="iframe"
          image="https://www.youtube.com/embed/muuK4SpRR5M"
          sx={{height: '100%'}}
          
        />
      </Card>
    </Box>
  );
};

export default Intro;
