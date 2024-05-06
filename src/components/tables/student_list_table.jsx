import React from "react";
import Container from "../container";
import AddCourseModal from "../modals/create_course";
import EditCourseModal from "../modals/edit_course";
import DeleteModal from "../modals/delete_course";

const StudentListTable = () => {
  return (
    <>
      <Container className="flex justify-between ">
        <Container className="flex gap-5">
          <select className="flex justify-end py-3 px-4 rounded-2xl mb-5 bg-gray-300">
            <option value="students">Students</option>
            <option value="teachers">Teachers</option>
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
                <th className="border border-black px-4 py-2">NAME</th>
                <th className="border border-black px-4 py-2">PHONE</th>
                <th className="border border-black px-4 py-2">EMAIL</th>
                <th className="border border-black px-4 py-2">Picture</th>
                <th className="border border-black px-4 py-2">Created At</th>
                <th className="border border-black px-4 py-2">Updated At</th>
                <th className="border border-black px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-black px-4 py-2">1</td>
                <td className="border border-black px-4 py-2">Agus</td>
                <td className="border border-black px-4 py-2">15231321</td>
                <td className="border border-black px-4 py-2">agus@dummy.com</td>
                <td className="border border-black px-4 py-2">
                  <img src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109" alt="avatar" />
                </td>
                <td className="border border-black px-4 py-2">2022-01-01 00:00:00</td>
                <td className="border border-black px-4 py-2">2022-01-01 00:00:00</td>
                <td className="border border-black px-4 py-2  ">
                  <div className="flex justify-center ">
                    <EditCourseModal />
                    <DeleteModal />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </Container>
    </>
  );
};

export default StudentListTable;
