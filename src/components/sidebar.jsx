import { Link } from "react-router-dom";
import VogueSchoolLogoSmall from "./logo_small";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBell,
  faCircleUser,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const course_icon = <FontAwesomeIcon icon={faBook} />;
  const bel_icon = <FontAwesomeIcon icon={faBell} />;
  const profile_icon = <FontAwesomeIcon icon={faCircleUser} />;
  const gear_icon = <FontAwesomeIcon icon={faGear} />;
  const logout_icon = <FontAwesomeIcon icon={faArrowRightFromBracket} />;

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#D9D9D9] outline-none"
        aria-label="Sidebar"
      >
        <div className="h-[90vh] px-3 py-4 ml-4 mt-3 overflow-y-auto rounded-3xl bg-gray-800">
          <Link className="flex items-center ps-9 mb-5" to="/dashboard/:role">
            <VogueSchoolLogoSmall />
          </Link>
          <ul className="space-y-2 font-medium flex flex-col justify-between md:h-[82%] xl:h-[84%]">
            <div>
              <li onClick={() => navigate("/dashboard/course")}>
                <Link
                  to="/dashboard/:role"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    {course_icon}
                  </svg>
                  <span className="ms-3">Course</span>
                </Link>
              </li>
              <li onClick={() => navigate("/dashboard/announcement")}>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    {bel_icon}
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Announcement
                  </span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    3
                  </span>
                </a>
              </li>
              <li onClick={() => navigate("/dashboard/profile")}>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {profile_icon}
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                </a>
              </li>
              <li onClick={() => navigate("/dashboard/settings")}>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    {gear_icon}
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>
            </div>
            <div>
              <li onClick={() => navigate("/login")}>
                {/* <a className="flex items-center xl:mt-[49vh] lg:mt-[32vh] p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group "> */}
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    {logout_icon}
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
}
