import React, { useState, useEffect } from "react";
import Container from "./container";
import apiService from "../api/api_service";
import DeleteAnnouncement from "../components/modals/delete_course";
import UpdateAnnouncement from "../components/modals/edit_course";

const Announcement = () => {
  const user_role = localStorage.getItem("role");
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    apiService
      .getAnnouncements()
      .then((data) => {
        setAnnouncements(data.announcements);
        console.log(data.announcements);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []);

  return (
    <Container className="flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl p-5 dark:text-white">
          Announcements
        </h2>
      </div>
      <Container className="mb-8">
        {announcements.map((announcement) => (
          <Container
            key={announcement.announcement_id}
            className="w-[80%] mx-auto mb-4"
          >
            <div className="border rounded-lg p-4 bg-[#D9D9D9]">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">{announcement.created_by}</h3>
                <p className="text-md font-italic">{announcement.created_at}</p>
              </div>
              <div className="flex justify-between">
                <p className="mr-10">{announcement.announcement_desc}</p>
                {user_role !== "student" && (
                  <div className="flex justify-between gap-4 my-7 ">
                    <UpdateAnnouncement />
                    <DeleteAnnouncement />
                  </div>
                )}
              </div>
            </div>
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default Announcement;
