import { useParams, Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home_page";
import Login from "./pages/login";
import CreateAccount from "./pages/create_account";
import TeacherDashboard from "./pages/dashboards/teacher_dashboard";
import StudentDashboard from "./pages/dashboards/student_dashboard";
import Course from "./components/course";
import Announcement from "./components/anouncement";
import TestPage from "./pages/test";
import ErrorPage from "./pages/error-page";
import Profile from "./components/profile";

const DashboardRouter = () => {
  const { role } = useParams();
  switch (role) {
    case "teacher":
      return <TeacherDashboard />;
    case "student":
      return <StudentDashboard />;
    default:
      return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard/:role" element={<DashboardRouter />}>
          <Route path="course" element={<Course />} />
          <Route path="announcement" element={<Announcement />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="settings" element={<Settings />} /> */}
        </Route>
        {/* <Route path="/dashboard/teacher" element={<HomePage />}>
          <Route path="create-course" element={<Course />} />
        </Route> */}
        <Route path="/testenv" element={<TestPage />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
