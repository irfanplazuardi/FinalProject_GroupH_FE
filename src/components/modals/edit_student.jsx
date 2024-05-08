import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const EditStudentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    studentName: "",
    studentPhone: "",
    studentEmail: "",
    picture: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentInfo((prevStudentInfo) => ({
      ...prevStudentInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Student Info:", studentInfo);
    toggleModal();
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
        <form onSubmit={handleSubmit}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="grid gap-4 bg-white p-8 rounded-lg w-[85vh] h-[80vh]">
              <h2 className="text-2xl font-bold">Edit Student</h2>

              <div className="grid justify-center items-center">
                <div className="grid">
                  <label className="text-ml">Student Name</label>
                  <input
                    type="text"
                    name="studentName"
                    value={studentInfo.studentName}
                    onChange={handleChange}
                    placeholder="Samuel"
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200  rounded-lg"
                  />
                </div>
                <div className="grid">
                  <label className="text-ml">Student Phone</label>
                  <input
                    type="text"
                    name="studentPhone"
                    value={studentInfo.studentPhone}
                    onChange={handleChange}
                    placeholder="0815261512"
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200 rounded-lg "
                  />
                </div>
                <div className="grid">
                  <label className="text-ml">Student Email</label>
                  <input
                    type="text"
                    name="studentEmail"
                    value={studentInfo.studentEmail}
                    onChange={handleChange}
                    placeholder="student@gmail.com "
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200 rounded-lg "
                  />
                </div>
                <div className="grid">
                  <label className="text-ml">Upload Image</label>
                  <input
                    type="file"
                    name="picture"
                    value={studentInfo.picture}
                    onChange={handleChange}
                    placeholder="Picture"
                    className="w-[20rem] h-[20vh] p-2 border border-gray-300 bg-gray-200 rounded-lg "
                  />
                </div>
              </div>

              <div className="flex justify-center items-center mt-10">
                <button
                  type="submit"
                  className="bg-black hover:bg-blue-800 text-white font-medium py-4 px-[4vh] rounded-lg mr-4"
                >
                  Update
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
