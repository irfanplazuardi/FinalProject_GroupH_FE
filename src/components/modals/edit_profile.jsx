import React, { useState } from "react";
import apiService from "../../api/api_service";

const EditProfileModal = ({ title, fieldName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileData, setProfileData] = useState("");
  const access_token = localStorage.getItem("access_token");
  const role = localStorage.getItem("role");
  const user_id = localStorage.getItem("user_id");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleEditProfile = async () => {
    try {
      await apiService.putUserData(role, user_id, fieldName, profileData, access_token);
      toggleModal();
      window.location.reload(); // Refresh the page to reflect the new announcement
    } catch (error) {
      console.error("Error creating announcement:", error);
    }
  };

  return (
    <>
      <button className="w-24 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800" onClick={toggleModal}>
        Change
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="flex flex-col justify-center gap-4 bg-white p-8 rounded-lg xl:w-1/5 sm:w-1/2 h-fit">
            <div className="flex flex-col justify-start gap-2">
              <h1 className="text-2xl font-bold pb-8">Change {title}</h1>
              <h2 className="text-xl font-bold">New {title}</h2>
              <input className="bg-white p-2 border border-black rounded-lg w-full h-[4vh]" value={profileData} onChange={(e) => setProfileData(e.target.value)}></input>
              <p className="flex justify-center text-center py-5 text-lg lowercase">Are you sure want to change your {title}?</p>
            </div>
            <div className="flex flex-row justify-center gap-10">
              <button className="bg-black hover:bg-blue-800 text-white font-medium py-1 px-[2rem] rounded-lg" onClick={handleEditProfile}>
                Yes
              </button>
              <button className="bg-black hover:bg-blue-800 text-white font-medium py-1 px-[2rem] rounded-lg" onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfileModal;
