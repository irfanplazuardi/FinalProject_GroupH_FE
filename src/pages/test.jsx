import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Container from "../components/container";
import CourseTable from "../components/tables/course_table";
import { Outlet } from "react-router-dom";

const TestPage = () => {
  return (
    <>
      <Sidebar />
      <Container className="h-screen p-4 sm:ml-64 bg-white">
        <Container className="p-4 mb-4 flex justify-between items-center bg-gray-200 rounded-full ">
          <Navbar />
        </Container>
        <CourseTable />
        <Outlet />
      </Container>
    </>
  );
};

export default TestPage;
