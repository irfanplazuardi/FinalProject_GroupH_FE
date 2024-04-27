import Sidebar from "../../../components/sidebar";
import ButtonStyle from "../../../components/button";

const TeacherProfile = () => {
  return (
    <>
      <Sidebar />

      <div className="flex flex-col items-center justify-center h-full ml-64 p-8">
        <h2 className="font-bold text-3xl mb-5">Profile</h2>
        <div className="p-7 bg-[#D9D9D9] rounded-lg flex items-center justify-center flex-col">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
            className="w-36 h-36 rounded-full mb-4"
          />
          <ButtonStyle className="w-28 mt-4">Change</ButtonStyle>
        </div>
        <div className="m-5 bg-[#D9D9D9] w-full rounded-xl">
          <div className="m-7 bg-white p-4 rounded-md">
            <div className="font-bold text-lg mb-2">Name of Teacher</div>
            <div>Conan Kun</div>
          </div>
          <div className="m-7 bg-white p-4 rounded-md">
            <div className="font-bold text-lg mb-2">Birthday:</div>
            <div>January 1, 1997</div>
          </div>
          <div className="m-7 bg-white p-4 rounded-md flex justify-between items-center">
            <div>
              <div className="font-bold text-lg mb-2">Phone Number:</div>
              <div>+628222334456</div>
            </div>
            <ButtonStyle className={`w-32`}>Change</ButtonStyle>
          </div>
          <div className="m-7 bg-white p-4 rounded-md flex justify-between items-center">
            <div>
              <div className="font-bold text-lg mb-2">Email:</div>
              <div>conankun@gmail.com</div>
            </div>
            <ButtonStyle className={`w-32`}>Change</ButtonStyle>
          </div>
          <div className="m-7 bg-white p-4 rounded-md flex justify-between items-center">
            <div>
              <div className="font-bold text-lg mb-2">Password:</div>
              <div>********</div>
            </div>
            <ButtonStyle className={`w-32`}>Change</ButtonStyle>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
