import Sidebar from "../../components/sidebar";
import DashboardNavbar from "../../components/dashboard_navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <div className="h-screen p-4 sm:ml-64 bg-[#D9D9D9]">
        <DashboardNavbar />

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
