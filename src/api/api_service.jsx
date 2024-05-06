// api/apiService.js
import axios from "axios";

// Create Axios instance with base URL and default headers
const api = axios.create({
  baseURL: "https://adorable-serenity-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  // async get(endpoint) {
  //   try {
  //     const response = await api.get(endpoint);
  //     return response.data;
  //   } catch (error) {
  //     console.error("API Error:", error);
  //     throw error;
  //   }
  // },

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
