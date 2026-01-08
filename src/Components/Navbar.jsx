import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white z-10 top-0 py-3 sm:py-5 flex flex-wrap justify-around items-center gap-2 ">
      <div className="flex-shrink-0 text-primary ">
        <NavLink to="/" className="">
          <h1 className="uppercase font-bold text-sm sm:text-2xl tracking-wider">
            VAGARAI MARATHON
          </h1>
          <span className="text-center font-bold text-xs sm:text-base ">
            Jan 15, 2026
          </span>
        </NavLink>
      </div>

      <div>
        {/* <a href="https://forms.gle/emEx2N2AAssu6MHt9" target="_blank">
          <button className="bg-green-700 text-white px-4 sm:px-10 py-2 font-bold rounded-md text-sm sm:text-lg hover:bg-green-600">
            Register
          </button>
        </a> */}
        <h2 className="text-xs xs:text-sm sm:text-base border p-2 rounded-md text-red-500">Registration Closed</h2>
      </div>
    </nav>
  );
};

export default Navbar;
