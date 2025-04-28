import "./App.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { IRISH_WORD_FREQUENCY } from "./IRISH_WORD_FREQUENCY";

const columns: GridColDef[] = [
  { field: "rank", headerName: "Rank", type: "number" },
  { field: "lemma", headerName: "Word", type: "string", flex: 1 },
  { field: "frequency", headerName: "Frequency", type: "number", width: 125 },
];

function App() {
  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Irish Word Frequency
          </Typography>
          <Typography variant="body2" gutterBottom>
            This is a list of approximately 6,500 Irish lemmas (words) ordered
            by frequency of use.{" "}
            <Link href="https://cadhan.com/lsg/">Michal Měchura</Link> extracted
            this dataset from the Irish half of the{" "}
            <Link href="https://corpas.focloir.ie/">
              New Corpus for Ireland
            </Link>{" "}
            up and then cleaned up by cross-checking against a large-coverage
            lexicon (Kevin Scannell's{" "}
            <Link href="https://cadhan.com/lsg/">
              Líonra Séimeantach na Gaeilge
            </Link>
            ). It was been made available for use under the{" "}
            <Link href="https://opendatacommons.org/licenses/odbl/summary/">
              Open Database License
            </Link>
            .
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href="https://github.com/michmech/irish-word-frequency"
          >
            Source for dataset
          </Button>
        </CardActions>
      </Card>
      <Paper>
        <DataGrid
          rows={IRISH_WORD_FREQUENCY}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          showToolbar
          sx={{ border: 0 }}
          getRowId={({ rank }) => rank}
          sortModel={[
            {
              field: "frequency",
              sort: "desc",
            },
          ]}
        />
      </Paper>
    </>
  );
}

export default App;
