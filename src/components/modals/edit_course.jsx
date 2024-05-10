import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const EditCourseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState({
    courseName: "",
    grade: "",
    subject: "",
    description: ""
  });
  const access_token = localStorage.getItem("access_token");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = async () => {
    try {
      await apiService.putCourseID(courseID, updatedCourse.courseName, updatedCourse.grade, updatedCourse.subject, updatedCourse.description, access_token);
      toggleModal();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <>
      <button className="px-2 hover:bg-yellow-500 rounded-lg" onClick={toggleModal}>
        <FontAwesomeIcon icon={faPen} title="Edit" />
      </button>
      {isOpen && (
        <form>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="grid grid-cols-4 grid-rows-6 gap-4 bg-white p-8 rounded-lg w-[80vh] h-[90vh]">
              <div className="col-span-4 row-span-1">
                <h2 className="text-xl font-bold">Edit Course</h2>
              </div>

              <div className="col-span-1 row-span-5 flex flex-col justify-between gap-4">
                <div className="flex flex-col">
                  <label className="text-ml">Course Name</label>
                  <input type="text" value={updatedCourse.courseName} onChange={(e) => setUpdatedCourse(e.target.value)} placeholder="Maths" className="w-[30vh] p-2 border border-gray-300 bg-gray-200  rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="text-ml">Subject</label>
                  <input type="text" value={updatedCourse.subject} onChange={(e) => setUpdatedCourse(e.target.value)} placeholder="Aljabar" className="w-[30vh] p-2 border border-gray-300 bg-gray-200 rounded-lg " />
                </div>
                <div className="flex flex-col">
                  <label className="text-ml">Grade</label>
                  <input type="text" value={updatedCourse.grade} onChange={(e) => setUpdatedCourse(e.target.value)} placeholder="SMA " className="w-[30vh] p-2 border border-gray-300 bg-gray-200 rounded-lg " />
                </div>
              </div>

              <div className="flex flex-col col-span-3 row-span-5 pl-[15vh] ">
                <label className="text-ml">Description</label>
                <textarea
                  value={updatedCourse.description}
                  onChange={(e) => setUpdatedCourse(e.target.value)}
                  cols="30"
                  rows="10"
                  className="w-[40vh] h-full p-2 border border-gray-300 bg-gray-200 rounded-lg "
                  placeholder="Describe the course here"></textarea>
              </div>

              <div className="col-span-4 row-span-1 flex justify-center items-center mt-10">
                <button className="bg-black hover:bg-blue-800 text-white font-medium py-4 px-[4vh] rounded-lg mr-4" onClick={handleUpdate}>
                  Update
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

export default EditCourseModal;
