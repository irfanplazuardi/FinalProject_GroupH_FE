import React from "react";
import Container from "./container";

const Announcement = () => {
  // Dummy data for demonstration
  const announcements = [
    { title: "Important Announcement 1", date: "April 30, 2024", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices." },
    { title: "Important Announcement 2", date: "May 5, 2024", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices." },
    { title: "Important Announcement 3", date: "May 10, 2024", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices." },
  ];

  return (
    <Container className="flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="font-bold text-5xl p-5">Announcements</h2>
      </div>
      <Container className="mb-8">
        <Container className="w-full">
          {announcements.map((announcement, index) => (
            <div key={index} className="border rounded-lg p-4 mb-4 bg-[#D9D9D9]">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">{announcement.title}</h3>
                <p className="text-md font-italic">{announcement.date}</p>
              </div>
              <p>{announcement.details}</p>
            </div>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default Announcement;
