import { Outlet } from "react-router-dom";
import { Topbar } from "./Topbar";
import { Box } from "@mui/material";
import SidebarAdmin from "./Sidebar";

const AdminLayout = () => {
  return (
    <>
      <Box display="flex" height="100vh" bgcolor="rgb(238, 242, 246)">
        <SidebarAdmin />
        <Box flex={1} sx={{overflowX: 'hidden'}}>
          <Topbar />
          <Box pl={2} pt={2} pr={2}  sx={{borderRadius: '12px 12px 0px 0px'}}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
