import React, { useState, useEffect } from "react";
import ButtonStyle from "./button";
import PopUpWindow from "./pop_up_window/pop_up_window";

const Profile = () => {
  const [isSelectedField, setSelectedField] = useState(null);
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    const storedProfilePicture = localStorage.getItem("profilePicture");
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture);
    }
  }, []);

  const handleSubmit = (formData) => {
    console.log("form submitted", formData);
    if (formData.picture) {
      const pictureURL = URL.createObjectURL(formData.picture);
      localStorage.setItem("profilePicture", pictureURL);
      setProfilePicture(pictureURL);
    }
    setSelectedField(null);
  };

  const changePicture = [{ name: "picture", label: "Upload", type: "file" }];

  const phoneNumberField = [
    { name: "phoneNumber", label: "New Phone Number", type: "text" },
  ];

  const emailField = [{ name: "email", label: " New Email", type: "email" }];

  const passwordField = [
    { name: "password", label: "New Password", type: "password" },
  ];

  return (
    <div className="xl:h-[80vh]">
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="font-bold text-3xl mb-5">Profile</h2>
        <div className="p-7 bg-[#D9D9D9] rounded-lg flex items-center justify-center flex-col">
          <img
            src={profilePicture}
            alt="user photo"
            className="w-36 h-36 rounded-full mb-4"
          />
          <ButtonStyle
            className="w-28 mt-4"
            onClick={() => setSelectedField("picture")}
          >
            Change
          </ButtonStyle>
        </div>
        <div className="m-5 bg-[#D9D9D9] w-full rounded-xl">
          <div className="m-4 bg-white p-4 rounded-md">
            <div className="font-bold text-lg mb-2">Name of Student</div>
            <div>Conan Kun</div>
          </div>
          <div className="m-4 bg-white p-4 rounded-md">
            <div className="font-bold text-lg mb-2">Birthday:</div>
            <div>January 1, 1997</div>
          </div>
          <div className="m-4 bg-white p-4 rounded-md flex justify-between items-center">
            <div className="gap-10">
              <div className="font-bold text-lg mb-2">Phone Number:</div>
              <div>+628222334456</div>
            </div>
            <ButtonStyle
              widthButton="32"
              onClick={() => setSelectedField("phoneNumber")}
            >
              Change
            </ButtonStyle>
          </div>
          <div className="m-4 bg-white p-4 rounded-md flex justify-between items-center">
            <div>
              <div className="font-bold text-lg mb-2">Email:</div>
              <div>conankun@gmail.com</div>
            </div>
            <ButtonStyle
              widthButton="32"
              onClick={() => setSelectedField("email")}
            >
              Change
            </ButtonStyle>
          </div>
          <div className="m-4 bg-white p-4 rounded-md flex justify-between items-center">
            <div>
              <div className="font-bold text-lg mb-2">Password:</div>
              <div>********</div>
            </div>
            <ButtonStyle
              widthButton="32"
              onClick={() => setSelectedField("password")}
            >
              Change
            </ButtonStyle>
          </div>
        </div>
      </div>
      {isSelectedField === "picture" && (
        <PopUpWindow
          isOpen={true}
          onClose={() => setSelectedField(null)}
          onSubmit={handleSubmit}
          title="Change Profile Picture"
          validationText="Are you sure want to change your profile picture?"
          buttonLeft="Yes"
          fields={changePicture}
        />
      )}
      {isSelectedField === "phoneNumber" && (
        <PopUpWindow
          isOpen={true}
          onClose={() => setSelectedField(null)}
          onSubmit={handleSubmit}
          title="Change Phone Number"
          validationText="Are you sure want to change your phone number?"
          buttonLeft="Yes"
          fields={phoneNumberField}
        />
      )}
      {isSelectedField === "email" && (
        <PopUpWindow
          isOpen={true}
          onClose={() => setSelectedField(null)}
          onSubmit={handleSubmit}
          title="Change Email"
          validationText="Are you sure want to change your email?"
          buttonLeft="Yes"
          fields={emailField}
        />
      )}
      {isSelectedField === "password" && (
        <PopUpWindow
          isOpen={true}
          onClose={() => setSelectedField(null)}
          onSubmit={handleSubmit}
          title="Change Password"
          validationText="Are you sure want to change your password?"
          buttonLeft="Yes"
          fields={passwordField}
        />
      )}
    </div>
  );
};

export default Profile;
