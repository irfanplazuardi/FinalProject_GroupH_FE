import React, { useState } from "react";
import ButtonStyle from "./button";
import PopUpWindowUpdate from "./pop_up_window/update_pop_up_window";
import { useNavigate } from "react-router-dom";

const ControllerButton = () => {
  const [isAnnouncementOpen, setAnnouncementOpen] = useState(false);
  const handleAnnouncementSubmit = (formData) => {
    console.log("Announcement Submitted", formData);
    setAnnouncementOpen(false);
  };
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
        <ButtonStyle onClick={() => setAnnouncementOpen(true)}>New Announcement</ButtonStyle>
      </div>
      <div className="flex items-center justify-center h-12 lg:text-sm xl:text-xl rounded-3xl">
        <ButtonStyle onClick={navigateToMemberList}>Student / Teacher List</ButtonStyle>
      </div>
      <PopUpWindowUpdate
        isOpen={isAnnouncementOpen}
        onClose={() => setAnnouncementOpen(false)}
        onSubmit={handleAnnouncementSubmit}
        title="New Announcement"
        validationText="Are you sure want to announce this?"
        buttonLeft="Yes"
        fields={announcementFields}
      />
    </div>
  );
};

export default ControllerButton;
