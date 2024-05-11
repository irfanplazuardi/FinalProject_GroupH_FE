import React from "react";
import HomeNavbar from "../components/home_navbar";
import Carousel from "../components/carousel";
import MultipleCard from "../components/multiple_card";
import mission from "../assets/svg_image/mission.svg";
import vision from "../assets/svg_image/vision.svg";
import ig from "../assets/social_media/ig.svg";
import fb from "../assets/social_media/fb.svg";
import x from "../assets/social_media/x.svg";
import tiktok from "../assets/social_media/tiktok.svg";

const Home_page = () => {
  return (
    <div className="min-h-screen bg-[#d9d9d9] ">
      <HomeNavbar />
      <Carousel />
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full md:w-2/3 text-justify text-3xl gap-x-10 mb-4 md:text-3xl sm:text-xl lg:p-6">
          <h1 className="font-semibold lg:text-5xl text-3xl text-center my-10 md:text-3xl sm:text-xl">
            Our Mission
          </h1>
          <p className="text-2xl sm:text-xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui
            aliquam commodi error provident, ipsum assumenda distinctio
            reprehenderit praesentium, magni architecto incidunt rem molestiae
            laboriosam suscipit officia non consequatur quas!
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <img src={mission} alt="mission" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full md:w-2/3 text-justify text-3xl gap-x-10 mb-4 md:text-3xl sm:text-xl lg:p-6">
          <h1 className="font-semibold lg:text-5xl text-3xl text-center my-10 md:text-3xl sm:text-xl">
            Our Vission
          </h1>
          <p className="text-2xl sm:text-xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui
            aliquam commodi error provident, ipsum assumenda distinctio
            reprehenderit praesentium, magni architecto incidunt rem molestiae
            laboriosam suscipit officia non consequatur quas!
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <img src={vision} alt="mission" className="w-full" />
        </div>
      </div>

      <div>
        <h1 className="font-semibold lg:text-5xl text-3xl text-center my-10 md:text-3xl sm:text-xl">
          What Our Students Says
        </h1>
      </div>
      <MultipleCard />
      <div className="bg-yellow-400">
        <h1 className="font-semibold lg:text-5xl text-3xl text-center my-10 md:text-3xl sm:text-xl">
          Follow Our Social Media
        </h1>
        <div className="flex justify-center items-center space-x-20">
          <img
            src={ig}
            alt="instagram"
            className="cursor-pointer hover:opacity-20 w-20 h-20"
            onClick={() => window.open("https://www.instagram.com/", "_blank")}
          />
          <img
            src={fb}
            alt="facebook"
            className="cursor-pointer hover:opacity-30 w-20 h-20"
            onClick={() => window.open("https://www.facebook.com/", "_blank")}
          />
          <img
            src={tiktok}
            alt="tiktok"
            className="cursor-pointer hover:opacity-30 w-20 h-20"
            onClick={() => window.open("https://www.tiktok.com/", "_blank")}
          />
          <img
            src={x}
            alt="x"
            className="cursor-pointer hover:opacity-30 w-20 h-20"
            onClick={() => window.open("https://www.twitter.com/", "_blank")}
          />
        </div>
        <h3 className="text-2xl text-center mt-7">in association with RevoU</h3>
        <h3 className="text-2xl text-center ">© group H 2024</h3>
      </div>
    </div>
  );
};

export default Home_page;
