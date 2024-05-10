import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBell,
  faCircleUser,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export function NavbarProfileMenu() {
  const course_icon = <FontAwesomeIcon icon={faBook} />;
  const bel_icon = <FontAwesomeIcon icon={faBell} />;
  const profile_icon = <FontAwesomeIcon icon={faCircleUser} />;
  const gear_icon = <FontAwesomeIcon icon={faGear} />;
  const logout_icon = <FontAwesomeIcon icon={faArrowRightFromBracket} />;
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const navigateToAnnouncement = () => {
    if (role === "teacher") {
      navigate("/dashboard/teacher/announcement");
    } else {
      navigate("/dashboard/student/announcement");
    }
  };

  const navigateToCourse = () => {
    if (role === "teacher") {
      navigate("/dashboard/teacher/course");
    } else {
      navigate("/dashboard/student/course");
    }
  };

  const navigateToProfile = () => {
    if (role === "teacher") {
      navigate("/dashboard/teacher/profile");
    } else {
      navigate("/dashboard/student/profile");
    }
  };

  const navigateToSettings = () => {
    if (role === "teacher") {
      navigate("/dashboard/teacher/settings");
    } else {
      navigate("/dashboard/student/settings");
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        />
      </MenuHandler>
      <MenuList className="bg-gray-400 dark:bg-slate-800 p-3">
        <ul className="flex flex-col gap-3 p-2">
          <li onClick={navigateToCourse}>
            <Link to="/dashboard/:role">
              <MenuItem className="flex items-center gap-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {course_icon}
                </svg>

                <Typography variant="small" className="font-medium">
                  Course
                </Typography>
              </MenuItem>
            </Link>
          </li>
          <li onClick={navigateToAnnouncement}>
            <Link>
              <MenuItem className="flex items-center gap-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {bel_icon}
                </svg>

                <Typography variant="small" className="font-medium">
                  Announcement
                </Typography>
              </MenuItem>
            </Link>
          </li>
          <li onClick={navigateToProfile}>
            <Link>
              <MenuItem className="flex items-center gap-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {profile_icon}
                </svg>

                <Typography variant="small" className="font-medium">
                  Profile
                </Typography>
              </MenuItem>
            </Link>
          </li>
          <li onClick={navigateToSettings}>
            <Link>
              <MenuItem className="flex items-center gap-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {gear_icon}
                </svg>
                <Typography variant="small" className="font-medium">
                  Settings
                </Typography>
              </MenuItem>
            </Link>
          </li>
          <hr className="my-2 border-blue-gray-50" />
          <li onClick={logout}>
            <Link>
              <MenuItem className="flex items-center gap-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {logout_icon}
                </svg>
                <Typography variant="small" className="font-medium">
                  Logout
                </Typography>
              </MenuItem>
            </Link>
          </li>
        </ul>
      </MenuList>
    </Menu>
  );
}
