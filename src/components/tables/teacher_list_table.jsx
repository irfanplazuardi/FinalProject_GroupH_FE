import React, { useState, useEffect } from "react";
import apiService from "../../api/api_service";
import EditTeacherModal from "../modals/edit_teacher";
import DeleteTeacher from "../modals/delete_teacher";

const TeacherListTable = () => {
  const [teachers, setTeachers] = useState([]);
  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    apiService
      .getTeachers(access_token)
      .then((data) => {
        setTeachers(data.teachers);
      })
      .catch((error) => {
        console.error("Error fetching teachers:", error);
      });
  }, []);

  return (
    <div className="overflow-auto ">
      <table className="border border-black m-10 dark:border-white">
        <thead>
          <tr className="bg-gray-300 text-black dark:text-white dark:bg-slate-600">
            <th className="border border-black px-4 py-2">ID</th>
            <th className="border border-black px-4 py-2">Name</th>
            <th className="border border-black px-4 py-2">Phone</th>
            <th className="border border-black px-4 py-2">Email</th>
            <th className="border border-black px-4 py-2">Birthday</th>
            <th className="border border-black px-4 py-2">Picture</th>
            <th className="border border-black px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.teacher_id} className="bg-white">
              <td className="border border-black px-4 py-2">{teacher.teacher_id}</td>
              <td className="border border-black px-4 py-2">{teacher.teacher_name}</td>
              <td className="border border-black px-4 py-2">{teacher.phone}</td>
              <td className="border border-black px-4 py-2">{teacher.teacher_email}</td>
              <td className="border border-black px-4 py-2">{teacher.teacher_birthday}</td>
              <td className="border border-black px-4 py-2">
                <img src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109" alt="avatar" />
              </td>
              <td className="border border-black px-4 py-2  ">
                <div className="flex justify-center ">
                  <EditTeacherModal teacherID={teacher.teacher_id} />
                  <DeleteTeacher teacherID={teacher.teacher_id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherListTable;
