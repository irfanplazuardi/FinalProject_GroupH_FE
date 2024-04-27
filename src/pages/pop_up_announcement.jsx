import React, { useState } from "react";
import ButtonStyle from "../components/button";
import CustomInput from "../components/custom_input_label";

const AnnouncementPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    announcement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("announcement submitted:", formData);
  };
  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white p-10 rounded-lg shadow-md">
          <h2 className="text-3xl text-left font-semibold mb-10">
            Announcement
          </h2>
          <form onSubmit={handleSubmit}>
            <CustomInput
              label="Description" // Pass label prop for Email field
              type="text"
              id="announcement"
              name="announcement"
              heightOfInput="32"
              value={formData.announcement}
              onChange={handleChange}
            />

            <div className="flex justify-end mt-10">
              <ButtonStyle className="mr-10">Announce</ButtonStyle>
              <ButtonStyle onClick={onClose}>Cancel</ButtonStyle>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AnnouncementPopup;
