import { Box, Button, Grid, Typography } from "@mui/material";
import Header from "../../../components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataTeam } from "../../../services/raw_data";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import DataTable from "../../../components/DataTable";
const AdminTeam = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            margin="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor={access === "admin" ? "#3da58a" : "#2e7c67"}
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsIcon />}
            {access === "manager" && <SecurityIcon />}
            {access === "user" && <LockOpenIcon />}
            <Typography color="#d0d1d5" sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header title="TEAM" subtitle="Managing the team Members" />
        <DataTable rows={mockDataTeam} columns={columns} />
      </Grid>
    </Grid>
  );
};

export default AdminTeam;
