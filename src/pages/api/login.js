import React, { useState } from "react";
import AxiosFunction from "./axios";

const LoginFunction = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation checks here
    const { email, password } = formData;
    // Simulate database check (replace with actual API call)
    const userExists = checkUserExists(email);
    if (!userExists) {
      setError("Username or email doesn't exist.");
      return;
    }
    // Simulate password check (replace with actual API call)
    const correctPassword = checkPassword(email, password);
    if (!correctPassword) {
      setError("Incorrect password.");
      return;
    }
    try {
      const axiosInstance = AxiosFunction();
      const response = axiosInstance.post("/login", formData);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    // If all checks pass, you can proceed with submitting the form or redirecting the user
    // For now, let's log a success message
    console.log("Login Success!");
  };

  const checkUserExists = (email) => {
    // Simulated function to check if the user exists in the database
    // Replace this with your actual backend logic
    // Return true if the user exists, false otherwise
    return true; // Replace this with your actual check
  };

  const checkPassword = (email, password) => {
    // Simulated function to check if the password matches the one associated with the email
    // Replace this with your actual backend logic
    // Return true if the password is correct, false otherwise
    return true; // Replace this with your actual check
  };
  return {
    formData,
    error,
    handleChange,
    handleSubmit,
  };
};

export default LoginFunction;
