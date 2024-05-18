import React, { useState, useEffect } from "react";
import ButtonStyle from "./button";
import PopUpWindow from "./pop_up_window/pop_up_window";
import apiService from "../api/api_service";
import EditProfileModal from "./modals/edit_profile";

const Profile = () => {
  const user_role = localStorage.getItem("role");
  const [isSelectedField, setSelectedField] = useState(null);
  const [profilePicture, setProfilePicture] = useState("");
  const [dataUser, setDataUser] = useState(null);
  const access_token = localStorage.getItem("access_token");
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    apiService
      .getUserData(access_token, user_role, user_id)
      .then((data) => {
        if (user_role === "teacher") {
          setDataUser(data.teacher);
        } else {
          setDataUser(data.student);
        }
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

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
  const phoneNumberField = [{ name: "phoneNumber", label: "New Phone Number", type: "text" }];
  const emailField = [{ name: "email", label: "New Email", type: "email" }];
  const passwordField = [{ name: "password", label: "New Password", type: "password" }];

  return (
    <div className="xl:h-[80vh] md:h-[50vh]">
      <div className="flex flex-col items-center justify-center py-3 xl:w-[100vh]">
        <h2 className="font-bold text-3xl dark:text-white">Profile</h2>
        <div className="m-4 bg-[#D9D9D9] rounded-xl xl:w-[80vh] my-3">
          <div className="m-2 bg-[#D9D9D9] rounded-lg flex flex-col items-center justify-center gap-2">
            <img src={profilePicture} alt="user photo" className="w-20 h-20 rounded-xl mt-2" />
            <ButtonStyle className="w-20 m-2 mx-10" onClick={() => setSelectedField("picture")} widthButton="24">
              Change
            </ButtonStyle>
          </div>
          {dataUser && (
            <>
              <div className="m-2 bg-white p-2 rounded-md">
                <div className="font-bold mb-1 text-lg">Name of {user_role === "student" ? "Student" : "Teacher"}</div>
                <div className="text-sm">{user_role === "teacher" ? dataUser.teacher_name : dataUser.student_name}</div>
              </div>
              <div className="m-2 bg-white p-2 rounded-md">
                <div className="font-bold mb-1 text-lg">Birthday:</div>
                <div className="text-sm">{user_role === "teacher" ? dataUser.teacher_birthday : dataUser.student_birthday}</div>
              </div>
              <div className="m-2 bg-white p-2 rounded-md flex justify-between items-center">
                <div className="gap-2">
                  <div className="font-bold mb-1 text-lg">Phone Number:</div>
                  <div className="text-sm">{dataUser.phone}</div>
                </div>
                <EditProfileModal title={"Phone Number"} fieldName={"phone"} />
              </div>
              <div className="m-2 bg-white p-2 rounded-md flex justify-between items-center">
                <div className="gap-2">
                  <div className="font-bold mb-1 text-lg">Email:</div>
                  <div className="text-sm">{user_role === "teacher" ? dataUser.teacher_email : dataUser.student_email}</div>
                </div>
                <EditProfileModal title={"Email"} fieldName={`${user_role}_email`} />
              </div>
              <div className="m-2 bg-white p-2 rounded-md flex justify-between items-center">
                <div>
                  <div className="font-bold mb-1 text-lg">Password:</div>
                  <div className="text-sm">********</div>
                </div>
                <EditProfileModal title={"Password"} fieldName={"password"} />
              </div>
            </>
          )}
        </div>
      </div>
      {isSelectedField === "picture" && (
        <PopUpWindow isOpen={true} onClose={() => setSelectedField(null)} onSubmit={handleSubmit} title="Change Profile Picture" validationText="Are you sure want to change your profile picture?" buttonLeft="Yes" fields={changePicture} />
      )}
    </div>
  );
};

export default Profile;
