import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full bg-white z-10 top-0 py-3 sm:py-5 flex flex-wrap justify-around items-center gap-2 ">

            <div className="flex-shrink-0 text-primary">
                <h1 className="uppercase font-bold text-sm sm:text-2xl tracking-wider">VAGARAI MARATHON
                </h1>
            </div>

            <div>
                <button className="bg-green-700 text-white px-4 sm:px-8 py-1 sm:py-2 font-bold rounded-md text-sm sm:text-lg hover:bg-green-600">
                    Register
                </button>
            </div>

        </nav>
    );
};

export default Navbar;
