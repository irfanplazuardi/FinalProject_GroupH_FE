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
      <button className="w-full px-2 hover:bg-yellow-500 rounded-lg" onClick={toggleModal}>
        <FontAwesomeIcon icon={faPen} title="Edit" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="flex flex-col justify-center gap-4 bg-white p-8 rounded-lg xl:w-1/3 sm:w-1/2 h-fit">
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-2xl font-bold">Update Announcement</h1>
              <textarea className="bg-white p-2 border border-black rounded-lg w-full h-60" value={updatedAnnouncement} onChange={(e) => setUpdatedAnnouncement(e.target.value)}></textarea>
              <p>Are you sure want to announce this?</p>
            </div>
            <div className="flex flex-row justify-center gap-10">
              <button className="bg-black hover:bg-blue-800 text-white font-medium py-1 px-8 rounded-lg" onClick={handleUpdate}>
                Yes
              </button>
              <button className="bg-black hover:bg-blue-800 text-white font-medium py-1 px-8 rounded-lg" onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditAnnouncementModal;
