import React, { useState } from "react";
import backgroundImage from "../assets/image_astronaut.png";
import VogueSchoolLogoLarge from "../components/logo_large";
import CustomInput from "../components/input_label/custom_input_label";
import ButtonStyle from "../components/button";
import apiService from "../api/api_service";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
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
    apiError: "",
  });
  const navigate = useNavigate();

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
      setErrors({ ...errors, username: "Username already exists", apiError: "" });
      return;
    }

    if (emailExists) {
      setErrors({ ...errors, email: "Email already exists", apiError: "" });
      return;
    }

    try {
      // Call the register API endpoint
      const response = await apiService.postRegister(formData.username, formData.email, formData.birthday, formData.phone, formData.password);

      // Handle the response
      console.log("Registration successful:", response);

      // Auto-login after account creation
      const loginResponse = await apiService.postLogin(formData.username, formData.password);
      localStorage.setItem("accessToken", loginResponse.accessToken);
      localStorage.setItem("role", loginResponse.role);

      // Redirect to the dashboard or any other desired page
      navigate(`/dashboard/${loginResponse.role}/course`);
    } catch (error) {
      console.error("Registration Error:", error);
      setErrors({ ...errors, apiError: "Failed to create account. Please try again later." });
    }
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

  return (
    <div className="h-screen flex">
      <div className="w-1/2 bg-cover hidden md:block" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="text-white bg-opacity-0 p-8 rounded-lg shadow-lg">
          <VogueSchoolLogoLarge />
        </div>
        <div className="text-white bg-opacity-35 bg-white p-10 m-24 rounded-lg shadow-lg">
          <p className="text-2xl font-semibold mb-4">
            "true quality education empowers students to become lifelong learners, fostering curiosity and thirst for knowledge beyond the classroom."
            <br />
            Dr. Sugata Mitra, Education Researcher
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-black flex justify-center items-center">
        <div className="bg-white p-20 rounded-lg shadow-lg max-w-screen-lg">
          <h2 className="text-3xl text-left font-semibold mb-10">Create Account</h2>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-6">
              <CustomInput label="Username" type="name" id="name" name="username" value={formData.username} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-lg" />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>
            <div className="mb-6">
              <CustomInput label="Birthday" type="date" id="birthday" name="birthday" value={formData.birthday} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-lg" />
            </div>
            <div className="mb-6">
              <CustomInput label="Phone Number" type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-lg" />
            </div>
            <div className="mb-6">
              <CustomInput label="Email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-lg" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <CustomInput label="Password" type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-lg" />
            </div>
            {errors.apiError && <p className="text-red-500 text-sm mb-4">{errors.apiError}</p>}
            <ButtonStyle type="submit">Create Account</ButtonStyle>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
