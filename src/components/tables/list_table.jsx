import React, { useState } from "react";
import Container from "../container";
import StudentListTable from "./student_list_table";
import TeacherListTable from "./teacher_list_table";
import CreateStudentModal from "../modals/create_student";
import CreateTeacherModal from "../modals/create_teacher";

const ListTable = () => {
  const [selectedOption, setSelectedOption] = useState("students");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Container className="flex justify-between ">
        <Container className="flex gap-5">
          <select
            className="flex justify-end py-3 px-4 rounded-2xl mb-5 bg-gray-300"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="students">Students</option>
            <option value="teachers">Teachers</option>
          </select>
        </Container>
        <Container className="mx-2">
          {selectedOption === "students" ? (
            <CreateStudentModal />
          ) : (
            <CreateTeacherModal />
          )}
        </Container>
      </Container>
      <Container className="grid grid-cols-4 grid-rows-2 gap-4 mb-4">
        <Container className="col-span-4 row-span-2 bg-gray-200 rounded flex justify-center items-center dark:bg-slate-800">
          {selectedOption === "students" ? (
            <StudentListTable />
          ) : (
            <TeacherListTable />
          )}
        </Container>
      </Container>
    </>
  );
};

export default ListTable;
