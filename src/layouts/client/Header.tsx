import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import LOGOBRAND from '../../assets/images/logo.png'


const ClientHeader = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#fff" }}>
      <Box>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={LOGOBRAND} height="65px" width="65px" />
            <Typography style={{fontFamily: "Helvetica"}} variant="h6" component="div" sx={{ fontSize: 25 }}>
              CENRE
            </Typography>
          </Box>
          <Box display="flex" gap="18px">
            <Link to="/a" style={{ textDecoration: "none"}}>
              <Typography style={{fontFamily: "Helvetica"}} sx={typoSX}>TRANG CHỦ</Typography>
            </Link>
            <NavLink
              to="/client/intro"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "" : "none",
                  textUnderlineOffset: isActive ? "5px" : "0",
                };
              }}
            >
              {({ isActive }) => (
                <Typography style={{fontFamily: "Helvetica"}} sx={{borderRight: '1px solid #000', paddingRight:'18px', color: isActive ? '#003B72': '#000','&:hover': {
                  color: 'blue',
                }}}>GIỚI THIỆU</Typography>
              )}
            </NavLink>
            <NavLink
              to="/client/weather"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "" : "none",
                  textUnderlineOffset: isActive ? "5px" : "0",
                };
              }}
            >
              {({ isActive }) => (
                <Typography style={{fontFamily: "Helvetica"}} sx={{borderRight: '1px solid #000', paddingRight:'18px', color: isActive ? '#003B72': '#000','&:hover': {
                  color: 'blue',
                }}}>THỜI TIẾT</Typography>
              )}
            </NavLink>
            <Link to="/c" style={{ textDecoration: "none" }}>
              <Typography style={{fontFamily: "Helvetica"}} sx={typoSX}>CHỈ SỐ MÔI TRƯỜNG</Typography>
            </Link>
            <Link to="/d" style={{ textDecoration: "none" ,fontFamily: "Arial"}}>
              <Typography style={{fontFamily: "Helvetica"}} sx={typoSX}>DỰ BÁO KHÍ HẬU</Typography>
            </Link>
            <Link to="/e" style={{ textDecoration: "none" }}>
              <Typography style={{fontFamily: "Helvetica"}} sx={typoSX}>SỨC KHỎE & HOẠT ĐỘNG</Typography>
            </Link>
            <Link to="/f" style={{ textDecoration: "none" }}>
              <Typography style={{fontFamily: "Helvetica"}} sx={typoSX}>CHỦ ĐỀ</Typography>
            </Link>
            <Link to="/g" style={{ textDecoration: "none" }}>
              <Typography style={{fontFamily: "Helvetica"}} sx={typoSX}>TIN TỨC</Typography>
            </Link>
            <Link to="/h" style={{ textDecoration: "none" }}>
              <Typography style={{fontFamily: "Helvetica"}} sx={typoLast}>LIÊN HỆ</Typography>
            </Link>
          </Box>
          <Button variant="contained" size="small" style={{display: "inline-block",fontFamily: "Helvetica",fontSize: "13px"}}>
            Bà Rịa – Vũng Tàu
          </Button>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

const typoSX = {
  borderRight: '1px solid #000',
  paddingRight: "18px",
  "&:hover": {
    color: "blue",
  },
};

const typoLast = {
  "&:hover": {
    color: "blue",
  },
};
export default ClientHeader;
