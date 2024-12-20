import React from "react";
import megamarathon from "../assets/megamarathon.avif";
import mega from "../assets/mega.jpg";

import { NavLink } from "react-router-dom";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center sm:mb-8 lg:py-8 lg:px-20 p-6 py-8 gap-4 sm:gap-10 ">
      {/* Left Box Container */}
      <div className="w-full lg:w-1/2 relative h-[300px] md:min-h-[600px] lg:h-[600px] text-center flex justify-center items-center ">
        {/* Box 1 */}
        <div
          className="absolute w-full sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] border-[1px] border-red-600 text-white rounded-lg shadow-lg lg:block hidden"
          style={{ top: "0px", left: 0 }}
        >
          <img
            src={mega}
            alt="vagarai"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* Box 2 with a slight offset */}
        <div
          className="lg:absolute w-full px-2 sm:px-0 sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] border-[1px] border-emerald-600 text-white rounded-lg shadow-lg"
          style={{ top: "150px", left: "150px" }}
        >
          <img
            src={megamarathon}
            alt="vagarai-marathon"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Right Box Container */}
      <div className="w-full lg:w-1/2 am:min-h-[400px] md:min-h-[600px] lg:min-h-[600px] sm:px-3 flex flex-col justify-center lg:text-left text-center  -mt-5 sm:mt-0">
        <h2 className="hidden sm:block text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-wide uppercase lg:text-left text-center">
         <span className='md:text-3xl'> Vagarai</span> <br /> <span className="text-secondary text-2xl md:text-3xl">Green Marathon</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 tracking-wide py-2 sm:py-3 lg:py-5 leading-relaxed text-justify">
          Join us for the Mega Marathon in Vagarai, Palani District on January
          15, 2025 A celebration of community, health, and the joy of running!
          We invite participants of all ages and skill levels to experience the
          scenic beauty of our village while promoting fitness and camaraderie.
        </p>
        <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 tracking-wide py-2 lg:py-4 leading-relaxed text-justify">
          This annual event brings together runners from across the region to
          promote health, fitness, and community spirit. Whether you're an
          experienced marathoner or a first-time runner, our event is designed
          for participants of all levels. Together, let's make strides towards a
          healthier lifestyle!
        </p>
        <div className="flex flex-col justify-center gap-2 sm:flex-row sm:gap-4">
          <a href="https://forms.gle/emEx2N2AAssu6MHt9" target="_blank">
            <button className="w-full sm:w-auto px-6 py-2  sm:my-5 border-2 border-primary font-semibold rounded-full bg-primary hover:bg-transparent hover:text-primary duration-500 transition-all text-white tracking-wide shadow-lg text-sm sm:text-lg">
              Register Now
            </button>
          </a>
          <NavLink
            to="/terms"
            onClick={scrollToTop}
            className="w-full sm:w-auto py-2 px-4 sm:my-5 font-semibold bg-gray-300 hover:bg-transparent hover:text-gray-300 duration-500 transition-all rounded-full text-gray-700 tracking-wide shadow-lg flex justify-center items-center text-sm sm:text-lg"
          >
            Terms & Conditions
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
