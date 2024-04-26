import Sidebar from "../../components/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const mail_icon = <FontAwesomeIcon icon={faInbox} />;
  return (
    <>
      <Sidebar />

      <div className="h-screen p-4 sm:ml-64 bg-[#D9D9D9]">
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

        <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-4">
          <div className="flex justify-center rounded-3xl col-span-3 row-span-2 bg-white ">
            <div className="grid-rows-2 ">
              <div className="mr-[500px] pr-10">
                <h2 className="font-bold w-full pr-[120px] pt-5">
                  All Courses
                </h2>
              </div>
              <div className="flex justify-around gap-[30px] mt-10 mb-5">
                <div className="w-full">
                  <div className="flex w-auto items-center justify-center h-[150px] rounded bg-[#D9D9D9]">
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </p>
                  </div>
                  <h2>Matematika</h2>
                </div>
                <div className="w-full ">
                  <div className="flex w-auto items-center justify-center h-[150px] rounded bg-[#D9D9D9]">
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </p>
                  </div>
                  <h2>Sejarah</h2>
                </div>
              </div>
              <div className="flex justify-around gap-[30px] mt-10">
                <div className="w-full">
                  <div className="flex items-center justify-center h-[150px] rounded bg-[#D9D9D9]">
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </p>
                  </div>
                  <h2>PPKN</h2>
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-center h-[150px] rounded bg-[#D9D9D9]">
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
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
          
          <div className="mb-4 rounded-3xl col-start-4 row-span-1 grid-rows-3 bg-[#F1F1F1]">
            <div className="flex justify-between w-full p-3 mt-1">
              <h2 className="pl-3">Progress</h2>
              <button className="pr-3 text-blue-600">see all</button>
            </div>
            <div className="flex items-center justify-between mr-3 ml-3 mb-3 h-12 rounded-3xl bg-white">
              <div className="pl-5">
                <h2>Matematika</h2>
              </div>
              <h2 className="pr-4">100</h2>
            </div>
            <div className="flex items-center justify-between mr-3 ml-3 mb-3 h-12 rounded-3xl bg-white">
              <div className="pl-5">
                <h2>Fisika</h2>
              </div>
              <h2 className="pr-4">100</h2>
            </div>
            <div className="flex items-center justify-between mr-3 ml-3 mb-3 h-12 rounded-3xl bg-white">
              <div className="pl-5">
                <h2>Kimia</h2>
              </div>
              <h2 className="pr-4">100</h2>
            </div>
            
          </div>
          <div className="mb-4 rounded-3xl col-start-4 row-span-2 grid-rows-3 bg-[#F1F1F1]">
            <div className="flex justify-between w-full p-3 mt-1">
              <h2 className="pl-3">Schedules</h2>
              <button className="pr-3 text-blue-600">see all</button>
            </div>
            <div className="flex justify-between mr-3 ml-3 mb-3 h-12 rounded-3xl bg-white">
              <div className="pl-5">
                <h2>Matematika</h2>
                <h2>Bambang S.Pd</h2>
              </div>
              <h2 className="pr-4">07.30 WIB</h2>
            </div>
            <div className="flex justify-between mr-3 ml-3 mb-3 h-12 rounded-3xl bg-white">
              <div className="pl-5">
                <h2>Matematika</h2>
                <h2>Bambang S.Pd</h2>
              </div>
              <h2 className="pr-4">07.30 WIB</h2>
            </div>
            <div className="flex justify-between mr-3 ml-3 h-12 rounded-3xl bg-white">
              <div className="pl-5">
                <h2>Matematika</h2>
                <h2>Bambang S.Pd</h2>
              </div>
              <h2 className="pr-4">07.30 WIB</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
