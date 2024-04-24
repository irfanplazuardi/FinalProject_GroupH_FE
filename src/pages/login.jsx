import React, { useState } from "react";
import backgroundImage from "../assets/astronaut.jpg";
import VogueSchoolLogoLarge from "../components/logo_large";
import CustomInput from "../components/custom_input_label";
import ButtonStyle from "../components/button";

const Login = () => {
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
    // If all checks pass, you can proceed with submitting the form or redirecting the user
    // For now, let's log a success message
    console.log("Login successful!");
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
            <a href="/create-account" className="text-blue-500">
              Create account now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
