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
  
  async getStudents(access_token) {
    try {
      console.log("access_token:", access_token);
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

  async putStudentID(student_id, update_student_name, update_student_phone, update_student_email, access_token) {
    try {
      const response = await api.put(
        `/students/${student_id}`,
        {
          student_name: update_student_name, 
          student_phone: update_student_phone, 
          student_email: update_student_email 
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
  
  async getTeachers(access_token) {
    try {
      console.log("access_token:", access_token);
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

  async putTeacherID(teacher_id, update_teacher_name, update_teacher_phone, update_teacher_email, access_token) {
    try {
      const response = await api.put(
        `/teachers/${teacher_id}`,
        {
          teacher_name: update_teacher_name, 
          teacher_phone: update_teacher_phone, 
          teacher_email: update_teacher_email 
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

  async putCourseID(course_id, update_course_name, update_course_grade, update_course_subject, update_course_desc, access_token) {
    try {
      const response = await api.put(
        `/courses/${course_id}`,
        {
          course_name: update_course_name, 
          course_grade: update_course_grade, 
          course_subjects: update_course_subject, 
          course_description: update_course_desc 
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

  // Add more methods as needed (PUT, DELETE, etc.)
};

export default apiService;
