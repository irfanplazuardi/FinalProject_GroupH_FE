import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";
import { AiOutlineCloudUpload } from "react-icons/ai";
import apiService from "../../api/api_service";

const AddCourseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courseInfo, setCourseInfo] = useState({
    courseName: "",
    subject: "",
    grade: "",
    picture: null,
    description: "",
  });
  const [subjects, setSubjects] = useState([]);
  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    apiService
      .getCourseSubject(access_token)
      .then((data) => {
        setSubjects(data.course_subjects);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setCourseInfo((prevCourseInfo) => ({
      ...prevCourseInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await apiService.postCourse(access_token, courseInfo.courseName, courseInfo.subject, courseInfo.grade, courseInfo.description);
      console.log("Response: ", response);
    } catch (error) {
      console.error("API Error:", error);
    }
    toggleModal();
    window.location.reload();
  };

  return (
    <>
      <button className="bg-gray-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-3xl w-35 h-10" onClick={toggleModal} title="Add course">
        Course
        <span className="ml-5 text-orange-500">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </button>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="grid grid-cols-4 grid-rows-6 gap-4 bg-white p-8 rounded-lg w-[80vh] h-[90vh]">
              <div className="col-span-4 row-span-1">
                <h2 className="text-xl font-bold">Create Course</h2>
              </div>
              <div className="col-span-1 row-span-5 flex flex-col justify-between gap-4">
                <div className="flex flex-col">
                  <label className="text-ml">Course Name</label>
                  <input type="text" name="courseName" value={courseInfo.courseName} onChange={handleChange} placeholder="Maths" className="w-[30vh] p-2 border border-gray-300 bg-gray-200 rounded-lg" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-ml mb-2">Subject</label>
                  <FormControl size="small" className="w-[30vh] p-2 border border-gray-300 bg-gray-200 rounded-lg">
                    <InputLabel id="demo-select-small-label">Select Subject</InputLabel>
                    <Select name="subject" value={courseInfo.subject} label="subject" onChange={handleChange}>
                      {subjects.map((subject) => (
                        <MenuItem key={subject.course_subject_id} value={subject.course_subject_id}>
                          {subject.course_subject}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="flex flex-col">
                  <label className="text-ml">Grade</label>
                  <FormControl size="small" className="w-[30vh] p-2 border border-gray-300 bg-gray-200 rounded-lg">
                    <InputLabel id="seslect-grade">Select Grade</InputLabel>
                    <Select name="grade" value={courseInfo.grade} label="grade" onChange={handleChange}>
                      <MenuItem value="SD">SD</MenuItem>
                      <MenuItem value="SMP">SMP</MenuItem>
                      <MenuItem value="SMA">SMA</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex flex-col">
                  <label className="text-ml">Upload Image</label>
                  <div className="w-[30vh] h-[30vh] p-2 border border-gray-300 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<AiOutlineCloudUpload />} aria-disabled>
                      Upload file
                      <input type="file" name="picture" onChange={handleChange} hidden />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col col-span-3 row-span-5 pl-[15vh] ">
                <label className="text-ml">Description</label>
                <textarea
                  name="description"
                  value={courseInfo.description}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                  className="w-[40vh] h-full p-2 border border-gray-300 rounded-lg bg-gray-200 "
                  placeholder="Describe the course here"
                  required></textarea>
              </div>

              <div className="col-span-4 row-span-1 flex justify-center items-center mt-10">
                <button type="submit" className="bg-black hover:bg-blue-800 text-white font-medium py-4 px-[4vh] rounded-lg mr-4">
                  Create
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

export default AddCourseModal;
