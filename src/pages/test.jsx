import axios from "axios";
import React, { useState, useEffect } from "react";
import apiService from "../api/api_service";

const TeacherComponent = () => {
  const [teacherData, setTeacherData] = useState(null);

  useEffect(() => {
    apiService
      .getUserData()
      .then((data) => {
        setTeacherData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching teacher data:", error);
      });
  }, []);

  return (
    <div>
      {teacherData && (
        <div>
          <h1>Teacher Data</h1>
          <p>Name: {teacherData.teacher_name}</p>
          <p>Email: {teacherData.teacher_email}</p>
          <p>Phone: {teacherData.phone}</p>
        </div>
      )}
    </div>
  );

  // useEffect(() => {
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxNTI0ODQ1MCwianRpIjoiOTYzZTgyOTktZDliZi00MTEzLWFjOWMtYjg5MmM3ZDM1Mjc1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MzgsIm5iZiI6MTcxNTI0ODQ1MCwiY3NyZiI6ImU2NTBlMTlkLTkzN2YtNGI3OS1iYjFjLTJkZTg5NjhiZDIwMiIsImV4cCI6MTcxNTI0OTM1MCwidXNlcm5hbWUiOiJjb2tpIiwicm9sZSI6InRlYWNoZXIifQ.pgIMjtkidaeZW7Ez0dLoIhqvwBivUoatbaTBK7sHbI0"; // Replace with your token
  //   const apiUrl = "https://adorable-serenity-production.up.railway.app/teachers/38";

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(apiUrl, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setTeacherData(response.data.teacher);
  //     } catch (error) {
  //       console.error("Error fetching teacher data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (!teacherData) return null;

  // return (
  //   <div>
  //     <h1>Teacher Name: {teacherData.teacher_name}</h1>
  //     <p>Email: {teacherData.teacher_email}</p>
  //     <p>Birthday: {teacherData.teacher_birthday}</p>
  //     <p>Phone: {teacherData.phone}</p>
  //   </div>
  // );
};

export default TeacherComponent;
