import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  pallete: {
    primary: {
      main: "#000000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<Notes />} path="/" />
          <Route element={<Create />} path="/create" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
