import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home_page";
import Dashboard_page from "./pages/dashboard_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard_page />} />
      </Routes>
    </Router>
  );
}

export default App;
