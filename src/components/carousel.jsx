import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import slide1 from "../assets/slides/anouncement/slide1.png";
import slide2 from "../assets/slides/anouncement/slide2.png";
import slide3 from "../assets/slides/anouncement/slide3.png";
import slide4 from "../assets/slides/anouncement/slide4.png";
import slide5 from "../assets/slides/anouncement/slide5.png";

const Carousel = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const [currentIndex, setCurrentIndex] = useState(2);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    setTimer(interval);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="box-border bg-slate-100 px-2 sm:p-7 py-4 shadow-2xl rounded-2xl overflow-hidden relative lg:p-7 md:p-7">
      <div className="max-w-[1400px] h-[35rem] w-full m-auto relative gap-3">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover duration-500"
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          ></div>
        </div>
        <div className="absolute left-0 right-0 flex justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-4xl cursor-pointer ${
                slideIndex === currentIndex
                  ? "text-yellow-500"
                  : "text-gray-500"
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
