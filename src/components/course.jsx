import React, { useState, useEffect } from "react";
import apiService from "../api/api_service";
import Container from "./container";

const Course = () => {
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
    <Container className="grid-rows-2 ">
      <Container className="lg:mr-[50vh] xl:mr-[70vh] pr-10">
        <h2 className="font-bold w-full pr-[120px] pt-5">All Course</h2>
      </Container>
      <Container className="grid grid-cols-2 gap-4 mt-10 mb-5">
        {courses.map((course) => (
          <Container key={course.course_id} className="w-full">
            <div className="flex w-auto items-center justify-center h-[150px] rounded bg-[#D9D9D9]">
              <button className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
              </button>
            </div>
            <h2>{course.course_name}</h2>
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default Course;
