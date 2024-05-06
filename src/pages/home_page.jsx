import React from "react";
import HomeNavbar from "../components/home_navbar";
import Carousel from "../components/carousel";
import MultipleCard from "../components/multiple_card";

const Home_page = () => {
  return (
    <div className="min-h-screen bg-[#d9d9d9] ">
      <HomeNavbar />
      <Carousel />
      <div>
        <h1 className="text-5xl text-center my-10">Our Mission</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/3 text-justify text-3xl gap-x-10 mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui aliquam commodi error provident, ipsum assumenda distinctio reprehenderit praesentium, magni architecto incidunt rem molestiae laboriosam suscipit officia non
            consequatur quas!
          </p>
        </div>
        <div className="ml-20">
          <img src="../assets/svg_image/mission.svg" alt="mission" />
        </div>
      </div>
      <div>
        <h1 className="text-5xl text-center my-10">Our Vision</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="mr-20">
          <img src="../assets/svg_image/vision.svg" alt="vision" />
        </div>
        <div className="w-1/3 text-justify text-3xl gap-x-10 mb-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui aliquam commodi error provident, ipsum assumenda distinctio reprehenderit praesentium, magni architecto incidunt rem molestiae laboriosam suscipit officia non
            consequatur quas!
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-5xl text-center my-20">What Our Students Says</h1>
      </div>
      <MultipleCard />
      <div className="bg-yellow-400">
        <h1 className="text-5xl text-center mt-20 mb-10  pt-10">Follow Our Social Media</h1>
        <div className="flex justify-center items-center space-x-20">
          <img src="../assets/social_media/ig.svg" alt="instagram" className="cursor-pointer hover:opacity-20 w-20 h-20" onClick={() => window.open("https://www.instagram.com/", "_blank")} />
          <img src="../assets/social_media/fb.svg" alt="facebook" className="cursor-pointer hover:opacity-30 w-20 h-20" onClick={() => window.open("https://www.facebook.com/", "_blank")} />
          <img src="../assets/social_media/tiktok.svg" alt="tiktok" className="cursor-pointer hover:opacity-30 w-20 h-20" onClick={() => window.open("https://www.tiktok.com/", "_blank")} />
          <img src="../assets/social_media/x.svg" alt="x" className="cursor-pointer hover:opacity-30 w-20 h-20" onClick={() => window.open("https://www.twitter.com/", "_blank")} />
        </div>
        <h3 className="text-2xl text-center mt-7">in association with RevoU</h3>
        <h3 className="text-2xl text-center ">© group H 2024</h3>
      </div>
    </div>
  );
};

export default Home_page;
