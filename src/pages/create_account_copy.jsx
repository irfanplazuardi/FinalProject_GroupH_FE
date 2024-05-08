import React, { useState } from "react";
import backgroundImage from "../assets/image_astronaut.png";
import VogueSchoolLogoLarge from "../components/logo_large";
import CustomInput from "../components/input_label/custom_input_label";
import ButtonStyle from "../components/button";
import apiService from "../api/api_service";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

// this is Yup schema
const yupSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  birthday: Yup.date().required("Birthday is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at leats 10 numbers")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const CreateAccountCopy = () => {
  const [formData, setFormData] = useState({
    username: "",
    birthday: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    phone: "",
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
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // using Yup schema for validation
      await yupSchema.validate(formData, { abortEarly: false });

      // Call the register API endpoint
      const response = await apiService.postRegister(
        formData.username,
        formData.email,
        formData.birthday,
        formData.phone,
        formData.password
      );

      // Handle the response
      console.log("Registration successful:", response);

      // Auto-login after account creation
      const loginResponse = await apiService.postLogin(
        formData.username,
        formData.password
      );

      localStorage.setItem("accessToken", loginResponse.accessToken);
      localStorage.setItem("role", loginResponse.role);

      // Redirect to the dashboard or any other desired page
      navigate(`/dashboard/${loginResponse.role}/course`);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        // Yup validation error
        const yupErrors = {};
        error.inner.forEach((e) => {
          yupErrors[e.path] = e.message;
        });
        setErrors(yupErrors);
      } else {
        // Backend validation error
        console.error("Registration Error:", error);
        setErrors({
          ...errors,
          apiError: "Failed to create account. Please try again later.",
        });
      }
    }
  };

  return (
    <div className="h-screen flex">
      <div
        className="w-1/2 bg-cover hidden md:block"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-white bg-opacity-0 p-8 rounded-lg shadow-lg">
          <VogueSchoolLogoLarge />
        </div>
        <div className="text-white bg-opacity-35 bg-white p-10 m-24 rounded-lg shadow-lg">
          <p className="text-2xl font-semibold mb-4">
            "true quality education empowers students to become lifelong
            learners, fostering curiosity and thirst for knowledge beyond the
            classroom."
            <br />
            Dr. Sugata Mitra, Education Researcher
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-black flex justify-center items-center">
        <div className="bg-white p-20 rounded-lg shadow-lg max-w-screen-lg">
          <h2 className="text-3xl text-left font-semibold mb-10">
            Create Account
          </h2>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-6">
              <CustomInput
                label="Username"
                type="name"
                id="name"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-lg"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>
            <div className="mb-6">
              <CustomInput
                label="Birthday"
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-lg"
              />
              {errors.birthday && (
                <p className="text-red-500 text-sm">{errors.birthday}</p>
              )}
            </div>
            <div className="mb-6">
              <CustomInput
                label="Phone Number"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-lg"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="mb-6">
              <CustomInput
                label="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-6">
              <CustomInput
                label="Password"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-lg"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <ButtonStyle type="submit">Create Account</ButtonStyle>
            {errors.apiError && (
              <p className="text-red-500 text-sm mb-4">{errors.apiError}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountCopy;
