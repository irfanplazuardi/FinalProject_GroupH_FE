import React from "react";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import { Outlet } from "react-router-dom";

const TableDashboard = () => {
  return (
    <>
      <Sidebar />
      <Container className="h-screen p-4 sm:ml-64 bg-[#D9D9D9] dark:bg-slate-500">
        <Container className="p-4 mb-4 flex justify-between items-center bg-gray-400 rounded-full dark:bg-slate-800 sticky top-3">
          <Navbar />
        </Container>
        <Outlet />
      </Container>
    </>
  );
};

export default TableDashboard;
