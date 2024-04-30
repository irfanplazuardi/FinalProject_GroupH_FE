import React from "react";
import Container from "./container";

const Progress = () => {
  return (
    <Container className="mb-4 rounded-3xl col-start-4 row-span-1 grid-rows-3 bg-[#F1F1F1]">
      <div className="flex justify-between w-full p-3 mt-1">
        <h2 className="pl-3">Progress</h2>
        <button className="pr-3 text-blue-600">see all</button>
      </div>
      <div className="flex items-center justify-between mr-3 ml-3 mb-3 h-12 rounded-3xl bg-white">
        <div className="pl-5">
          <h2>Matematika</h2>
        </div>
        <h2 className="pr-4">100</h2>
      </div>
      <div className="flex items-center justify-between mr-3 ml-3 mb-3 h-12 rounded-3xl bg-white">
        <div className="pl-5">
          <h2>Fisika</h2>
        </div>
        <h2 className="pr-4">100</h2>
      </div>
      <div className="flex items-center justify-between mr-3 ml-3 mb-3 h-12 rounded-3xl bg-white">
        <div className="pl-5">
          <h2>Kimia</h2>
        </div>
        <h2 className="pr-4">100</h2>
      </div>
    </Container>
  );
};

export default Progress;
