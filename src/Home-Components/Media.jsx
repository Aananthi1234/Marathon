import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import media1 from "../assets/media/media1.jpeg";
import media3 from "../assets/media/media3.jpeg";
import media4 from "../assets/media/media4.jpeg";
import media7 from "../assets/media/media7.jpeg";
import media9 from "../assets/media/media9.jpeg";
import media10 from "../assets/media/media10.jpeg";
import media6 from "../assets/media/media6.jpeg";
import media8 from "../assets/media/media8.jpeg";
import media11 from "../assets/media/media11.jpeg";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-20px] md:right-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-full shadow-lg transition duration-300"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 md:h-6 md:w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-20px] md:left-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-full shadow-lg transition duration-300"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 md:h-6 md:w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const SponsorsSlider = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // Sponsor data
  const sponsors = [
    { img: media1, name: "Olir Media Zone" },
    { img: media3, name: "Olir Media Core" },
    { img: media4, name: "Avis Media" },
    { img: media7, name: "Focuz Technology" },
    { img: media9, name: "Focuz Technology" },
    { img: media10, name: "Focuz Technology" },
    { img: media6, name: "Avis Media" },
    { img: media8, name: "Focuz Technology" },
    { img: media11, name: "Focuz Technology" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 lg:my-10 md:py-10  w-full h-auto flex flex-col justify-center items-center overflow-hidden ">
      <h2
        className="w-full lg:text-5xl text-2xl sm:text-3xl font-bold text-center tracking-wide lg:mb-10 py-5 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Social media 
      </h2>
      <div className="w-full max-w-screen-xl relative bg-white rounded-md sm:px-10 p-8">
        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center lg:gap-3  rounded-md md:px-10 md:py-10"
            >
              <img
                src={sponsor.img}
                alt={sponsor.name}
                className="w-full h-48 sm:w-full sm:h-52 md:w-full md:h-52 lg:w-full lg:h-[300px] mx-auto object-fill rounded-md border-2 border-orange-300 shadow-sm p-2"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SponsorsSlider;
