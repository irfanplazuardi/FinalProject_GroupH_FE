import Sidebar from "../../components/sidebar";
import Container from "../../components/container";
import Navbar from "../../components/navbar";
import Progress from "../../components/progress";
import Schedule from "../../components/schedule";
import { Outlet } from "react-router-dom";

export default function StudentDashboard() {
  return (
    <>
      <Sidebar />
      <Container className="lg:h-full xl:h-full p-4 sm:ml-64 bg-[#D9D9D9] dark:bg-slate-500 md:h-full sm:h-full">
        <Container className="p-4 mb-4 flex justify-between items-center bg-white rounded-full dark:bg-slate-800 sticky top-3">
          <Navbar />
        </Container>
        <Container className="sm:grid grid-cols-4 grid-rows-2 gap-4 mb-4 md:grid-cols-1 lg:grid-cols-4">
          <Container className="flex mb-4 xl:h-screen lg:h-screen md:h-screen sm:h-screen justify-center rounded-3xl col-span-3 row-span-2 bg-white overflow-y-auto dark:bg-slate-800">
            <Outlet />
          </Container>
          <Progress />
          <Schedule />
        </Container>
      </Container>
    </>
  );
}
