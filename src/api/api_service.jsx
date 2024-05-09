import axios from "axios";

const role = localStorage.getItem("role");
const user_id = localStorage.getItem("user_id");
const access_token = localStorage.getItem("access_token");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxNTIxNjU2MiwianRpIjoiYWEwZjM0M2YtNDZkNC00NjYwLTk3MWMtNjI2MmFkMThiNzVkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NCwibmJmIjoxNzE1MjE2NTYyLCJjc3JmIjoiMTQ0MzRhYTItNTliZS00ZjkyLTk4NzQtODE3ZmI5NDkwZjMwIiwiZXhwIjoxNzE1MjE3NDYyLCJ1c2VybmFtZSI6ImlyZmFuIiwicm9sZSI6InN0dWRlbnQifQ.RXQWUTZJyP1GHHM6Bk07VCV0SVXLsYmb-pxgOSX5mqI"; // Create Axios instance with base URL and default headers
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

  async getCourses() {
    try {
      const response = await api.get("/courses", {
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
