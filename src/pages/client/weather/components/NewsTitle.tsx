import { Box, Typography } from "@mui/material";

interface SwiperNews {
  title: string;
  img: string;
}



const NewsTitle = (props: SwiperNews) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth:"45%",
        padding: '20px 20px 32px 20px',
        borderRadius: "8px",
      }}
    >
      <img
        src={props.img}
        alt={props.title}
        height="310px"
        width="100%"
        style={{
          objectFit: "cover",
          marginBottom: "10px",
          borderRadius: "8px",
        }}
      />
      <Typography sx={{fontSize: '18px', mt: 1, lineHeight: 1.4}}>{props.title}</Typography>
    </Box>
  );
};

export default NewsTitle;
