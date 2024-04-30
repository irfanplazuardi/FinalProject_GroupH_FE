import VogueSchoolLogoLarge from "./logo_large";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-baseline w-11/12 mx-auto relative">
        <div className="flex items-center">
          <VogueSchoolLogoLarge fontSize="5xl" color="black" />
        </div>
        <div className="flex absolute bottom-5 right-0 gap-10">
          <Link to="#" className="hover:text-yellow-400 text-xl">
            Course
          </Link>
          <Link to="#" className="hover:text-yellow-400 text-xl">
            About
          </Link>
          <Link to="login" className="hover:text-yellow-400 text-xl">
            Login
          </Link>
        </div>
      </div>
      <hr className="w-12/12 mt-2 border-black m-10" />
    </nav>
  );
};

export default HomeNavbar;
