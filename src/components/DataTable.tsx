import { Box, Button, LabelDisplayedRowsArgs } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import React from "react";

interface IDataTable {
  rows: any;
  columns: any;
}
const DataTable = ({ rows, columns }: IDataTable) => {
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
  return (
    <Box
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: "#94e2cd",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "rgb(248, 249, 250)",
          borderBottom: "none",
          color: "#000",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: "#fff",
          // height: '420px'
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "1px solid rgba(224, 224, 224, 1)",
          backgroundColor: "#fff",
        },
        "& .MuiCheckbox-root": {
          color: `"#b7ebde" !important`,
        },
        "& .MuiDataGrid-cellContent": {
          color: "#000",
        },
        "& .MuiButton-textPrimary": {
          color: "#000",
        },
        "& .MuiDataGrid-toolbarContainer": {
          marginBottom: "10px",
          justifyContent: "space-between",
        },
        // "& .MuiButtonBase-root ": {
        //   bgcolor: "#fff",
        //   color: '#000'
        // },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: "700",
        },
      }}
    >
      <DataGrid
        disableRowSelectionOnClick
        autoHeight  
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        slots={{ toolbar: CustomToolbar }}
        localeText={{
          toolbarExport: "Xuất file",
          toolbarFilters: "Lọc",
          toolbarExportCSV: "Download dạng CSV",
          toolbarExportPrint: "In",
          columnMenuSortAsc: "Sắp xếp giảm dần",
          columnMenuSortDesc: "Sắp xếp tăng dần",
          columnMenuFilter: "Lọc",
          columnMenuHideColumn: "Ẩn cột",
          columnMenuManageColumns: "Hiện tất cả các cột",
          filterPanelColumns: 'Cột',
          filterPanelOperator: 'Lọc theo',
          filterOperatorContains: 'Chứa',
          filterOperatorEquals: 'Bằng',
          filterOperatorStartsWith: 'Bắt đầu bằng',
          filterOperatorEndsWith: 'Kết thúc bằng',
          filterPanelInputPlaceholder: 'Giá trị lọc',
          filterPanelInputLabel: 'Giá trị',
          filterOperatorIsEmpty: 'Trống',
          filterOperatorIsNotEmpty: 'Có giá trị',
          filterOperatorIsAnyOf: 'Chứa bất kì',
          columnsPanelTextFieldPlaceholder: 'Tên cột',
          columnsPanelHideAllButton: 'Ẩn tất cả các cột',
          columnsPanelShowAllButton: 'Hiện tất cả các cột',
          columnsPanelTextFieldLabel: 'Tìm cột'
        }}
      />
    </Box>
  );
};

export default DataTable;
