import React, { useState } from "react";
import backgroundImage from "../assets/astronaut.jpg";
import VogueSchoolLogoLarge from "../components/logo_large";
import CustomInput from "../components/input_label/custom_input_label";
import ButtonStyle from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../api/api_service";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation checks here
    const { username, password } = formData;
    // Simulate database check (replace with actual API call)
    try {
      const response = await apiService.postLogin(username, password);
      const { access_token, role } = response;

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("role", role);

      if (role === "student") {
        navigate("/dashboard/student/course");
      } else if (role === "teacher") {
        navigate("/dashboard/teacher/course");
      }
    } catch (error) {
      setError("Invalid username or password.");
    }
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
                label="Username" // Pass label prop for username field
                type="text"
                id="username"
                name="username"
                value={formData.username}
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
