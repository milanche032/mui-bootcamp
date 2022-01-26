import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { indigo } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: "#69c0ae",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route element={<Notes />} path="/" />
            <Route element={<Create />} path="/create" />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
