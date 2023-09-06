import { Box, Container } from "@mui/material";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import ClientFooter from "./Footer";
import ClientHeader from "./Header";

const ClientLayout = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ClientHeader />
        <Container>
          <Outlet />
        </Container>
        <ClientFooter />
      </Box>
    </Fragment>
  );
};

export default ClientLayout;
