import React from "react";
import media3 from "../assets/media/media3.jpeg";
import media4 from "../assets/media/media4.jpeg";
import media7 from "../assets/media/media7.jpeg";
import media10 from "../assets/media/media10.jpeg";
import media6 from "../assets/media/media6.jpeg";
import media8 from "../assets/media/media8.jpeg";
import media11 from "../assets/media/media11.jpeg";

const SponsorsGallery = () => {
  const sponsors = [
    { img: media3, name: "Olir Media Core" },
    { img: media4, name: "Avis Media" },
    { img: media7, name: "Focuz Technology" },
    { img: media10, name: "Tech Solutions" },
    { img: media6, name: "Global Media" },
    { img: media8, name: "Innovate Group" },
    { img: media11, name: "NextGen Creatives" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-10 w-full h-auto flex flex-col justify-center items-center">
      {/* <h2
        className="w-full text-2xl sm:text-3xl lg:text-5xl font-bold text-center tracking-wide text-orange-500 py-5"
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          backgroundImage: "linear-gradient(to right, #f97316, #ec4899)",
        }}
      >
        
      </h2> */}
      <div className="w-full max-w-screen-xl px-5 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.05] transform transition-all duration-500"
          >
            <img
              src={sponsor.img}
              alt={sponsor.name}
              className="w-full h-48 sm:h-60 object-cover rounded-md border-2 border-orange-300"
            />
            {/* <h3 className="mt-4 text-lg font-semibold text-gray-700">{sponsor.name}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsGallery;
