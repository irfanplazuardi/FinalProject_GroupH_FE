import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";


export default function DashboardNavbar() {
  const mail_icon = <FontAwesomeIcon icon={faInbox} />;

  return (
    <>
      <div className="p-4 mb-4 flex justify-between items-center bg-white rounded-full ">
        <div className="ml-1 flex w-1/3 bg-[#D9D9D9] rounded-full">
          <input
            type="text"
            name="search_bar"
            id="search_bar"
            placeholder="Search"
            className="pl-4 pt-2 pb-2 w-full focus:outline-none bg-transparent "
          />
        </div>
        <div className="flex items-end">
          <h2 className="font-bold text-3xl">Hello, Conan!</h2>
          <h2 className="items-end">(elementary student)</h2>
        </div>
        <div className="flex items-center gap-5">
          {mail_icon}
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </>
  );
}
