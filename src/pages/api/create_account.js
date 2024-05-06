import BaseURL from "./axios";
import React, { useState, useEffect } from "react";

const CreateAccountFunction = () => {
  const [formData, setFormData] = useState({
    username: "",
    birthday: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if username or email already exists
    const usernameExists = await checkUsernameExists(formData.username);
    const emailExists = await checkEmailExists(formData.email);

    if (usernameExists) {
      setErrors({ ...errors, username: "Username already exists" });
      return;
    }

    if (emailExists) {
      setErrors({ ...errors, email: "Email already exists" });
      return;
    }

    // If everything is valid, submit the form
    // You can send the form data to your backend for further processing
    try {
      const axiosInstance = BaseURL(); // Create Axios instance
      const response = await axiosInstance.post("/register", formData);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("Register Success!");
  };

  const checkUsernameExists = async (username) => {
    // Simulate checking if username exists in the database
    // Replace this with your actual database check
    return false; // Change to true if username exists
  };

  const checkEmailExists = async (email) => {
    // Simulate checking if email exists in the database
    // Replace this with your actual database check
    return false; // Change to true if email exists
  };

  return {
    handleChange,
    handleSubmit,
    formData,
    errors,
  };
};

export default CreateAccountFunction;
