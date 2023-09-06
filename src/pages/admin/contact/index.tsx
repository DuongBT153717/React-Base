import { Box, Button, Card, InputAdornment, LabelDisplayedRowsArgs, OutlinedInput, SvgIcon } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import Header from "../../../components/Header";
import { mockDataContacts } from '../../../services/raw_data';
import DataTable from "../../../components/DataTable";
const AdminContact = () => {
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <Box></Box>
        <Box display="flex" gap={1}>
          <GridToolbarFilterButton />
          <GridToolbarExport />
          <Button>Thêm</Button>
        </Box>
      </GridToolbarContainer>
    );
  }
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: () => {
        return (
          <Button
            variant="contained"
            sx={{ color: "#000", bgcolor: "rgb(94, 53, 177)" }}
          >
            Edit
          </Button>
        );
      },
    },
  ];
  return (
    <Box>
      <Header title="TEAM" subtitle="Managing the team Members" />
      <DataTable rows={mockDataContacts} columns={columns} />
    </Box>
  );
};

export default AdminContact;
