import React, { useState, useEffect } from "react";
import apiService from "../api/api_service";

function YourComponent() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    apiService
      .getUserData(4) // Pass the student ID as an argument
      .then((studentData) => {
        setStudent(studentData); // Update student state
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []); // Empty dependency array means it runs only once after component mount

  // Render student data if available
  if (student) {
    return (
      <div>
        <p>Name: {student.student_name}</p>
        <p>birtday: {student.student_birthday}</p>
        <p>phone: {student.phone}</p>
        <p>Email: {student.student_email}</p>
        <p type="password">pass: {student.password}</p>
        {/* Render other student details here */}
      </div>
    );
  }

  // If no data and no error, render nothing
  return null;
}

export default YourComponent;
