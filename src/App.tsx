import "./App.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Link,
  Paper,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { IRISH_WORD_FREQUENCY } from "./IRISH_WORD_FREQUENCY";
import { useMemo } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const columns: GridColDef[] = [
  { field: "rank", headerName: "Rank", type: "number" },
  { field: "lemma", headerName: "Word", type: "string", flex: 1 },
  { field: "frequency", headerName: "Frequency", type: "number", width: 150 },
];

function App() {
  const paginationModel = { page: 0, pageSize: 5 };
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ padding: 1 }}>
        <Typography variant="body1" gutterBottom>
          Irish Word Frequency
        </Typography>
        <Typography variant="body2" gutterBottom>
          This is a list of approximately 6,500 Irish lemmas (words) ordered by
          frequency of use.{" "}
          <Link
            href="https://www.lexiconista.com/"
            target="_blank"
            rel="noopener"
          >
            Michal Měchura
            <OpenInNewIcon fontSize="inherit" sx={{ marginLeft: 0.5 }} />
          </Link>{" "}
          extracted this{" "}
          <Link
            href="https://github.com/michmech/irish-word-frequency"
            target="_blank"
            rel="noopener"
          >
            dataset
            <OpenInNewIcon fontSize="inherit" sx={{ marginLeft: 0.5 }} />
          </Link>{" "}
          from the Irish half of the{" "}
          <Link
            href="https://corpas.focloir.ie/"
            target="_blank"
            rel="noopener"
          >
            New Corpus for Ireland
            <OpenInNewIcon fontSize="inherit" sx={{ marginLeft: 0.5 }} />
          </Link>{" "}
          and then cleaned it up by cross-checking against a large-coverage
          lexicon (Kevin Scannell's{" "}
          <Link href="https://cadhan.com/lsg/" target="_blank" rel="noopener">
            Líonra Séimeantach na Gaeilge
            <OpenInNewIcon fontSize="inherit" sx={{ marginLeft: 0.5 }} />
          </Link>
          ). The dataset has been made available for use under the{" "}
          <Link
            href="https://opendatacommons.org/licenses/odbl/summary/"
            target="_blank"
            rel="noopener"
          >
            Open Database License
            <OpenInNewIcon fontSize="inherit" sx={{ marginLeft: 0.5 }} />
          </Link>
          .
        </Typography>
        <Paper
          sx={{
            marginTop: 1,
          }}
        >
          <DataGrid
            rows={IRISH_WORD_FREQUENCY}
            columns={columns}
            initialState={{
              pagination: { paginationModel },
              sorting: {
                sortModel: [{ field: "frequency", sort: "desc" }],
              },
            }}
            pageSizeOptions={[5, 10]}
            showToolbar
            getRowId={({ rank }) => rank}
          />
        </Paper>
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            size="small"
            href="https://github.com/codylewis/irish-word-frequency"
            startIcon={<GitHubIcon />}
          >
            Source code
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
