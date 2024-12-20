import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lion from "../assets/lion.jpeg"
import olir from "../assets/olir.png";
import sasi from "../assets/sasi.jpeg";
import core from "../assets/core.jpeg";
import avis from "../assets/avis.jpeg";
import sds from "../assets/sdslogo.png";
import dayu from "../assets/DayuMart.png";
import magic from "../assets/magic.jpeg";
import PromotionPartners from "./Promotionpartners";

const SponsorsSlider = () => {
  // Sponsor data
  const sponsors = [
    { img: lion, name: "Lions Club" },
    { img: olir, name: "Olir Media Zone" },
    { img: sasi, name: "SasiKumar Edits" },
    { img: core, name: "Olir Media Core" },
    { img: avis, name: "Avis Media" },
    { img: sds, name: "SDS Technology" },
    { img: dayu, name: "Dayu Mart" },
    { img: magic, name: "Magic Computers" },
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white lg:my-5 lg:py-10 px-4 w-full lg:w-[95%] h-auto flex flex-col justify-center items-center overflow-hidden rounded-md">
      {/* Title */}
      <h2
        className="w-full lg:text-4xl text-xl sm:text-2xl font-bold text-center tracking-wide lg:mb-10 py-5 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 uppercase"
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Our Sponsors & Partners
      </h2>

      {/* Slider */}
      <div className="w-full mx-auto ">
        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col justify-center items-center text-center sm:p-4  "
            >
              {/* Image Wrapper */}
              <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex justify-center items-center rounded-full border-[1px] border-green-700 shadow-lg transition-all duration-300 hover:scale-105 mx-auto">
                <img
                  src={sponsor.img}
                  alt={sponsor.name}
                  className="w-full h-full object-contain rounded-full "
                />
              </div>
              {/* Sponsor Name */}
              <h3 className="text-xs sm:text-sm lg:text-sm font-semibold text-gray-600 text-center mt-3">
                {sponsor.name}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
      <PromotionPartners />
    </div>
  );
};

export default SponsorsSlider;
