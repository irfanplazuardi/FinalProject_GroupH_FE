import React, { useState } from "react";
import Container from "./container";
import ButtonStyle from "./button";
import PopUpWindowUpdate from "./pop_up_window/update_pop_up_window";

const Announcement = () => {
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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices.",
    },
    {
      id: 3,
      title: "Important Announcement 3",
      date: "May 10, 2024",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices.",
    },
    {
      id: 4,
      title: "Important Announcement 4",
      date: "May 10, 2024",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices.",
    },
    {
      id: 5,
      title: "Important Announcement 5",
      date: "May 10, 2024",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vitae purus ultrices.",
    },
  ];

  const [selectedField, setSelectedField] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const handleSubmit = (formData) => {
    console.log("Form submitted", formData);
    setSelectedField(null);
  };

  const handleDelete = (announcementID) => {
    setSelectedAnnouncement(announcementID);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting Announcement with ID:", selectedAnnouncement);
    setSelectedAnnouncement(null);
  };

  const updateAnnouncement = [
    { name: "update", label: "Update", type: "text" },
  ];

  return (
    <div className="xl:h-[80vh] md:h-[50vh]">
      <Container className="flex flex-col items-center xl:w-full">
        <div className="text-center">
          <h2 className="font-bold text-3xl p-5">Announcements</h2>
        </div>
        <Container className="mb-8">
          {announcements.map((announcement) => (
            <Container
              key={announcement.id}
              className="w-full md:w-[80%] mx-auto mb-4"
            >
              <div className="border rounded-lg p-3 bg-[#D9D9D9]">
                <div className="flex justify-between text-lg">
                  <h3 className="font-bold">{announcement.title}</h3>
                  <p className="text-md font-italic">{announcement.date}</p>
                </div>
                <div className="flex justify-between">
                  <p className="mr-2 text-sm overflow-hidden">
                    {announcement.details}
                  </p>
                  <div className="flex gap-2 my-2">
                    <ButtonStyle onClick={() => setSelectedField("update")}>
                      Update
                    </ButtonStyle>
                    <ButtonStyle onClick={() => handleDelete(announcement.id)}>
                      Delete
                    </ButtonStyle>
                  </div>
                </div>
              </div>
              {selectedField === "update" && (
                <PopUpWindowUpdate
                  isOpen={true}
                  onClose={() => setSelectedField(null)}
                  onSubmit={handleSubmit}
                  title="Update Announcement"
                  validationText="Are you sure you want to update this announcement?"
                  buttonLeft="Yes"
                  fields={updateAnnouncement}
                />
              )}
              {selectedAnnouncement && (
                <PopUpWindowUpdate
                  isOpen={true}
                  onClose={() => setSelectedAnnouncement(null)}
                  onSubmit={handleConfirmDelete}
                  title="Delete Announcement"
                  validationText="Are you sure you want to delete this announcement?"
                  buttonLeft="Yes"
                />
              )}
            </Container>
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default Announcement;
