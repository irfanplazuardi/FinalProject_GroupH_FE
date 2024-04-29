import Sidebar from "../../../components/sidebar";
import Container from "../../../components/container";
import Navbar from "../../../components/navbar";
import ControllerButton from "../../../components/controller_button";
import Schedule from "../../../components/schedule";
import { Outlet } from "react-router-dom";

export default function TeacherController() {
  return (
    <>
      <Sidebar />
      <Container className="h-screen p-4 sm:ml-64 bg-[#D9D9D9]">
        <Container className="p-4 mb-4 flex justify-between items-center bg-white rounded-full ">
          <Navbar />
        </Container>
        <Container className="grid grid-cols-4 grid-rows-2 gap-4 mb-4">
          <Container className="flex justify-center rounded-3xl col-span-3 row-span-2 bg-white ">
            <Outlet />
          </Container>
          <ControllerButton />
          <Schedule />
        </Container>
      </Container>
    </>
  );
}
