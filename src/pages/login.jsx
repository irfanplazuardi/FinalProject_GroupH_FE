import React, { useState } from "react";
import backgroundImage from "../assets/astronaut.jpg";
import VogueSchoolLogoLarge from "../components/logo_large";
import CustomInput from "../components/input_label/custom_input_label";
import ButtonStyle from "../components/button";
import { Link } from "react-router-dom";
import LoginFunction from "./api/login";

const Login = () => {
  const { formData, error, handleChange, handleSubmit } = LoginFunction();
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div>
        <VogueSchoolLogoLarge />
        <div className="w-full max-w-md bg-white bg-opacity-75 p-8 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-semibold mb-8 text-left">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <CustomInput
                label="Username/Email" // Pass label prop for Email field
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <CustomInput
                label="Password" // Pass label prop for Password field
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <ButtonStyle type="submit">Login</ButtonStyle>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/create-account" className="text-blue-500">
              Create account now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
