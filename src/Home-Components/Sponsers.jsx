import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import olir from "../assets/olir.png";
import sasi from "../assets/sasi.jpeg";
import core from "../assets/core.jpeg";
import avis from "../assets/avis.png";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer border-[1px] border-gray-500  hover:bg-gray-400 p-2 rounded-full shadow-lg"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-500"
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
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer border-[1px] border-gray-500 hover:bg-gray-400 p-2 rounded-full shadow-lg"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-500 "
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
    slidesToShow: 3,
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
    { img: olir, name: "Olir Media Zone" },
    { img: sasi, name: "SasiKumar Edits" },
    { img: core, name: "Olir Media Core" },
    { img: avis, name: "Avis Media" },
    { img: sasi, name: "Focuz Technology" },
  ];

  return (
    <div className="bg-white lg:my-20 my-10 lg:py-10 px-5 w-full lg:w-[90%] h-auto flex flex-col justify-center items-center overflow-hidden rounded-md">
      <h2
        className="w-full lg:text-5xl text-3xl font-bold text-center tracking-wide lg:mb-10 py-5 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Our Sponsors & Partners
      </h2>
      <div className="w-full max-w-screen-lg mx-auto py-5 relative">
        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center gap-5 p-3 hover:scale-[1.05] transform transition-all duration-500 lg:px-18"
            >
              <img
                src={sponsor.img}
                alt={sponsor.name}
                className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto object-contain mb-3 border-[1px] border-orange-300 rounded-full shadow-lg hover:shadow-none"
              />
              <h3 className="w-full text-sm sm:text-base lg:text-base font-semibold text-blue-500 text-center tracking-wider uppercase">
                {sponsor.name}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SponsorsSlider;
