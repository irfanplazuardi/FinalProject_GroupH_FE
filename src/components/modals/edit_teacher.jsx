import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const EditTeacherModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedTeacher, setUpdatedTeacher] = useState({
    teacherName: "",
    teacherPhone: "",
    teacherEmail: ""
  });
  const access_token = localStorage.getItem("access_token");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = async () => {
    try {
      await apiService.putTeacherID(teacherID, updatedTeacher.teacherName, updatedTeacher.teacherPhone, updatedTeacher.teacherEmail, access_token);
      toggleModal();
    } catch (error) {
      console.error("Error updating teacher:", error);
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
              <h2 className="text-2xl font-bold">Edit Teacher</h2>

              <div className="grid justify-center items-center">
                <div className="grid">
                  <label className="text-ml">Teacher Name</label>
                  <input
                    type="text"
                    value={updatedTeacher.teacherName}
                    onChange={(e) => setUpdatedTeacher(e.target.value)}
                    placeholder="Irfan"
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200  rounded-lg"
                  />
                </div>
                <div className="grid">
                  <label className="text-ml">Teacher Phone</label>
                  <input
                    type="text"
                    value={updatedTeacher.teacherPhone}
                    onChange={(e) => setUpdatedTeacher(e.target.value)}
                    placeholder="0815261512"
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200 rounded-lg "
                  />
                </div>
                <div className="grid">
                  <label className="text-ml">Teacher Email</label>
                  <input
                    type="text"
                    value={updatedTeacher.teacherEmail}
                    onChange={(e) => setUpdatedTeacher(e.target.value)}
                    placeholder="teacher@gmail.com "
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200 rounded-lg "
                  />
                </div>
              </div>

              <div className="flex justify-center items-center mt-10">
                <button
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

export default EditTeacherModal;
