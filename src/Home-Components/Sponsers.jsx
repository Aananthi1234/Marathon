import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import olir from "../assets/olir.png";
import sasi from "../assets/sasi.jpeg";
import core from "../assets/core.jpeg";
import avis from "../assets/avis.png";
import { div } from "framer-motion/client";

const SponsorsSlider = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="bg-gray-100 w-full h-[500px] lg:px-10 px-5 mb-10 flex flex-col justify-center items-center">
      <div className="bg-white lg:my-10 py-5 px-5 w-[90%] h-[400px] flex flex-col justify-center items-center overflow-hidden rounded-md">
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
        <div className="max-w-screen-lg mx-auto ">
          <Slider {...settings}>
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center gap-5 p-3 hover:scale-[1.05] transform transition-all duration-500 "
              >
                <img
                  src={sponsor.img}
                  alt={sponsor.name}
                  className="w-40 h-40 mx-auto object-contain mb-3 border-[1px] border-orange-300 rounded-full shadow-lg hover:shadow-none"
                />
                <h3 className="w-full text-lg font-semibold text-gray-800 text-center tracking-wide">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSlider;
