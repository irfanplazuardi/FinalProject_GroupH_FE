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

  async putUserData(role, user_id, section, value, access_token) {
    try {
      const response = await api.put(
        `/${role}s/${user_id}`,
        {
          [section]: value,
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

  async getCourseSubject(access_token) {
    try {
      const response = await api.get("/course-subjects", {
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

  async postCourse(access_token, courseName, subject, grade, description) {
    try {
      const response = await api.post(
        "/courses",
        {
          course_name: courseName,
          course_grade: grade,
          course_subject_id: subject,
          course_description: description,
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

  async putCourseID(access_token, course_id, updatedFields) {
    try {
      const response = await api.put(`/courses/${course_id}`, updatedFields, {
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

  async postNewUser(role, access_token, name, email, birthday, phone, password) {
    try {
      const response = await api.post(
        `/${role}s`,
        {
          [`${role}_name`]: name,
          [`${role}_email`]: email,
          [`${role}_birthday`]: birthday,
          phone: phone,
          password: password,
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
  async getStudents(access_token) {
    try {
      const response = await api.get("/students", {
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

  async putStudentID(student_id, updated_fields, access_token) {
    try {
      const response = await api.put(`/students/${student_id}`, updated_fields, {
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

  async getTeachers(access_token) {
    try {
      const response = await api.get("/teachers", {
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

  async putTeacherID(teacher_id, updated_field, access_token) {
    try {
      const response = await api.put(`/teachers/${teacher_id}`, updated_field, {
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

  async postAnnouncement(announcement_desc, access_token) {
    try {
      const response = await api.post(
        "/announcement",
        {
          announcement_desc: announcement_desc,
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

  async deleteCourseID(course_id, access_token) {
    try {
      const response = await api.delete(`/courses/${course_id}`, {
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

  async deleteStudentID(student_id, access_token) {
    try {
      const response = await api.delete(`/students/${student_id}`, {
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

  async deleteTeacherID(teacher_id, access_token) {
    try {
      const response = await api.delete(`/teachers/${teacher_id}`, {
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
