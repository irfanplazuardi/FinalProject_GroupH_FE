import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";
import { AiOutlineCloudUpload } from "react-icons/ai";
import apiService from "../../api/api_service";

const EditCourseModal = ({ courseID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState({
    courseName: "",
    grade: "",
    subject: "",
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

  const handleUpdate = async (event) => {
    event.preventDefault();
    const updatedFields = {};
    if (updatedCourse.courseName) updatedFields.course_name = updatedCourse.courseName;
    if (updatedCourse.grade) updatedFields.course_grade = updatedCourse.grade;
    if (updatedCourse.subject) updatedFields.course_subject_id = updatedCourse.subject;
    if (updatedCourse.description) updatedFields.course_description = updatedCourse.description;
    try {
      await apiService.putCourseID(access_token, courseID, updatedFields);
      toggleModal();
      window.location.reload();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCourse((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <button className="px-2 hover:bg-yellow-500 rounded-lg" onClick={toggleModal}>
        <FontAwesomeIcon icon={faPen} title="Edit" />
      </button>
      {isOpen && (
        <form onSubmit={handleUpdate}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="grid grid-cols-4 grid-rows-6 gap-4 bg-white p-8 rounded-lg w-[80vh] h-[90vh]">
              <div className="col-span-4 row-span-1">
                <h2 className="text-xl font-bold">Create Course</h2>
              </div>
              <div className="col-span-1 row-span-5 flex flex-col justify-between gap-4">
                <div className="flex flex-col">
                  <label className="text-ml">Course Name</label>
                  <input type="text" name="courseName" value={updatedCourse.courseName} onChange={handleChange} placeholder="Maths" className="w-[30vh] p-2 border border-gray-300 bg-gray-200 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="text-ml mb-2">Subject</label>
                  <FormControl size="small" className="w-[30vh] p-2 border border-gray-300 bg-gray-200 rounded-lg">
                    <InputLabel id="demo-select-small-label">Select Subject</InputLabel>
                    <Select name="subject" value={updatedCourse.subject} label="subject" onChange={handleChange}>
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
                    <Select name="grade" value={updatedCourse.grade} label="grade" onChange={handleChange}>
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
                  value={updatedCourse.description}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                  className="w-[40vh] h-full p-2 border border-gray-300 rounded-lg bg-gray-200 "
                  placeholder="Describe the course here"></textarea>
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

export default EditCourseModal;
