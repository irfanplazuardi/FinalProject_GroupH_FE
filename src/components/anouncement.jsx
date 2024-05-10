import React, { useState, useEffect } from "react";
import Container from "./container";
import apiService from "../api/api_service";
import DeleteAnnouncement from "./modals/delete_announcement";
import EditAnnouncementModal from "../components/modals/edit_announcement";

const Announcement = () => {
  const user_role = localStorage.getItem("role");
  const [announcements, setAnnouncements] = useState([]);
  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    apiService
      .getAnnouncements(access_token)
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
        <h2 className="font-bold text-3xl p-5 dark:text-white md:text-2xl">
          Announcements
        </h2>
      </div>
      <Container className="mb-8">
        {announcements.map((announcement) => (
          <Container key={announcement.announcement_id} className="mb-4">
            <div className="rounded-lg p-3 bg-[#D9D9D9] md:p-2 sm:p-1 xl:w-[70vh] lg:w-[40vh]">
              <div className="flex justify-between items-center md:gap-2 sm:gap-1">
                <h3 className="font-bold text-xl lg:text-xl xl:text-lg md:text-md sm:text-xs">
                  {announcement.created_by}
                </h3>
                <p className="text-sm md:text-xs sm:text-xs">
                  {announcement.created_at}
                </p>
              </div>
              <div className="flex justify-between py-2">
                <p className="mr-10 text-md">
                  {announcement.announcement_desc}
                </p>
                {user_role !== "student" && (
                  <div className="flex justify-between gap-4 my-7 ">
                    <EditAnnouncementModal announcementID={announcement.announcement_id} />
                    <DeleteAnnouncement announcementID={announcement.announcement_id} />

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
