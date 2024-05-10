import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import apiService from "../../api/api_service";

const EditStudentModal = ({ studentID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedStudent, setUpdatedStudent] = useState({
    studentName: "",
    studentPhone: "",
    studentEmail: ""
  });
  const access_token = localStorage.getItem("access_token");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = async () => {
    try {
      await apiService.putStudentID(studentID, updatedStudent.studentName, updatedStudent.studentPhone, updatedStudent.studentEmail, access_token);
      toggleModal();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <>
      <button
        className="px-2 hover:bg-yellow-500 rounded-lg"
        onClick={toggleModal}
      >
        <FontAwesomeIcon icon={faPen} title="Edit" />
      </button>
      {isOpen && (
        <form>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="grid gap-4 bg-white p-8 rounded-lg w-[85vh] h-[80vh]">
              <h2 className="text-2xl font-bold">Update Student</h2>

              <div className="grid justify-center items-center">
                <div className="grid">
                  <label className="text-ml">Student Name</label>
                  <input
                    type="text"
                    value={updatedStudent.studentName}
                    onChange={(e) => setUpdatedStudent(e.target.value)}
                    placeholder="Samuel"
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200  rounded-lg"
                  />
                </div>
                <div className="grid">
                  <label className="text-ml">Student Phone</label>
                  <input
                    type="text"
                    value={updatedStudent.studentPhone}
                    onChange={(e) => setUpdatedStudent(e.target.value)}
                    placeholder="0815261512"
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200 rounded-lg "
                  />
                </div>
                <div className="grid">
                  <label className="text-ml">Student Email</label>
                  <input
                    type="text"
                    value={updatedStudent.studentEmail}
                    onChange={(e) => setUpdatedStudent(e.target.value)}
                    placeholder="student@gmail.com "
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200 rounded-lg "
                  />
                </div>
              </div>

              <div className="flex justify-center items-center mt-10">
                <button
                  type="submit"
                  className="bg-black hover:bg-blue-800 text-white font-medium py-4 px-[4vh] rounded-lg mr-4"
                  onClick={handleUpdate}
                >
                  Yes
                </button>
                <button
                  className="bg-red-500 hover:bg-gray-400 text-black font-medium py-4 px-[4vh] rounded-lg"
                  onClick={toggleModal}
                >
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
