import React from "react";
import Container from "./container";

const Course = () => {
  const subjects = ["Math", "Science", "History", "English"];
  return (
    <Container className="grid-rows-2 ">
      <Container className="lg:mr-[50vh] xl:mr-[70vh] pr-10">
        <h2 className="font-bold w-full pr-[120px] pt-5">All Course</h2>
      </Container>
      <Container className="grid grid-cols-2 gap-4 mt-10 mb-5">
        {subjects.map((subject, index) => (
          <Container key={index} className="w-full">
            <div className="flex w-auto items-center justify-center h-[150px] rounded bg-[#D9D9D9]">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <h2>{subject}</h2>
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default Course;
