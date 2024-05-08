// api/apiService.js
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxNTE1ODM3MSwianRpIjoiZGU5YmU1MjYtZWM3Ny00MDc3LWE1ZTMtMjYyYWNlMThkNmIyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NCwibmJmIjoxNzE1MTU4MzcxLCJjc3JmIjoiMmUzZGI1YTUtYzkzZi00OTdiLTg2NTctZTI1NTczOGFhZjU5IiwiZXhwIjoxNzE1MTU5MjcxLCJ1c2VybmFtZSI6ImlyZmFuIiwicm9sZSI6InN0dWRlbnQifQ.XqQ6HB1JeVRzxJKpkOZQY4pl-zlYNevetcUI92OnKQM";
// Create Axios instance with base URL and default headers
const api = axios.create({
  baseURL: "https://adorable-serenity-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  async getUserData(role, user_id) {
    try {
      const response = await api.get(`/${role}s/${user_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  async getAnnouncements() {
    try {
      const response = await api.get("/announcement", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  async postLogin(username, password) {
    try {
      const response = await api.post("/login", {
        input_value: username,
        password: password,
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  async postRegister(name, email, birthday, phone, password) {
    try {
      const response = await api.post("/register", {
        student_name: name,
        student_email: email,
        student_birthday: birthday,
        phone: phone,
        password: password,
        picture: "None",
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  // Add more methods as needed (PUT, DELETE, etc.)
};

export default apiService;
