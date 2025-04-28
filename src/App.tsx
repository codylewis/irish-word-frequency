import "./App.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

const columns: GridColDef[] = [
  { field: "rank", headerName: "Rank", type: "number" },
  { field: "word", headerName: "Word", type: "string" },
  { field: "frequency", headerName: "Frequency", type: "number" },
];

const rows: string[] = [];

function App() {
  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
}

export default App;
