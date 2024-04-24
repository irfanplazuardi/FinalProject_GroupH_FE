import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home_page";
import Dashboard_page from "./pages/dashboard_page";
import Login_page from "./pages/login_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard_page />} />
        <Route path="/login" element={<Login_page />} />
      </Routes>
    </Router>
  );
}

export default App;
