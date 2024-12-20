import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Topbar = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="w-full bg-gradient-to-r from-em to-emerald-600 text-white font-medium md:px-20 text-sm tracking-wider py-2">
                    <div className="flex flex-col md:flex-row items-center xl:justify-center justify-center ">

                        {/* Left Side: Address and Email */}
                        <div className="  flex justify-center items-center md:gap-8 lg:gap-10 gap-5">
                            <div className=" hidden sm:flex items-center gap-1 text-white">
                                <MdLocationPin className="text-yellow-400 w-4 h-4 rounded-full " />
                                <a href="#" className="text-white font-medium tracking-wider text-base">
                                    Vagarai - 624613
                                </a>
                            </div>
                            <div className=" hidden lg:flex items-center gap-1 hover:text-white">
                                <IoMdMail className="text-yellow-400 w-4 h-4 rounded-full " />
                                <a href="#" className="hover:underline font-medium underline-offset-4  text-base text-white tracking-wider">
                                    vagaraimarathon@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-1 hover:text-white">
                                <FaSquarePhone className="text-yellow-400 w-4 h-4 rounded-full " />
                                <p className="text-white  tracking-widest font-medium text-xs sm:text-base">9751419303, 8248334301</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topbar;
