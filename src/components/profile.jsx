import React, { useState, useEffect } from "react";
import ButtonStyle from "./button";
import PopUpWindow from "./pop_up_window/pop_up_window";
import apiService from "../api/api_service";

const Profile = () => {
  const [isSelectedField, setSelectedField] = useState(null);
  const [profilePicture, setProfilePicture] = useState("");
  const [profile, setProfile] = useState([]);
  // const user_role = localStorage.getItem("role");

  useEffect(() => {
    const storedProfilePicture = localStorage.getItem("profilePicture");
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture);
    }
  }, []);

  useEffect(() => {
    apiService.getProfileData().then((data) => {
      setProfile(data.profile);
      console.log(data.profile);
    });
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
    <div className="xl:h-[80vh] md:h-[50vh]">
      <div className="flex flex-col items-center justify-center py-3 xl:w-[100vh]">
        <h2 className="font-bold text-3xl dark:text-white">Profile</h2>
        <div className="m-4 bg-[#D9D9D9] rounded-xl xl:w-[80vh] my-3">
          <div className="m-2 bg-[#D9D9D9] rounded-lg flex flex-col items-center justify-center gap-2">
            <img
              src={profilePicture}
              alt="user photo"
              className="w-20 h-20 rounded-xl mt-2"
            />
            <ButtonStyle
              className="w-20 m-2 mx-10"
              onClick={() => setSelectedField("picture")}
              widthButton="24"
            >
              Change
            </ButtonStyle>
          </div>
          <div className="m-2 bg-white p-2 rounded-md">
            <div className="font-bold mb-1 text-lg">Name of Student</div>
            <div className="text-sm">{profile.name}</div>
          </div>
          <div className="m-2 bg-white p-2 rounded-md">
            <div className="font-bold mb-1 text-lg">Birthday:</div>
            <div className="text-sm">{profile.birthday}</div>
          </div>
          <div className="m-2 bg-white p-2 rounded-md flex justify-between items-center">
            <div className="gap-2">
              <div className="font-bold mb-1 text-lg">Phone Number:</div>
              <div className="text-sm">{profile.phone}</div>
            </div>
            <ButtonStyle
              widthButton="24"
              onClick={() => setSelectedField("phoneNumber")}
            >
              Change
            </ButtonStyle>
          </div>
          <div className="m-2 bg-white p-2 rounded-md flex justify-between items-center">
            <div className="gap-2">
              <div className="font-bold mb-1 text-lg">Email:</div>
              <div className="text-sm">{profile.email}</div>
            </div>
            <ButtonStyle
              widthButton="24"
              onClick={() => setSelectedField("email")}
            >
              Change
            </ButtonStyle>
          </div>
          <div className="m-2 bg-white p-2 rounded-md flex justify-between items-center">
            <div>
              <div className="font-bold mb-1 text-lg">Password:</div>
              <div className="text-sm">{profile.password}</div>
            </div>
            <ButtonStyle
              widthButton="24"
              onClick={() => setSelectedField("password")}
            >
              Change
            </ButtonStyle>
          </div>
        </div>
      </div>
      {/* Pop-up windows for editing profile fields */}
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
