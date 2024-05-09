import axios from "axios";

const role = localStorage.getItem("role");
const user_id = localStorage.getItem("user_id");
const access_token = localStorage.getItem("access_token");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxNTI0ODQ1MCwianRpIjoiOTYzZTgyOTktZDliZi00MTEzLWFjOWMtYjg5MmM3ZDM1Mjc1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MzgsIm5iZiI6MTcxNTI0ODQ1MCwiY3NyZiI6ImU2NTBlMTlkLTkzN2YtNGI3OS1iYjFjLTJkZTg5NjhiZDIwMiIsImV4cCI6MTcxNTI0OTM1MCwidXNlcm5hbWUiOiJjb2tpIiwicm9sZSI6InRlYWNoZXIifQ.pgIMjtkidaeZW7Ez0dLoIhqvwBivUoatbaTBK7sHbI0";
const api = axios.create({
  baseURL: "https://adorable-serenity-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  async getUserData() {
    try {
      const response = await api.get(`/${role}s/${user_id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  async getAnnouncements() {
    try {
      const response = await api.get("/announcement", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  async postLogin(username, role, password) {
    try {
      const response = await api.post("/login", {
        input_value: username,
        password: password,
        role_as: role,
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
