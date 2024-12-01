import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
// import { FaMedal } from "react-icons/fa6";
// import { LiaCertificateSolid } from "react-icons/lia";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { BsFillHouseFill } from "react-icons/bs";
// import { PiTShirtFill } from "react-icons/pi";
// import { GiCoffeeCup } from "react-icons/gi";
// import { GiBowlOfRice } from "react-icons/gi";

const Tickets = () => {


  return (
    <>
      <div className="w-full h-auto container mx-auto lg:py-20 sm:py-10 py-5 ">
        <div className="w-full lg:h-[500px] flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-5 lg:px-10 px-5">
          {/* Ticket 1 */}

          <div className="flex flex-col items-center justify-center hover:scale-[1.05] transform transition-all duration-500 ">
            <div className="border-[1px] hover:border-2 border-green-300 text-center shadow-xl hover:shadow-2xl w-[300px] sm:w-[350px] lg:h-[400px] h-[350px] rounded-lg lg:py-10 ">
              <h2
                className="lg:text-4xl text-2xl font-extrabold tracking-wider lg:px-10 lg:py-7 px-5 py-4  bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white lg:my-5 my-10 text-center"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
              >
                FREE
              </h2>
              <p className="tracking-wider">
                <ul className="lg:text-lg font-medium text-gray-600  tracking-wider gap-2 flex flex-col justify-center items-center lg:py-5 py-0 lg:px-10 px-5">
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
            <button className="-translate-y-7 lg:px-20 px-10 lg:py-2 py-2 border-2 border-green-500 bg-green-500 text-white font-semibold hover:bg-green-400  duration-500 transform transition-all  tracking-wide rounded-full flex items-center justify-center gap-2">
              BOOK NOW <FaArrowRightLong />
            </button>
          </div>

          {/* Ticket 2 */}

          <div className="flex flex-col items-center justify-center hover:scale-[1.05] transform transition-all duration-500">
            <div className="border-[1px] hover:border-2 border-red-300 text-center  shadow-xl hover:shadow-2xl w-[300px] sm:w-[350px] lg:h-[450px] h-[360px] rounded-lg lg:py-8">
              <h1
                className="lg:text-2xl text-xl  font-extrabold text-primary tracking-wider uppercase pt-3 lg:pt-0"
                // style={{ textShadow: "2px px 2px rgba(0,0,0,0.7)" }}
              >
                Registration Fees
              </h1>
              <p className="tracking-wider ">
                <h2
                  className="lg:text-4xl sm:text-2xl text-xl font-extrabold tracking-wider lg:px-10 px-5 py-4 lg:py-7 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white my-5 text-center"
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
            <button className="-translate-y-7 lg:px-20 px-10 lg:py-2 py-2 border-2 border-red-500 bg-red-500 text-white font-semibold hover:bg-red-400  duration-500 transform transition-all tracking-wide rounded-full flex items-center justify-center gap-2">
              BOOK NOW <FaArrowRightLong />
            </button>
          </div>

          {/* Ticket 3 */}
          <div className=" flex flex-col items-center justify-center hover:scale-[1.05] transform transition-all duration-500">
            <div className="border-[1px] hover:border-2 border-blue-300 text-center  shadow-xl hover:shadow-2xl  w-[300px] sm:w-[350px] lg:h-[400px] h-[350px] rounded-lg lg:py-10">
              <h2
                className="lg:text-4xl text-2xl font-extrabold tracking-wider lg:px-10 px-5 py-4 lg:py-7 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white lg:my-5 my-10 text-center"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
              >
                FREE
              </h2>
              <p className="tracking-wider">
                <ul className="lg:text-lg font-medium text-gray-600  tracking-wider gap-2 flex flex-col justify-center items-center lg:py-5 py-0 lg:px-10 px-5">
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
            <button className="-translate-y-7 lg:px-20 px-10 lg:py-2 py-2 border-2 border-blue-500 bg-blue-500 text-white font-semibold hover:bg-blue-400 duration-500 transform transition-all  tracking-wide rounded-full flex items-center justify-center gap-2">
              BOOK NOW <FaArrowRightLong />
            </button>
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
