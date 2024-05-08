import React, { useState, useEffect } from "react";
import apiService from "../api/api_service";

function AnnouncementTable() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Call the API to get announcements
    apiService
      .getAnnouncements()
      .then((data) => {
        // Update the announcements state with the data from the API response
        setAnnouncements(data.announcements);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []);

  return (
    <div>
      <h1>Announcements</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((announcement) => (
            <tr key={announcement.announcement_id}>
              <td>{announcement.announcement_id}</td>
              <td>{announcement.announcement_desc}</td>
              <td>{announcement.created_at}</td>
              <td>{announcement.created_by}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnnouncementTable;
