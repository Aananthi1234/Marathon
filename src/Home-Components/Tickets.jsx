import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import cup from "../assets/cup.png"
import { FaMedal } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";
import { PiTShirtFill } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { GiBowlOfRice } from "react-icons/gi";

const Tickets = () => {
  const icons = [
    { id: 1, icon: <LiaCertificateSolid />, text: "CERTIFICATE" },
    { id: 2, icon: <FaMedal />, text: "MEDAL" },
    { id: 3, icon: <GiTakeMyMoney />, text: "PRICE AMOUNT" },
  ];
  const icons1 = [
    { id: 1, icon: <BsFillHouseFill />, text: "ACCOMDATION" },
    { id: 2, icon: <PiTShirtFill />, text: "T-SHIRT" },
    { id: 3, icon: <GiCoffeeCup />, text: "REFRESHMENTS" },
    { id: 4, icon: <GiBowlOfRice />, text: "FOOD" },
  ];

  return (
    <>
      <div className="w-full h-auto container mx-auto lg:py-20 py-10">

        <div className="w-full lg:h-[500px] flex lg:flex-row flex-col items-center justify-center gap-10 lg:px-10 px-5">
          {/* Ticket 1 */}

          <div className="flex flex-col items-center justify-center hover:scale-[1.05] transform transition-all duration-500">
            <div className="border-[1px] hover:border-2 border-green-300 text-center shadow-xl hover:shadow-2xl w-[350px] h-[400px] rounded-lg lg:py-10">
              <h2
                className="lg:text-4xl text-2xl font-extrabold tracking-wider lg:px-10 lg:py-7 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white my-5 text-center"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
              >
                FREE
              </h2>
              <p className="tracking-wider">
                <ul className="lg:text-lg font-medium text-gray-600  tracking-wider gap-2 flex flex-col justify-center items-center py-5 lg:px-10 px-5">
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-lg text-orange-400 font-bold" />
                    Coffee & Tea
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-lg text-orange-400 font-bold" />
                    Refreshments
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-lg text-orange-400 font-bold" />
                    Free Accommodation
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-lg text-orange-400 font-bold" />
                    Free food
                  </li>
                </ul>
              </p>
            </div>
            <button className="-translate-y-7 lg:px-20 px-5 lg:py-2 py-1 border-2 border-green-500 bg-green-500 text-white font-semibold hover:bg-green-400  duration-500 transform transition-all  tracking-wide rounded-full flex items-center justify-center gap-2">
              BOOK NOW <FaArrowRightLong />
            </button>
          </div>

          {/* Ticket 2 */}

          <div className="flex flex-col items-center justify-center hover:scale-[1.05] transform transition-all duration-500">
            <div className="border-[1px] hover:border-2 border-red-300 text-center  shadow-xl hover:shadow-2xl  w-[350px] h-[450px] rounded-lg lg:py-8">
              <h1
                className="lg:text-2xl text-xl  font-extrabold text-primary tracking-wider uppercase"
                // style={{ textShadow: "2px px 2px rgba(0,0,0,0.7)" }}
              >
                Registration Fees
              </h1>
              <p className="tracking-wider">
                <h2
                  className="lg:text-4xl text-2xl font-extrabold tracking-wider lg:px-10 lg:py-7 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white my-5 text-center"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
                >
                  Rs.100
                </h2>
                <h2 className="lg:text-lg font-medium text-gray-600 px-5 py-3">
                  The same registration fees apply to both boys and girls.{" "}
                </h2>
                <h2 className="lg:text-base font-medium text-gray-600 px-5 py-3">
                  All participants will receive finisher’s medals, and winners
                  will take home trophies and special prizes.
                </h2>
              </p>
            </div>
            <button className="-translate-y-7 lg:px-20 px-5 lg:py-2 py-1 border-2 border-red-500 bg-red-500 text-white font-semibold hover:bg-red-400  duration-500 transform transition-all tracking-wide rounded-full flex items-center justify-center gap-2">
              BOOK NOW <FaArrowRightLong />
            </button>
          </div>

          {/* Ticket 3 */}
          <div className=" flex flex-col items-center justify-center hover:scale-[1.05] transform transition-all duration-500">
            <div className="border-[1px] hover:border-2 border-blue-300 text-center  shadow-xl hover:shadow-2xl w-[350px] h-[400px] rounded-lg lg:py-10">
              <h2
                className="lg:text-4xl text-2xl font-extrabold tracking-wider lg:px-10 lg:py-7 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white my-5 text-center"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
              >
                FREE
              </h2>
              <p className="tracking-wider">
                <ul className="lg:text-lg font-medium text-gray-600  tracking-wider gap-2 flex flex-col justify-center items-center py-5 lg:px-10 px-5">
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-lg text-orange-400 font-bold" />
                    Certificates
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-lg text-orange-400 font-bold" />
                    Medals
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-lg text-orange-400 font-bold" />
                    Winning price amount
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-lg text-orange-400 font-bold" />
                    Free T-shirt
                  </li>
                </ul>
              </p>
            </div>
            <button className="-translate-y-7 lg:px-20 px-5 lg:py-2 py-1 border-2 border-blue-500 bg-blue-500 text-white font-semibold hover:bg-blue-400 duration-500 transform transition-all  tracking-wide rounded-full flex items-center justify-center gap-2">
              BOOK NOW <FaArrowRightLong />
            </button>
          </div>
        </div>
 
        <img src={cup} alt="" className="w-[30%] h-auto p-5 mx-auto"/>

        <div className="w-[80%] h-auto p-5 mx-auto flex flex-col items-center justify-center gap-20 lg:py-10 py-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-20 lg:pt-5 ">
            {icons.map((choose, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-center items-center  h-auto rounded-lg "
              >
                <h2 className="w-20 h-20 object-cover p-2 rounded-lg shadow-lg border-2 border-white transition-all transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl  bg-gradient-to-r from-orange-400 via-red-400 to-pink-400  flex justify-center items-center">
                  <p className="text-4xl text-white font-extrabold p-1">
                    {choose.icon}
                  </p>
                </h2>
                <p className="text-lg font-semibold text-gray-500 mt-3 tracking-wider">
                  {choose.text}
                </p>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-20 ">
            {icons1.map((choose1, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-center items-center  h-auto rounded-lg"
              >
                <h2 className="w-20 h-20 object-cover p-2 rounded-lg shadow-lg border-2 border-white transition-all transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl bg-gradient-to-r from-orange-400 via-red-400 to-pink-400   flex justify-center items-center">
                  <p className="text-4xl text-white  font-extrabold p-1">
                    {choose1.icon}
                  </p>
                </h2>
                <p className="text-lg font-semibold text-gray-500 mt-3 tracking-wider">
                  {choose1.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;

{
  /* <img src={offer} alt="offer" className="w-28 h-28 translate-y-16 -translate-x-36 flex justify-start items-center" /> */
}
