import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import apiService from "../../api/api_service";

const EditAnnouncementModal = ({ announcementID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedAnnouncement, setUpdatedAnnouncement] = useState("");
  const access_token = localStorage.getItem("access_token");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = async () => {
    try {
      await apiService.putAnnouncementID(announcementID, updatedAnnouncement, access_token);
      toggleModal();
      window.location.reload();
    } catch (error) {
      console.error("Error updating announcement:", error);
    }
  };

  return (
    <>
      <button className="px-2 hover:bg-red-500 rounded-lg" onClick={toggleModal}>
        <FontAwesomeIcon icon={faPen} title="Edit" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="flex flex-col justify-center gap-4 bg-white p-8 rounded-lg w-[25vw] h-[40vh]">
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-2xl font-bold">Update Announcement</h1>
              {/* Bind the value of the textarea to updatedAnnouncement state */}
              <textarea className="bg-white p-2 border border-black rounded-lg w-[20vw] h-[20vh]" value={updatedAnnouncement} onChange={(e) => setUpdatedAnnouncement(e.target.value)}></textarea>
              <p>Are you sure want to announce this?</p>
            </div>
            <div className="flex flex-row justify-center gap-10">
              <button className="bg-black hover:bg-blue-800 text-white font-medium py-1 px-[2rem] rounded-lg" onClick={handleUpdate}>
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

export default EditAnnouncementModal;
