import React from "react";
import olir from "../assets/olir.png";
import sasi from "../assets/sasi.jpeg";
import core from "../assets/core.jpeg";
import avis from "../assets/avis.png";

const SponsorsSlider = () => {
  // Sponsor data
  const sponsors = [
    { img: olir, name: "Olir Media Zone" },
    { img: sasi, name: "SasiKumar Edits" },
    { img: core, name: "Olir Media Core" },
    { img: avis, name: "Avis Media" },
    { img: sasi, name: "Focuz Technology" },
  ];

  return (
    <div className="bg-white lg:my-5 my-10 lg:py-10 px-5 w-full lg:w-[90%] h-auto flex flex-col justify-center items-center overflow-hidden rounded-md">
      <h2
        className="w-full lg:text-5xl text-2xl font-bold text-center tracking-wide lg:mb-10 py-5 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Our Sponsors & Partners
      </h2>
      <div className="w-full max-w-screen-lg mx-auto py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center gap-3 p-3 transform transition-all duration-500"
          >
            <img
              src={sponsor.img}
              alt={sponsor.name}
              className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto object-contain mb-3 hover:shadow-none"
            />
            {/* <h3 className="w-full text-sm sm:text-base lg:text-base font-semibold text-blue-500 text-center tracking-wider uppercase">
              {sponsor.name}
            </h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSlider;
