import React from 'react';
import cup from "../assets/cup.png";
import medal from "../assets/medal.jpg";
import { FaMedal } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";
import { PiTShirtFill } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { GiBowlOfRice } from "react-icons/gi";

const Cup = () => {
    const icons = [
        { id: 1, icon: <LiaCertificateSolid />, text: "CERTIFICATE" },
        { id: 2, icon: <FaMedal />, text: "MEDAL" },
        { id: 3, icon: <GiTakeMyMoney />, text: "PRIZE" },
    ];
    const icons1 = [
        { id: 1, icon: <BsFillHouseFill />, text: "ACCOMMODATION" },
        { id: 2, icon: <PiTShirtFill />, text: "T-SHIRT" },
        { id: 3, icon: <GiCoffeeCup />, text: "REFRESHMENTS" },
        { id: 4, icon: <GiBowlOfRice />, text: "FOOD" },
    ];

    return (
        <div className="relative w-full h-auto flex justify-center  bg-black items-center md:my-10">

            {/* Blurred Background Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center blur-md opacity-90 z-0"
                style={{
                    backgroundImage: `url(${medal})`,
                    backgroundAttachment:"fixed"
                }}
            ></div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center gap-10 w-full px-8">

                {/* Cup Image */}
                <img
                    src={cup}
                    alt="Cup"
                    className="lg:w-[30%] w-[80%] h-auto p-5 mx-auto text-5xl z-10"
                />

                {/* Icons Section */}
                <div className="w-[80%] mx-auto flex flex-col items-center lg:gap-20 gap-10 lg:pb-20 pb-10">
                    {/* First Row of Icons */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 gap-20 ">
                        {icons.map((choose, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="lg:w-20 lg:h-20 p-2 rounded-lg shadow-lg border-2 border-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 flex items-center justify-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl ">
                                    <p className="text-4xl text-white font-extrabold">{choose.icon}</p>
                                </div>
                                <p className="lg:text-lg text-sm font-semibold text-white mt-3 tracking-wider text-center"style={{textShadow:"0px 2px 2px rgba(0,0,0,0.7)"}}>{choose.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Second Row of Icons */}
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-20 gap-10">
                        {icons1.map((choose1, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="lg:w-20 lg:h-20 p-2 rounded-lg shadow-lg border-2 border-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 flex items-center justify-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                                    <p className="text-4xl text-white font-extrabold">{choose1.icon}</p>
                                </div>
                                <p className="lg:text-lg text-sm font-semibold text-white mt-3 tracking-wider"style={{textShadow:"0px 2px 2px rgba(0,0,0,0.7)"}}>{choose1.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cup;
