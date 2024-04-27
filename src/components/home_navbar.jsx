import VogueSchoolLogoLarge from "./logo_large";

const HomeNavbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-baseline w-11/12 m-auto mx-20 my-5">
        <div className="flex items-center">
          <VogueSchoolLogoLarge fontSize="5xl" color="black" />
        </div>
        <div className="flex items-center space-x-10">
          <a href="#" className="hover:text-yellow-400 text-xl">
            Course
          </a>
          <a href="#" className="hover:text-yellow-400 text-xl">
            About
          </a>
          <a href="/login" className="hover:text-yellow-400 text-xl">
            Login
          </a>
        </div>
      </div>
      <hr className="w-12/12 mt-2 border-black m-10" />
    </nav>
  );
};

export default HomeNavbar;
