import React from "react";
import EditStudentModal from "../modals/edit_student";
import DeleteModal from "../modals/delete_course";

const StudentListTable = () => {
  return (
    <>
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
                <td className="border border-black px-4 py-2">Bambang</td>
                <td className="border border-black px-4 py-2">08152467</td>
                <td className="border border-black px-4 py-2">Bambang@gmail.com</td>
                <td className="border border-black px-4 py-2">
                  <img src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109" alt="avatar" />
                </td>
                <td className="border border-black px-4 py-2">2022-01-01 00:00:00</td>
                <td className="border border-black px-4 py-2">2022-01-01 00:00:00</td>
                <td className="border border-black px-4 py-2  ">
                  <div className="flex justify-center ">
                    <EditStudentModal />
                    <DeleteModal />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
    </>
  );
};

export default StudentListTable;
