import { AppBar, Box, Button, Divider, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import LOGOBRAND from '../../assets/images/logo.png'
import { useState } from "react";


const ClientHeader = () => {
  const navItems = [
    {
      title: "TRANG CHỦ",
      url: "",
    },
    {
      title: "GIỚI THIỆU",
      url: "intro",
    },
    {
      title: "THỜI TIẾT",
      url: "weather",
    },
    {
      title: "CHỈ SỐ",
      url: "weather",
    },
    {
      title: "DỰ BÁO",
      url: "weather",
    },
    {
      title: "SỨC KHỎE",
      url: "weather",
    },
    {
      title: "CHỦ ĐỀ",
      url: "weather",
    },
    {
      title: "TIN TỨC",
      url: "weather",
    },
    {
      title: "LIÊN HỆ",
      url: "weather",
    },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <Link to={`/client/${item.url}`} style={{ textDecoration: "none" }}>
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title}></ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

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
            <Typography variant="h6" component="div" sx={{ fontSize: 25 }}>
              CENRE
            </Typography>
          </Box>
          <Box display="flex" gap="18px">
            <Link to="/a" style={{ textDecoration: "none" }}>
              <Typography sx={typoSX}>TRANG CHỦ</Typography>
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
                <Typography sx={{borderRight: '1px solid #000', paddingRight:'18px', color: isActive ? '#003B72': '#000','&:hover': {
                  color: 'blue',
                }}}>Gioi thieu</Typography>
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
                <Typography sx={{borderRight: '1px solid #000', paddingRight:'18px', color: isActive ? '#003B72': '#000','&:hover': {
                  color: 'blue',
                }}}>Thoi Tiet</Typography>
              )}
            </NavLink>
            <Link to="/c" style={{ textDecoration: "none" }}>
              <Typography sx={typoSX}>CHỈ SỐ MÔI TRƯỜNG</Typography>
            </Link>
            <Link to="/d" style={{ textDecoration: "none" }}>
              <Typography sx={typoSX}>DỰ BÁO KHÍ HẬU</Typography>
            </Link>
            <Link to="/e" style={{ textDecoration: "none" }}>
              <Typography sx={typoSX}>SỨC KHỎE & HOẠT ĐỘNG</Typography>
            </Link>
            <Link to="/f" style={{ textDecoration: "none" }}>
              <Typography sx={typoSX}>CHỦ ĐỀ</Typography>
            </Link>
            <Link to="/g" style={{ textDecoration: "none" }}>
              <Typography sx={typoSX}>TIN TỨC</Typography>
            </Link>
            <Link to="/h" style={{ textDecoration: "none" }}>
              <Typography sx={typoLast}>LIÊN HỆ</Typography>
            </Link>
          </Box>
          <Button variant="contained" size="small">
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
