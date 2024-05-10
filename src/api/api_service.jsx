import axios from "axios";

const api = axios.create({
  baseURL: "https://adorable-serenity-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  async getUserData(access_token, role, user_id) {
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

  async getAnnouncements(access_token) {
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

  async putAnnouncementID(announcement_id, update_announcement, access_token) {
    try {
      const response = await api.put(
        `/announcement/${announcement_id}`,
        {
          announcement_desc: update_announcement,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  async getCourses(access_token) {
    try {
      console.log("access_token:", access_token);
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

  async deleteAnnouncementID(announcement_id, access_token) {
    try {
      const response = await api.delete(`/announcement/${announcement_id}`, {
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

  // Add more methods as needed (PUT, DELETE, etc.)
};

export default apiService;
