import React from "react";
import Container from "./container";

const Schedule = () => {
  return (
    <Container className="mb-4 rounded-3xl col-start-4 row-span-2 grid-rows-3 bg-[#F1F1F1]">
      <div className="flex justify-between w-full p-3 mt-1">
        <h2 className="pl-3">Schedules</h2>
        <button className="pr-3 text-blue-600">see all</button>
      </div>
      <div className="flex justify-between mr-3 ml-3 mb-3 h-12 rounded-3xl bg-white">
        <div className="pl-5">
          <h2>Matematika</h2>
          <h2>Bambang S.Pd</h2>
        </div>
        <h2 className="pr-4">07.30 WIB</h2>
      </div>
      <div className="flex justify-between mr-3 ml-3 mb-3 h-12 rounded-3xl bg-white">
        <div className="pl-5">
          <h2>Matematika</h2>
          <h2>Bambang S.Pd</h2>
        </div>
        <h2 className="pr-4">07.30 WIB</h2>
      </div>
      <div className="flex justify-between mr-3 ml-3 h-12 rounded-3xl bg-white">
        <div className="pl-5">
          <h2>Matematika</h2>
          <h2>Bambang S.Pd</h2>
        </div>
        <h2 className="pr-4">07.30 WIB</h2>
      </div>
    </Container>
  );
};

export default Schedule;
