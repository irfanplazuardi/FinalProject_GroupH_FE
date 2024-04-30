import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddCourseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courseInfo, setCourseInfo] = useState({
    courseName: "",
    subject: "",
    grade: "",
    picture: "",
    description: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourseInfo((prevCourseInfo) => ({
      ...prevCourseInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Course Info:", courseInfo);
    toggleModal();
  };

  return (
    <>
      <button className="bg-gray-300 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-3xl w-35 h-10" onClick={toggleModal} title="Add course">
        Create
        <span className="ml-5 text-orange-500">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </button>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="grid grid-cols-4 grid-rows-6 gap-4 bg-white p-8 rounded-lg w-[85rem] h-[55rem]">
              <div className="col-span-4 row-span-1">
                <h2 className="text-5xl font-bold">Create Course</h2>
              </div>

              <div className="col-span-1 row-span-5 flex flex-col justify-between gap-4">
                <div>
                  <label className="text-xl">Course Name</label>
                  <input type="text" name="courseName" value={courseInfo.courseName} onChange={handleChange} placeholder="Maths" className="w-[20rem] p-2 border border-gray-300 bg-gray-200 rounded-lg" required />
                </div>
                <div>
                  <label className="text-xl">Subject</label>
                  <input type="text" name="subject" value={courseInfo.subject} onChange={handleChange} placeholder="Aljabar" className="w-[20rem] p-2 border border-gray-300 bg-gray-200 rounded-lg " required />
                </div>
                <div>
                  <label className="text-xl">Grade</label>
                  <input type="text" name="grade" value={courseInfo.grade} onChange={handleChange} placeholder="SMA " className="w-[20rem] p-2 border border-gray-300 bg-gray-200 rounded-lg " required />
                </div>
                <div>
                  <label className="text-xl">Upload Image</label>
                  <input type="file" name="picture" value={courseInfo.picture} onChange={handleChange} placeholder="Picture" className="w-[20rem] h-[20rem] p-2 border border-gray-300 bg-gray-200 rounded-lg " required />
                </div>
              </div>

              <div className="col-span-3 row-span-5 pl-5 ">
                <label className="text-xl">Description</label>
                <textarea
                  name="description"
                  value={courseInfo.description}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                  className="w-full h-full p-2 border border-gray-300 rounded-lg bg-gray-200 "
                  placeholder="Describe the course here"
                  required></textarea>
              </div>

              <div className="col-span-4 row-span-1 flex justify-center items-center mt-10">
                <button type="submit" className="bg-black hover:bg-blue-800 text-white font-medium py-4 px-[4rem] rounded-lg mr-4">
                  Create
                </button>
                <button className="bg-red-500 hover:bg-gray-400 text-black font-medium py-4 px-[4rem] rounded-lg" onClick={toggleModal}>
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

export default AddCourseModal;
