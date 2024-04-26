import Sidebar from "../../components/sidebar";
import DashboardNavbar from "../../components/dashboard_navbar";

export default function StudentMaterial() {
  return (
    <>
      <Sidebar />

      <div className="h-screen p-4 sm:ml-64 bg-[#D9D9D9]">
        <DashboardNavbar />

        <div className="flex justify-center h-[550px] rounded-3xl bg-white ">
          <div className="grid-rows-2 ">
            <div className="mr-[500px] pr-40">
              <h2 className="font-bold w-full pr-[120px] pt-5">Math - Lesson Material</h2>
            </div>
            <div className="flex justify-around gap-[100px] mt-10 mb-5">
              <div className="w-full">
                <div className="flex w-full items-center justify-center h-[150px] rounded bg-[#D9D9D9]">
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
                <h2>Addition</h2>
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
                <h2>Multiply</h2>
              </div>
            </div>
            <div className="flex justify-around gap-[100px] mt-10">
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
                <h2>Dividing</h2>
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
                <h2>Calculus</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
