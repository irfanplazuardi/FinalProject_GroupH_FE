import React, { useState } from "react";
import apiService from "../../api/api_service";

const CreateAnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [announcementDesc, setAnnouncementDesc] = useState("");
  const access_token = localStorage.getItem("access_token");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateAnnouncement = async () => {
    try {
      await apiService.postAnnouncement(announcementDesc, access_token);
      toggleModal();
      window.location.reload(); // Refresh the page to reflect the new announcement
    } catch (error) {
      console.error("Error creating announcement:", error);
    }
  };

  return (
    <>
      <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800" onClick={toggleModal}>
        New Announcement
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="flex flex-col justify-center gap-4 bg-white p-8 rounded-lg xl:w-1/3 sm:w-1/2 h-fit">
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-2xl font-bold">Create Announcement</h1>
              <textarea className="bg-white p-2 border border-black rounded-lg w-full h-[20vh]" value={announcementDesc} onChange={(e) => setAnnouncementDesc(e.target.value)}></textarea>
              <p>Are you sure you want to announce this?</p>
            </div>
            <div className="flex flex-row justify-center gap-10">
              <button className="bg-black hover:bg-blue-800 text-white font-medium py-1 px-[2rem] rounded-lg" onClick={handleCreateAnnouncement}>
                Yes
              </button>
              <button className="bg-black hover:bg-blue-800 text-white font-medium py-1 px-[2rem] rounded-lg" onClick={toggleModal}>
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAnnouncementModal;
