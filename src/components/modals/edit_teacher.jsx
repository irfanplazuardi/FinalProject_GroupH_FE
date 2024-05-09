import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const EditTeacherModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [teacherInfo, setTeacherInfo] = useState({
    teacherName: "",
    teacherPhone: "",
    teacherEmail: "",
    picture: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTeacherInfo((prevTeacherInfo) => ({
      ...prevTeacherInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Teacher Info:", teacherInfo);
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
              <h2 className="text-2xl font-bold">Edit Teacher</h2>

              <div className="grid justify-center items-center">
                <div className="grid">
                  <label className="text-ml">Teacher Name</label>
                  <input
                    type="text"
                    name="teacherName"
                    value={teacherInfo.teacherName}
                    onChange={handleChange}
                    placeholder="Irfan"
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200  rounded-lg"
                  />
                </div>
                <div className="grid">
                  <label className="text-ml">Teacher Phone</label>
                  <input
                    type="text"
                    name="teacherPhone"
                    value={teacherInfo.teacherPhone}
                    onChange={handleChange}
                    placeholder="0815261512"
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200 rounded-lg "
                  />
                </div>
                <div className="grid">
                  <label className="text-ml">Teacher Email</label>
                  <input
                    type="text"
                    name="teacherEmail"
                    value={teacherInfo.teacherEmail}
                    onChange={handleChange}
                    placeholder="teacher@gmail.com "
                    className="w-[75vh] p-1 border border-gray-300 bg-gray-200 rounded-lg "
                  />
                </div>
                <div className="grid">
                  <label className="text-ml">Upload Image</label>
                  <input
                    type="file"
                    name="picture"
                    value={teacherInfo.picture}
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

export default EditTeacherModal;
