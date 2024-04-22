import Sidebar from "../componets/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const mail_icon = <FontAwesomeIcon icon={faInbox} />;
  return (
    <>
      <Sidebar />

      <div className="h-screen p-4 sm:ml-64 bg-[#D9D9D9]">
        <div className="p-4 mb-4 flex justify-between items-center bg-white rounded-full ">
          <div className="ml-4 flex w-1/4 bg-[#D9D9D9] rounded-full">
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

        <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-4">
          <div className="flex justify-center rounded-3xl col-span-3 row-span-2 bg-white ">
            <div className="grid grid-rows-2 ">
              <div className="mr-80 pr-40">
                <h2 className="font-bold w-full p-5">All Courses</h2>
              </div>
              <div className="flex justify-around gap-10">
                <div className="w-full">
                  <div className="flex w-auto items-center justify-center h-24 rounded bg-[#D9D9D9]">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                      <svg
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </p>
                  </div>
                  <h2>Matematika</h2>
                </div>
                <div className="w-full ">
                  <div className="flex w-auto items-center justify-center h-24 rounded bg-[#D9D9D9]">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                      <svg
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </p>
                  </div>
                  <h2>Sejarah</h2>
                </div>
              </div>
              <div className="flex justify-around gap-10">
                <div className="w-full">
                  <div className="flex items-center justify-center h-24 rounded bg-[#D9D9D9]">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                      <svg
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </p>
                  </div>
                  <h2>PPKN</h2>
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-center h-24 rounded bg-[#D9D9D9]">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                      <svg
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </p>
                  </div>
                  <h2>Biologi</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-4 gap-4 mb-4">
            <div className="flex items-center justify-center h-12 rounded-3xl bg-[#F1F1F1]">
              <h2>Student Progress</h2>
            </div>
            <div className="flex items-center justify-center h-12 rounded-3xl bg-[#F1F1F1]">
              <h2>Make New Course</h2>
            </div>
            <div className="flex items-center justify-center h-12 rounded-3xl bg-[#F1F1F1]">
              <h2>New Announcement</h2>
            </div>
            <div className="flex items-center justify-center h-12 rounded-3xl bg-[#F1F1F1]">
              <h2>Student / Teacher List</h2>
            </div>
          </div>
          <div className="mb-4 flex justify-center rounded-3xl col-start-4 row-span-2 bg-[#F1F1F1]">
            <div className="grid grid-rows-3"></div>
            <div className="flex jusstify-between w-full mb-40 p-5">
              <h2>Schedules</h2>
              <h4>see all</h4>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}
