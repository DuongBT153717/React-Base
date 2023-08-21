import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
export const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2} bgcolor='#000'>
      <Box display="flex" bgcolor="#333" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Seach" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
