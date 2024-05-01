import React, { useState } from "react";
import CourseModalEdit from "./course_modal_edit";
import CourseModalDelete from "./course_modal_delete";

const CourseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex gap-5">
        <button
          className="bg-gray-300 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-3xl w-40 h-10"
          onClick={toggleModal}
        >
          Create
        </button>
        <CourseModalEdit />
        <CourseModalDelete />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="grid grid-cols-4 grid-rows-6 gap-4 bg-white p-8 rounded-lg w-[85rem] h-[55rem]">
            {/* Title */}
            <div className="col-span-4 row-span-1">
              <h2 className="text-5xl font-bold">Create Course</h2>
            </div>

            {/* Form Inputs */}
            <form className="col-span-1 row-span-5 flex flex-col justify-between">
              <div>
                <input
                  type="text"
                  placeholder="Course Name"
                  className="w-[20rem] p-2 border border-gray-300 rounded-lg "
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-[20rem] p-2 border border-gray-300 rounded-lg "
                />
              </div>
              <div>
                <input
                  type="text"
                  name="grade"
                  placeholder="Grade"
                  className="w-[20rem] p-2 border border-gray-300 rounded-lg "
                />
              </div>
              <div>
                <input
                  type="file"
                  name="picture"
                  placeholder="Picture"
                  className="w-[20rem] h-[20rem] p-2 border border-gray-300 rounded-lg "
                />
              </div>
            </form>

            {/* Description Input */}
            <div className="col-span-3 row-span-5">
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                className="w-full h-full p-2 border border-gray-300 rounded-lg "
                placeholder="Description"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="col-span-4 row-span-1 flex justify-center items-center mt-4">
              <button
                className="bg-black hover:bg-blue-800 text-white font-medium py-4 px-[4rem] rounded-lg mr-4"
                onClick={toggleModal}
              >
                Create
              </button>
              <button
                className="bg-red-500 hover:bg-gray-400 text-black font-medium py-4 px-[4rem] rounded-lg"
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseModal;
