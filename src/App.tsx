import "./App.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper, Typography } from "@mui/material";
import { IRISH_WORD_FREQUENCY } from "./IRISH_WORD_FREQUENCY";

const columns: GridColDef[] = [
  { field: "rank", headerName: "Rank", type: "number" },
  { field: "lemma", headerName: "Word", type: "string" },
  { field: "frequency", headerName: "Frequency", type: "number" },
];

function App() {
  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
      <Typography variant="body1" gutterBottom>
        Irish Word Frequency
      </Typography>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={IRISH_WORD_FREQUENCY}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          showToolbar
          sx={{ border: 0 }}
          getRowId={({ rank }) => rank}
        />
      </Paper>
    </>
  );
}

export default App;
