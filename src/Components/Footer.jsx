import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="bg-gradient-to-r from-emerald-700 to-green-600 text-white py-10 md:py-14 border-t-4 border-green-900">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Event Overview */}
          <div className="text-center mb-8">
            <h2
              className="text-3xl lg:text-5xl font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"
            >
              Vagarai Green Marathon
            </h2>
            <p className="text-sm lg:text-base mt-2">
              Vagarai(B.O), Palani(Tk), Dindugal-624613.
            </p>
          </div>

          {/* Contact Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left mb-8">
            <div className="flex flex-1 items-center justify-center md:justify-start gap-2">
              <MdLocationPin className="text-yellow-400 w-6 h-6" />
              <p className="text-base">Vagarai - 624613</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <IoMdMail className="text-yellow-400 w-6 h-6" />
              <a
                href="mailto:vagaraigreenmarathon2025@gmail.com"
                className="hover:underline text-xs sm:text-base"
              >
                vagaraigreenmarathon2025@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaSquarePhone className="text-yellow-400 w-6 h-6" />
              <p className="text-base">9751419303, 8248334301</p>
            </div>
          </div>

          {/* Social Media Links Section */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll to Top Button */}
          <div className="text-center mb-8">
            <button
              onClick={scrollToTop}
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition"
            >
              Back to Top
            </button>
          </div>

          {/* Copyright Section */}
          <div className="text-center">
            <p className="text-xs sm:text-sm">
              <span className="text-cyan-400">&copy; {new Date().getFullYear()} </span>
              Vagarai Green Marathon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
