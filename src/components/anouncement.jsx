import React, { useState } from "react";
import Container from "./container";
import ButtonStyle from "./button";
import PopUpWindow from "./pop_up_window";

const Announcement = () => {
  // Dummy data for demonstration
  const announcements = [
    {
      id: 1,
      title: "Important Announcement 1",
      date: "April 30, 2024",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices.",
    },
    {
      id: 2,
      title: "Important Announcement 2",
      date: "May 5, 2024",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices.",
    },
    {
      id: 3,
      title: "Important Announcement 3",
      date: "May 10, 2024",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices.",
    },
    {
      id: 4,
      title: "Important Announcement 3",
      date: "May 10, 2024",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices.",
    },
    {
      id: 5,
      title: "Important Announcement 3",
      date: "May 10, 2024",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices.",
    },
  ];
  const [isSelectedField, setSelectedField] = useState(null);
  const [isSelectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const handleSubmit = (formData) => {
    console.log("form submitted", formData);
    setSelectedField(null);
  };
  const handleDelete = (announcementID) => {
    setSelectedAnnouncement(announcementID);
  };
  const handleConfirmDelete = () => {
    console.log("Deletinf Announcement with ID:", isSelectedAnnouncement);
    setSelectedAnnouncement(null);
  };

  const updateAnnouncement = [{ name: "update", label: "Update", type: "text" }];

  return (
    <Container className="flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="font-bold text-5xl p-5">Announcements</h2>
      </div>
      <Container className="mb-8">
        {announcements.map((announcement) => (
          <Container key={announcement.id} className="w-[80%] mx-auto mb-4">
            {" "}
            {/* Adjust the width here */}
            <div className="border rounded-lg p-4 bg-[#D9D9D9]">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">{announcement.title}</h3>
                <p className="text-md font-italic">{announcement.date}</p>
              </div>
              <div className="flex justify-between">
                <p className="mr-10">{announcement.details}</p>
                <div className="flex justify-between gap-4 my-7 ">
                  <ButtonStyle onClick={() => setSelectedField("update")} widthButton="18" paddingX="4" paddingY="2">
                    Update
                  </ButtonStyle>
                  <ButtonStyle onClick={() => handleDelete(announcement.id)} widthButton="18" paddingX="4" paddingY="2">
                    Delete
                  </ButtonStyle>
                </div>
              </div>
            </div>
            {isSelectedField === "update" && (
              <PopUpWindow
                isOpen={true}
                onClose={() => setSelectedField(null)}
                onSubmit={handleSubmit}
                title="Update Announcement"
                validationText="Are you sure want to update this announcement?"
                buttonLeft="Yes"
                fields={updateAnnouncement}
              />
            )}
            {isSelectedAnnouncement && (
              <PopUpWindow isOpen={true} onClose={() => setSelectedAnnouncement(null)} onSubmit={handleConfirmDelete} title="Delete Announcement" validationText="Are you sure want to delete this announcement?" buttonLeft="Yes" />
            )}
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default Announcement;
