import React from "react";

import partner1 from "../assets/Propartners1.jpeg"
import partner2 from "../assets/Propartners2.jpeg"
import partner3 from "../assets/Propartners3.jpeg"
import partner4 from "../assets/Propartners4.jpeg"
import partner5 from "../assets/Propartners5.jpeg"
import nammapalanikarthi from "../assets/nammapalanikarthi.jpeg"
import odc from "../assets/odc.jpeg"
// import partner6 from "../assets/Propartners5.jpeg"

const PromotionPartners = () => {
  // Dummy data for promotion partners
  const partners = [
    { id: 1, logo: "karthi", img: nammapalanikarthi },
    { id: 2, logo: "indira", img: partner5 },
    { id: 3, logo: "kattanchaya", img: partner3 },
    { id: 4, logo: "palaniofficial", img: partner4 },
    { id: 5, logo: "Partner2", img: partner2 },
    { id: 6, logo: "Partner6", img: partner1 },
    { id: 7, logo: "odc", img: odc },

  ];

  return (
    <div className="w-full pt-5">
      <div className="container mx-auto px-4">
        <h2
          className="w-full lg:text-4xl text-xl sm:text-2xl font-bold text-center tracking-wide lg:mb-10 py-5 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 uppercase"
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Our Promotion Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((pro) => (
            <div
              key={pro.id}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-md hover:scale-105 transition-transform duration-300 md:border-green-700 md:border-[1px]"
            >
              <img
                src={pro.img}
                alt={pro.logo}
                className="w-72 h-30 object-contain py-2"
              />
              {/* <h3 className="text-lg font-semibold text-gray-800">
                {pro.name}
              </h3> */}
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center py-4 overflow-hidden">
          {/* Outer container for clipping */}
          <div className="w-full relative bg-green-800 text-white py-2 rounded shadow-md">
            {/* Inner container with sliding animation */}
            <div className="flex w-full justify-center items-center whitespace-nowrap animate-slide">
              <h1 className="lg:text-3xl text-base sm:text-xl tracking-wide px-4 sm:px-10">
                Registration starts from Saturday - ( 21.12.2024 )
              </h1>
              <h1 className="lg:text-3xl text-base sm:text-xl tracking-wide px-4 sm:px-10">
                Registration starts from Saturday - ( 21.12.2024 )
              </h1>
              <h1 className="lg:text-3xl text-base sm:text-xl tracking-wide px-4 sm:px-10">
                Registration starts from Saturday - ( 21.12.2024 )
              </h1>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
};

export default PromotionPartners;
