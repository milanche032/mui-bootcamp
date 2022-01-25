import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Notes />} path="/" />
        <Route element={<Create />} path="/create" />
      </Routes>
    </Router>
  );
}

export default App;
