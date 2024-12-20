import React from "react";
import partner1 from "../assets/Propartners1.jpeg"
import partner2 from "../assets/Propartners2.jpeg"
import partner3 from "../assets/Propartners3.jpeg"
import partner4 from "../assets/Propartners4.jpeg"
import partner5 from "../assets/Propartners5.jpeg"
import nammapalanikarthi from "../assets/nammapalanikarthi.jpeg"
import odc from "../assets/odc.jpeg"
import vikram from "../assets/vikram.jpeg"
import rams from "../assets/ram.jpeg"
import promotionhub from "../assets/promotionhub.jpeg"

const PromotionPartners = () => {
  // Dummy data for promotion partners
  const partners = [
    { id: 1, logo: "rams", img: rams },
    { id: 2, logo: "karthi", img: nammapalanikarthi },
    { id: 3, logo: "indira", img: partner5 },
    { id: 4, logo: "vikram", img: vikram },
    { id: 5, logo: "kattanchaya", img: partner3 },
    { id: 6, logo: "promotionhub", img: promotionhub },
    { id: 7, logo: "palaniofficial", img: partner4 },
    { id: 8, logo: "Partner2", img: partner2 },
    { id: 9, logo: "Partner6", img: partner1 },
    { id: 10, logo: "odc", img: odc },

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

      </div>

    </div>
  );
};

export default PromotionPartners;
