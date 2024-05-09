// api/apiService.js
import axios from "axios";

const role = localStorage.getItem("role");
const user_id = localStorage.getItem("user_id");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxNTIyNjIyMywianRpIjoiZjY1NTZmZjctY2JmNC00YzQzLThhN2ItM2MxZTJmOGQ0ZWJlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NCwibmJmIjoxNzE1MjI2MjIzLCJjc3JmIjoiMDAzNmI5NTgtMWU3Mi00MTVkLTk5MDgtNDQxZWMwNGY0MWY4IiwiZXhwIjoxNzE1MjI3MTIzLCJ1c2VybmFtZSI6ImlyZmFuIiwicm9sZSI6InN0dWRlbnQifQ.l5s-PeUlmOHm23XIWrIKu5EdWu98K27aIbjQyt0H-UA";
// Create Axios instance with base URL and default headers
const api = axios.create({
  baseURL: "https://adorable-serenity-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Include authorization header in all requests
  },
});

const apiService = {
  // async getUserData() {
  //   try {
  //     const response = await api.get(`/students/4`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   } catch (error) {
  //     console.error("API Error:", error);
  //     throw error;
  //   }
  // },
  async getUserData(studentId) {
    try {
      const response = await api.get(`/students/${studentId}`);
      return response.data.student; // Return only the student data
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

  async getProfileData() {
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

  // Add more methods as needed (PUT, DELETE, etc.)
};

export default apiService;
