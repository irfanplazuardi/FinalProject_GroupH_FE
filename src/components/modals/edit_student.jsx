import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import apiService from "../../api/api_service";

const EditStudentModal = ({ studentID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedStudent, setUpdatedStudent] = useState({
    studentName: "",
    studentPhone: "",
    studentEmail: "",
  });
  const access_token = localStorage.getItem("access_token");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const updatedFields = {};
    if (updatedStudent.studentName) updatedFields.student_name = updatedStudent.studentName;
    if (updatedStudent.studentPhone) updatedFields.phone = updatedStudent.studentPhone;
    if (updatedStudent.studentEmail) updatedFields.student_email = updatedStudent.studentEmail;
    try {
      await apiService.putStudentID(studentID, updatedFields, access_token);
      toggleModal();
      window.location.reload();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <button className="px-2 hover:bg-yellow-500 rounded-lg" onClick={toggleModal}>
        <FontAwesomeIcon icon={faPen} title="Edit" />
      </button>
      {isOpen && (
        <form onSubmit={handleUpdate}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="flex flex-col justify-center gap-5 bg-white p-8 rounded-lg w-1/2 h-fit">
              <h2 className="text-2xl font-bold mb-5 px-5">Update Student</h2>
              <div className="flex flex-col justify-center justify-center items-center gap-5">
                <div className="flex flex-col justify-center ">
                  <label className="text-ml">Student Name</label>
                  <input type="text" name="studentName" value={updatedStudent.studentName} onChange={handleChange} placeholder="Samuel" className="w-[40vw] p-1 border border-gray-300 bg-gray-200  rounded-lg" />
                </div>
                <div className="flex flex-col justify-center">
                  <label className="text-ml">Student Phone</label>
                  <input type="text" name="studentPhone" value={updatedStudent.studentPhone} onChange={handleChange} placeholder="0815261512" className="w-[40vw] p-1 border border-gray-300 bg-gray-200 rounded-lg " />
                </div>
                <div className="flex flex-col justify-center">
                  <label className="text-ml">Student Email</label>
                  <input type="text" name="studentEmail" value={updatedStudent.studentEmail} onChange={handleChange} placeholder="student@gmail.com " className="w-[40vw] p-1 border border-gray-300 bg-gray-200 rounded-lg " />
                </div>
              </div>
              <div className="flex justify-center items-center mt-10">
                <button type="submit" className="bg-black hover:bg-blue-800 text-white font-medium py-4 px-[4vh] rounded-lg mr-4">
                  Yes
                </button>
                <button className="bg-red-500 hover:bg-gray-400 text-black font-medium py-4 px-[4vh] rounded-lg" onClick={toggleModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default EditStudentModal;
