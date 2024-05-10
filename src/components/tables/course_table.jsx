import React, {useState, useEffect} from "react";
import apiService from "../../api/api_service";
import Container from "../container";
import AddCourseModal from "../modals/create_course";
import EditCourseModal from "../modals/edit_course";
import DeleteModal from "../modals/delete_course";

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    apiService
      .getCourses(access_token)
      .then((data) => {
        setCourses(data.courses);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);
  return (
    <>
      <Container className="flex justify-between ">
        <Container className="flex gap-5">
          <select className="flex justify-end py-3 px-4 rounded-2xl mb-5 bg-gray-300">
            <option value="course"> Course</option>
            <option value="fisika">fisika</option>
            <option value="kimia">kimia</option>
            <option value="biologi">biologi</option>
          </select>
        </Container>
        <Container className="mx-2">
          <AddCourseModal />
        </Container>
      </Container>
      <Container className="grid grid-cols-4 grid-rows-2 gap-4 mb-4">
        <Container className="col-span-4 row-span-2 bg-gray-200 rounded flex justify-center items-center ">
          <table className="border border-black m-10">
            <thead>
              <tr className="bg-gray-300 text-black">
                <th className="border border-black px-4 py-2">ID</th>
                <th className="border border-black px-4 py-2">Course Name</th>
                <th className="border border-black px-4 py-2">Subject</th>
                <th className="border border-black px-4 py-2">Grade</th>
                <th className="border border-black px-4 py-2">Picture</th>
                <th className="border border-black px-4 py-2">Description</th>
                <th className="border border-black px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.course_id} className="bg-white">
                <td className="border border-black px-4 py-2">{course.course_id}</td>
                <td className="border border-black px-4 py-2">{course.course_name}</td>
                <td className="border border-black px-4 py-2">{course.course_subjects}</td>
                <td className="border border-black px-4 py-2">{course.course_grade}</td>
                <td className="border border-black px-4 py-2">
                  <img src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109" alt="avatar" />
                </td>
                <td className="border border-black px-4 py-2">{course.course_description}</td>
                <td className="border border-black px-4 py-2  ">
                  <div className="flex justify-center ">
                    <EditCourseModal courseID={course.course_id}/>
                    <DeleteModal />
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </Container>
    </>
  );
};

export default CourseTable;
