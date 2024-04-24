import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home_page";
import Login from "./pages/login";
import CreateAccount from "./pages/create_account";

function App() {
  return (
    <Router>
      <AppBody /> {/* Include the AppBody component within the Router */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;

function AppBody() {
  const location = useLocation();

  useEffect(() => {
    const { backgroundColor, backgroundImage } = getBackgroundStyles(
      location.pathname
    );

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.backgroundImage = `url(${backgroundImage})`; // Enclose backgroundImage value in quotes and use backticks

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
    };
  }, [location.pathname]);

  const getBackgroundStyles = (pathname) => {
    switch (pathname) {
      case "/":
        return { backgroundColor: "#D9D9D9", backgroundImage: "none" }; // Fixed the backgroundImage value
      case "/login":
        return { backgroundColor: "#f2f2f2", backgroundImage: "none" };
      default:
        return { backgroundColor: "#f2f2f2", backgroundImage: "none" };
    }
  };

  return null;
}
