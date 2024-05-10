import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import apiService from "../../api/api_service";

const DeleteTeacher = ({ teacherID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const access_token = localStorage.getItem("access_token");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    apiService
      .deleteTeacherID(teacherID, access_token)
      .then(() => {
        toggleModal();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting course:", error);
      });
    toggleModal();
  };

  return (
    <>
      <button
        className="px-2 hover:bg-red-500 rounded-lg"
        onClick={toggleModal}
      >
        <FontAwesomeIcon icon={faTrash} title="Delete" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="flex flex-col justify-center gap-4 bg-white p-8 rounded-lg w-[30rem] h-[17rem]">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-2xl font-bold">Delete Data</h1>
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_658_3063)">
                  <path
                    d="M32.5359 6C34.0755 3.33333 37.9245 3.33333 39.4641 6L63.7128 48C65.2524 50.6667 63.3279 54 60.2487 54H11.7513C8.67208 54 6.74759 50.6667 8.28719 48L32.5359 6Z"
                    fill="#F8FD00"
                  />
                </g>
                <path
                  d="M38.9347 18.9091L38.4659 39.4489H33.892L33.4375 18.9091H38.9347ZM36.179 48.3125C35.3172 48.3125 34.5786 48.0095 33.9631 47.4034C33.357 46.7973 33.054 46.0587 33.054 45.1875C33.054 44.3352 33.357 43.6061 33.9631 43C34.5786 42.3939 35.3172 42.0909 36.179 42.0909C37.0218 42.0909 37.7509 42.3939 38.3665 43C38.9915 43.6061 39.304 44.3352 39.304 45.1875C39.304 45.7652 39.1572 46.2907 38.8636 46.7642C38.5795 47.2377 38.2008 47.6165 37.7273 47.9006C37.2633 48.1752 36.7472 48.3125 36.179 48.3125Z"
                  fill="black"
                />
                <defs>
                  <filter
                    id="filter0_d_658_3063"
                    x="1.94512"
                    y="4"
                    width="66.1098"
                    height="60.8"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-1" dy="6" />
                    <feGaussianBlur stdDeviation="2.4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_658_3063"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_658_3063"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <p className="text-lg">
                When you click <span className="font-bold">"DELETE"</span>{" "}
                button
              </p>
              <p>Selected data will be gone permanently</p>
            </div>
            <div className="flex flex-row justify-center gap-10">
              <button
                className="bg-black hover:bg-blue-800 text-white font-medium py-1 px-[2rem] rounded-lg"
                onClick={handleDelete}
              >
                DELETE
              </button>
              <button
                className="bg-black hover:bg-blue-800 text-white font-medium py-1 px-[2rem] rounded-lg"
                onClick={toggleModal}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteTeacher;
