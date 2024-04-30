import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home_page";
import Login from "./pages/login";
import CreateAccount from "./pages/create_account";
import DashboardTeacher from "./pages/dashboards/teacher_dashboard";
import DashboardStudent from "./pages/dashboards/student_dashboard";
import StudentMaterial from "./pages/student_controller/student_material";
import StudentAdditional from "./pages/student_controller/student_addition"

function App() {
  return (
    <Router>
      <AppBody />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        {/* Student */}
        {/* <Route path="/dashboard" element={<DashboardStudent />} />
        <Route path="/dashboard/material" element={<StudentMaterial />} />
        <Route path="/dashboard/material/additional" element={<StudentAdditional />} /> */}
        {/* teacher */}
        <Route path="/dashboard" element={<DashboardTeacher />} />

      </Routes>
    </Router>
  );
}

export default App;

function AppBody() {
  const location = useLocation();

  useEffect(() => {
    const { backgroundColor, backgroundImage } = getBackgroundStyles(location.pathname);

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.backgroundImage = `url(${backgroundImage})`;

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
    };
  }, [location.pathname]);

  const getBackgroundStyles = (pathname) => {
    switch (pathname) {
      case "/":
        return { backgroundColor: "#D9D9D9", backgroundImage: `none` };
      case "/login":
        return { backgroundColor: "#f2f2f2", backgroundImage: "none" };
      default:
        return { backgroundColor: "#f2f2f2", backgroundImage: "none" };
    }
  };

  return null;
}
