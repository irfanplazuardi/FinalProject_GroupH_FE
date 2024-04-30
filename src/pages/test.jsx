import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Container from "../components/container";
import CourseModal from "../components/modals/course_modal";
import Course from "../components/course";
import ControllerButton from "../components/controller_button";
import Schedule from "../components/schedule";

const TestPage = () => {
  const subjects = ["Math", "Science", "History", "English"];

  return (
    <>
      <Sidebar />
      <Container className="h-screen p-4 sm:ml-64 bg-white">
        <Container className="p-4 mb-4 flex justify-between items-center bg-gray-200 rounded-full ">
          <Navbar />
        </Container>
        <Container className="flex justify-between ">
          <Container className="flex gap-5">
            <select className="flex justify-end py-3 px-4 rounded-2xl mb-5 bg-gray-300">
              <option value="matematika"> Course</option>
              <option value="fisika">fisika</option>
              <option value="kimia">kimia</option>
              <option value="biologi">biologi</option>
            </select>
            <select className="flex justify-end py-3 px-4 rounded-2xl mb-5 bg-gray-300">
              <option value="matematika"> Semester</option>
              <option value="fisika">1</option>
              <option value="kimia">2</option>
              <option value="biologi">3</option>
            </select>
            <select className="flex justify-end py-3 px-4 rounded-2xl mb-5 bg-gray-300">
              <option value="matematika"> Student</option>
              <option value="fisika">a</option>
              <option value="kimia">b</option>
              <option value="biologi">c</option>
            </select>
          </Container>
          <Container className="flex gap-5">
            <CourseModal />
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
                  <th className="border border-black px-4 py-2">Created At</th>
                  <th className="border border-black px-4 py-2">Updated At</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-black px-4 py-2">1</td>
                  <td className="border border-black px-4 py-2">Calculus</td>
                  <td className="border border-black px-4 py-2">Matematika</td>
                  <td className="border border-black px-4 py-2">SMA</td>
                  <td className="border border-black px-4 py-2">
                    <img
                      src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109"
                      alt="avatar"
                    />
                  </td>
                  <td className="border border-black px-4 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam, accusamus!
                  </td>
                  <td className="border border-black px-4 py-2">
                    2022-01-01 00:00:00
                  </td>
                  <td className="border border-black px-4 py-2">
                    2022-01-01 00:00:00
                  </td>
                </tr>
              </tbody>
            </table>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default TestPage;
