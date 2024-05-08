import { useParams, Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home_page";
import Login from "./pages/login";
// import CreateAccount from "./pages/create_account";
import CreateAccountCopy from "./pages/create_account_copy";
import TeacherDashboard from "./pages/dashboards/teacher_dashboard";
import StudentDashboard from "./pages/dashboards/student_dashboard";
import TableDashboard from "./pages/dashboards/table_dashboard";
import Course from "./components/course";
import Announcement from "./components/anouncement";
import TestPage from "./pages/test";
import ErrorPage from "./pages/error-page";
import CourseTable from "./components/tables/course_table";
import Profile from "./components/profile";
import ListTable from "./components/tables/list_table";
import Settings from "./components/settings";
// import ProtectedRoutes from "./layouts/protected_route";
import { DarkModeProvider } from "./components/settings_darkmode/dark_mode_context";
const DashboardRouter = () => {
  const { role } = useParams();
  const location = useLocation();
  const storedRole = localStorage.getItem("role");

  switch (role) {
    case "teacher":
      if (storedRole === "student") {
        return <Navigate to="/dashboard/student/course" />;
      }
      if (location.pathname.includes("create-course") || location.pathname.includes("student-progress") || location.pathname.includes("new-announcement") || location.pathname.includes("member-list")) {
        return <TableDashboard />;
      }
      return <TeacherDashboard />;
    case "student":
      if (storedRole === "teacher") {
        return <Navigate to="/dashboard/teacher/course" />;
      }
      return <StudentDashboard />;
    default:
      return <Navigate to="/" />;
  }
};

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccountCopy />} />
          <Route path="/testenv" element={<TestPage />}></Route>
          <Route path="*" element={<ErrorPage />} />

          {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/dashboard/:role" element={<DashboardRouter />}>
            <Route path="course" element={<Course />} />
            <Route path="announcement" element={<Announcement />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="create-course" element={<CourseTable />} />
            <Route path="member-list" element={<ListTable />} />
            {/* <Route path="student-pogress" element={<ProgressTable />} />
          <Route path="new-announcement" element={<AnouncementTable />} />
          <Route path="member-list" element={<MemberTable />} /> */}
          </Route>
          {/* </Route> */}
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
