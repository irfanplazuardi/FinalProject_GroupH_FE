import React, { useState } from "react";
import ButtonStyle from "./button";
import { useNavigate } from "react-router-dom";
import CreateAnnouncementModal from "./modals/create-announcement";

const ControllerButton = () => {
  const [isAnnouncementOpen, setAnnouncementOpen] = useState(false);

  const announcementFields = [{ name: "announcement", label: "Announcement", type: "text" }];

  const navigate = useNavigate();
  const navigateToNewCourse = () => {
    navigate("/dashboard/teacher/create-course");
  };

  const navigateToMemberList = () => {
    navigate("/dashboard/teacher/member-list");
  };

  return (
    <div className="grid grid-rows-4 gap-4 mb-4">
      <div className="flex items-center justify-center h-12 lg:text-sm xl:text-xl rounded-3xl">
        <ButtonStyle>Student Progress</ButtonStyle>
      </div>
      <div className="flex items-center justify-center h-12 lg:text-sm xl:text-xl rounded-3x">
        <ButtonStyle onClick={navigateToNewCourse}>Make New Course</ButtonStyle>
      </div>
      <div className="flex items-center justify-center h-12 lg:text-sm xl:text-xl rounded-3xl">
        <CreateAnnouncementModal />
      </div>
      <div className="flex items-center justify-center h-12 lg:text-sm xl:text-xl rounded-3xl">
        <ButtonStyle onClick={navigateToMemberList}>Student / Teacher List</ButtonStyle>
      </div>
    </div>
  );
};

export default ControllerButton;
