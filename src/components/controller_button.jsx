import React from "react";

const ControllerButton = () => {
  return (
    <div className="grid grid-rows-4 gap-4 mb-4">
      <div className="flex items-center justify-center h-12 rounded-3xl bg-[#F1F1F1]">
        <h2>Student Progress</h2>
      </div>
      <div className="flex items-center justify-center h-12 rounded-3xl bg-[#F1F1F1]">
        <h2>Make New Course</h2>
      </div>
      <div className="flex items-center justify-center h-12 rounded-3xl bg-[#F1F1F1]">
        <h2>New Announcement</h2>
      </div>
      <div className="flex items-center justify-center h-12 rounded-3xl bg-[#F1F1F1]">
        <h2>Student / Teacher List</h2>
      </div>
    </div>
  );
};

export default ControllerButton;
