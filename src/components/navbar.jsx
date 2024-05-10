import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { NavbarProfileMenu } from "./navbar_profile_menu";

const Navbar = () => {
  const mail_icon = <FontAwesomeIcon icon={faInbox} />;
  const user_name = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  return (
    <>
      <div className="ml-1 w-1/3 bg-[#D9D9D9] rounded-full hidden sm:inline">
        <input
          type="text"
          name="search_bar"
          id="search_bar"
          placeholder="Search"
          className="pl-4 pt-2 pb-2 w-full focus:outline-none bg-transparent "
        />
      </div>
      <div className="flex justify-between items-end gap-2">
        <h2 className="font-bold text-2xl dark:text-white md:text-xl sm:text-sm pl-3">
          Hello, {user_name}!{" "}
        </h2>
        <h2 className="items-end font-bold text-lg dark:text-white md:text-sm sm:text-sm">
          (vogue <span className="font-bold text-blue-500">{role}</span>)
        </h2>
      </div>
      <div className="flex items-center gap-5 dark:text-white sm:gap-2">
        {mail_icon}
        {/* <img
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="user photo"
          className="w-10 h-10 rounded-full visible sm:invisible"
        /> */}
        <NavbarProfileMenu />
      </div>
    </>
  );
};

export default Navbar;
