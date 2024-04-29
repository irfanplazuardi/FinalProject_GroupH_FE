import { Link } from "react-router-dom";
const HomeNavbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-baseline w-11/12 mx-auto pt-5">
        <div className="flex items-center">
          <img src="src/assets/svg_image/Vogue_school_logo.svg" alt="logo" />
        </div>
        <div className="flex items-center space-x-10">
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
