import { Box } from "@mui/material";
import Filters from "./Filters";
import HotNews from "./HotNews";
import SearchBar from "./SearchBar";

const RightSide = () => {
  return (
    <Box
      sx={{
        mt: 3,
        flex: 1
      }}
    >
      <SearchBar />
      <Filters />
      <HotNews />
    </Box>
  );
};

export default RightSide;
