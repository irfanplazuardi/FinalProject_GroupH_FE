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
    role: "student",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");

    // Save username in local storage
    if (name === "username") {
      localStorage.setItem("username", value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation checks here
    const { username, role, password } = formData;
    // Simulate database check (replace with actual API call)
    try {
      const response = await apiService.postLogin(username, role, password);
      const { access_token, role: user_role, user_id } = response;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("role", user_role);
      localStorage.setItem("user_id", user_id);
      console.log("response: ", response);

      if (user_role === "student") {
        navigate("/dashboard/student/course");
      } else if (user_role === "teacher") {
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
      }}>
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
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Select Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role} // Set value to formData.role
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-white">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
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
