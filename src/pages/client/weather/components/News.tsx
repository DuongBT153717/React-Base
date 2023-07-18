import { Box, Stack, Typography, Container, Button } from "@mui/material";
import PICTURE from "../Rectangle 112.png";
import { newsMain } from "../../../../services/raw_data";

const News = () => {
  return (
    <Box display="flex" borderRadius="8px">
      <Box sx={{ flex: 1 }} bgcolor="rgba(255, 255, 255, 0.7)" mt="30px" padding="40px" borderRadius="8px">
        <Container maxWidth="lg">
          <Stack direction="column">
            <Box display="flex" alignItems="flex-start" mt="-30px" paddingTop="40px">
              {/* Picture card */}
              <Box sx={{ width: "500px", borderRadius: "10px", marginRight: "20px" }}>
                <img src={PICTURE} alt="Your Image" style={{ width: "100%", borderRadius: "10px" }} />
              </Box>
              {/* Typography */}
              <Box>     
              </Box>
            </Box>
            <Box mt="20px">
              {/* Additional content */}
              <Typography>
              {newsMain.map((item)=> (
                item.title
              ))}
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default News;
