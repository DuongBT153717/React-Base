import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface SwiperNews {
  title: string;
  img: string;
}

const StyledButton = styled(Button)({
  background: "#1976D2",
  color: "white",
  borderRadius: "20px",
  padding: "8px 16px", 
  fontWeight: "bold",
  fontSize: "14px",
  transition: "background 0.3s, color 0.3s",
  "&:hover": {
    background: "#1976D2", 
  },
});

const NewsTitle = (props: SwiperNews) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "100",
      }}
    >
      <img
        src={props.img}
        alt={props.title}
        height="200px"
        width="100%"
        style={{
          objectFit: "cover",
          marginBottom: "10px",
          borderRadius: "8px",
        }}
      />
      <Typography variant="body1">{props.title}</Typography>
      <StyledButton>Read More</StyledButton>
    </Box>
  );
};

export default NewsTitle;
