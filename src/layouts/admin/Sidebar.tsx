import AnalyticsIcon from "@mui/icons-material/Analytics";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import SourceIcon from "@mui/icons-material/Source";
import StyleIcon from "@mui/icons-material/Style";
import { Box, IconButton, Typography } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import USERICON from "../../assets/images/user.png";
import SettingsIcon from '@mui/icons-material/Settings';
const SidebarAdmin = () => {
  const { collapseSidebar, toggleSidebar, broken, collapsed } = useProSidebar();
  return (
    <>
      <Sidebar
        style={{
          height: "100%",
          top: "auto",
          border: 0,
          
        }}
        breakPoint="md"
        backgroundColor="#fff"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          ml="15px"
          mb="25px"
        >
          {!collapsed ? (
            <Typography variant="h3" color="#000">
              ADMINIS
            </Typography>
          ) : null}
          <IconButton
            onClick={() => {
              broken ? toggleSidebar() : collapseSidebar();
            }}
            sx={{color: 'rgb(94, 53, 177)'}} 
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box mb="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            {!collapsed ? (
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={USERICON}
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  marginBottom: "20px",
                }}
              />
            ) : null}
          </Box>
          <Box textAlign="center">
            {!collapsed ? (
              <Typography color="#000" sx={{ m: "10px 0 10px 0", fontSize: '20px', fontWeight: '700' }}>
                Ed Roh
              </Typography>
            ) : null}
            {!collapsed ? (
              <Typography variant="h5" color="#000">
                VP Fancy Admin
              </Typography>
            ) : null}
          </Box>
        </Box>
        <Menu
          menuItemStyles={{
            button: ({ active }) => {
              return {
                backgroundColor: active ? "#fff" : undefined,
                color: '#000',
                '&:hover': {
                  backgroundColor: 'rgb(237, 231, 246)',
                  color: 'rgb(94, 53, 177)',
                  borderRadius: '10px',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  marginLeft: '10px',
                  marginRight: '10px',
               },
              };
            },
            
          }}
        >
          <MenuItem
            active={location.pathname === "/admin"}
            icon={<DashboardIcon />}
            component={<Link to="/admin" />}
          >
            {" "}
            Dashboard{" "}
          </MenuItem>
          <MenuItem
            icon={<SourceIcon />}
            component={<Link to="/admin/contact" />}
          >
            {" "}
            Contact{" "}
          </MenuItem>
          <MenuItem icon={<AnalyticsIcon />}> Analytics </MenuItem>
          <MenuItem icon={<StyleIcon />} component={<Link to="/admin/profile" />}> Profile </MenuItem>
          <MenuItem icon={<SettingsIcon />} component={<Link to="/admin/changepassword" />}> Change Password </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SidebarAdmin;
