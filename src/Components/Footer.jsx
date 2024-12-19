import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPhone } from "react-icons/fa"; // Import icons
// import ImageBG from "../assets/et-footer.png"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-gray-600 text-white relative"
      // style={{
      //     backgroundImage: `url(${ImageBG})`,
      //     backgroundSize: 'contain',
      //     backgroundBlendMode: 'blend',
      //     backgroundColor: '#455d7a',
      //     backgroundRepeat: 'no-repeat',
      //     backgroundPosition: 'center',
      // }}
    >
      <div className=" bg-gradient-to-r from-em to-emerald-600 text-white bg-opacity-80 py-8 md:py-12 border-t-4 border-green-900 backdrop-blur-[2px]">
        <div className="w-full mx-auto flex flex-col justify-center items-center px-6 text-sm sm:text-[16px]">
          {/* Clinic Overview */}
          <div
            className="w-full flex flex-col items-center tracking-wider"
            data-aos="fade-right"
          >
            <h2
              className="w-full lg:text-4xl text-2xl font-bold text-center tracking-wide bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 uppercase"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Vagarai Green Marathon
            </h2>
            <p className="text-center text-sm tracking-wider py-2">
              Vagarai(B.O),Palani(Tk),Dindugal-624613.
            </p>
          </div>

          {/* Grid for 4 Columns */}

          {/* Copyright Section */}
          <div className="text-center py-5">
            <p className="text-xs sm:text-sm ">
              <span className="text-cyan-400 ">
                &copy; {new Date().getFullYear()}{" "}
              </span>
              Vagarai Green Marathon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
