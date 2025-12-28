import React, { useState, useEffect } from "react";
import vagaraimarathon from "../assets/vg.png";


const Hero = () => {


  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-auto flex flex-col justify-center items-center">

        <img src={vagaraimarathon} alt="Vagarai Marathon Banner" className="w-full h-auto object-cover" />


        <a href="https://forms.gle/emEx2N2AAssu6MHt9" target="_blank" className="w-full sm:w-auto mt-4 sm:mt-10 px-4">
          <button className="bg-green-700 text-white px-4 sm:px-10 py-2 font-bold rounded-md text-sm sm:text-lg hover:bg-green-600 w-full sm:w-auto mx-auto">
            Register Now
          </button>
        </a>
      </div>


    </>
  );
};

export default Hero;
