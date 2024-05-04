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
import TableDashboard from "./pages/dashboards/table_dashboard";
import Course from "./components/course";
import Announcement from "./components/anouncement";
import TestPage from "./pages/test";
import ErrorPage from "./pages/error-page";
import CourseTable from "./components/tables/course_table";
import Profile from "./components/profile";
import StudentListTable from "./components/tables/student_list_table";
import TeacherListTable from "./components/tables/teacher_list_table";

const DashboardRouter = () => {
  const { role } = useParams();
  const location = useLocation();

  switch (role) {
    case "teacher":
      if (
        location.pathname.includes("create-course") ||
        location.pathname.includes("student-progress") ||
        location.pathname.includes("new-announcement") ||
        location.pathname.includes("teachers-list") ||
        location.pathname.includes("students-list")
      ) {
        return <TableDashboard />;
      }
      return <TeacherDashboard />;
    case "student":
      return <StudentDashboard />;
    default:
      return <Navigate to="/" />;
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
          <Route path="create-course" element={<CourseTable />} />
          <Route path="students-list" element={<StudentListTable />} />
          <Route path="teachers-list" element={<TeacherListTable />} />
          {/* <Route path="student-pogress" element={<ProgressTable />} />
          <Route path="new-announcement" element={<AnouncementTable />} />
          <Route path="member-list" element={<MemberTable />} /> */}
        </Route>
        <Route path="/testenv" element={<TestPage />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
