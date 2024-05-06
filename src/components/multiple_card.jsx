import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profpic1 from "../assets/slides/profpic/profpic1.jpg";
import profpic2 from "../assets/slides/profpic/profpic2.jpg";
import profpic3 from "../assets/slides/profpic/profpic3.jpg";
import profpic4 from "../assets/slides/profpic/profpic4.jpg";
import profpic5 from "../assets/slides/profpic/profpic5.jpg";
import profpic6 from "../assets/slides/profpic/profpic6.jpg";

const data = [
  {
    id: 1,
    imageUrl: profpic1,
    description: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, assumenda!"`,
  },
  {
    id: 2,
    imageUrl: profpic2,
    description: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, assumenda!"`,
  },
  {
    id: 3,
    imageUrl: profpic3,
    description: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, assumenda!"`,
  },
  {
    id: 4,
    imageUrl: profpic4,
    description: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, assumenda!"`,
  },
  {
    id: 5,
    imageUrl: profpic5,
    description: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, assumenda!"`,
  },
  {
    id: 6,
    imageUrl: profpic6,
    description: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, assumenda!"`,
  },
];

const Card = ({ imageUrl, description }) => {
  return (
    <div className="flex flex-col items-center border rounded-md p-10 m-5 bg-white hover:shadow-2xl cursor-pointer">
      <img src={imageUrl} alt="Card" className="rounded-full w-40 h-40" />
      <p className="mt-2 text-center text-xl">{description}</p>
    </div>
  );
};

const MultipleCardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="box-border w-[65rem] h-[30rem] bg-slate-200 px-12 py-10 shadow-2xl rounded-2xl m-auto">
      <div className="mx-auto max-w-3xl">
        <Slider {...settings}>
          {data.map((card) => (
            <div key={card.id}>
              <Card imageUrl={card.imageUrl} description={card.description} />
            </div>
          ))}
        </Slider>
        <div className="text-center mt-4"></div>
      </div>
    </div>
  );
};

export default MultipleCardCarousel;
