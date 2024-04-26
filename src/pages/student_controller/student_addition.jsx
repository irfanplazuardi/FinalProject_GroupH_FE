import Sidebar from "../../components/sidebar";
import DashboardNavbar from "../../components/dashboard_navbar";

export default function StudentAddition() {
  return (
    <>
      <Sidebar />

      <div className="h-screen p-4 sm:ml-64 bg-[#D9D9D9]">
        <DashboardNavbar />

        <div className="flex justify-center h-[550px] rounded-3xl bg-white ">
          <div className="grid-rows-2 ">
            <div className="justify-around gap-[100px] mt-10 mb-5">
              <h2 className="font-bold w-full pr-[470px] pl-[470px]">Additional</h2>
              <div className="w-full mt-5">
                <div className="w-full justify-center pt-5 h-[200px] rounded bg-[#D9D9D9]">
                  <p className="flex justify-center text-xl">
                    <h2>Penambahan adalah .....</h2>
                  </p>
                  <p className="flex justify-center text-xl">
                    <h2>Penjelasn Materi.....</h2>
                  </p>
                </div>
              </div>
              <div className="w-full mt-5">
                <div className="flex w-full  justify-center pt-5 h-[200px] rounded bg-[#D9D9D9]">
                  <p className="text-xl">
                    <h2>Contoh Soal</h2>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
