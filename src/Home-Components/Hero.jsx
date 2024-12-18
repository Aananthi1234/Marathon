import React, { useState, useEffect } from "react";
import vagaraimarathon from "../assets/BannerNew.png";


const Hero = () => {
  

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[600px]">
        <div
          className="absolute inset-0 w-full h-full bg-cover md:bg-center bg-right "
          style={{
            backgroundImage: `url(${vagaraimarathon})`,
          }}
        ></div>
        {/* <div className="relative w-full h-full flex flex-col justify-center items-center p-4">
          <h1
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 tracking-wide p-3 rounded-md shadow-lg text-center"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
          Vagarai Pasumai Marathon
          </h1>
        </div> */}
      </div>

     
    </>
  );
};

export default Hero;
