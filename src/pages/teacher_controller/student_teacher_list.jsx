import Sidebar from "../../components/sidebar";

export default function TeacherList() {
  return (
    <>
      <Sidebar />

      <div className="h-screen p-4 sm:ml-64 bg-[#D9D9D9]">
        <div className="grid grid-cols-3 grid-rows-2">
            <div className=" col-span-2 bg-red-600"></div>
            <div className=" col-start-3 bg-blue-600"></div>
            <div className=" col-start-3 row-span-2 bg-green-600"></div>
        </div>
      </div>
    </>
  );
}
