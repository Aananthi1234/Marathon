import React from "react";
import sport from "../assets/sport.jpg";
import run from "../assets/run.png";

const Banner = () => {
  return (
    <>
      <div
        className="relative w-full lg:h-[600px] object-cover "
        style={{
          backgroundImage: `url(${sport})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Apply the opacity only to a background overlay */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-70"></div>

        <div className="absolute inset-0 w-full h-[600px] flex  justify-center items-center">
          <p className="relative w-[90%] h-[400px]  bg-gradient-to-r from-white via-rose-50 to-blue-50 lg:p-10 p-5 rounded-xl shadow-lg flex justify-center items-center border-secondary border-2 ">
            <img src={run} alt="run" className="w-[50%] lg:h-60 " />
            <section className="w-1/3 h-auto border-2 border-secondary"></section>
            <section
              className="w-2/3 h-auto p-5 rounded-lg bg-white shadow-lg text-gray-700 border-2 border-primary leading-relaxed"
              // style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            >
              <h2 className="lg:text-3xl text-xl font-bold tracking-wider uppercase text-secondary pb-3"style={{ textShadow: "2px 2px 2px rgba(248,249,240,0.7)" }}>
                Marathon Details
              </h2>
              <div className="flex items-center gap-2">
                <h2 className="lg:text-xl text-medium font-medium tracking-wide">
                  Location :
                </h2>
                <p className="text-xl tracking-wider"> Vagarai, Palani - 624613.</p>
              </div>
              <div className="flex items-center gap-2 py-2">
                <h2 className="lg:text-xl text-medium font-medium tracking-wide">
                  Date :
                </h2>
                <p className="text-xl tracking-wider"> January 16, 2025.</p>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="lg:text-xl text-medium font-medium tracking-wide">
                  Time to start :
                </h2>
                <p className="text-xl tracking-wider"> 6 am.</p>
              </div>
              <div className="flex items-center gap-2 py-2">
                <h2 className="lg:text-xl text-medium font-medium tracking-wide">
                 Registration fees :
                </h2>
                <p className="text-xl tracking-wider">Rs.100 Only.</p>
              </div>
              <div className="flex items-center gap-2 ">
                <h2 className="lg:text-xl text-medium font-medium tracking-wide">
                Distance :
                </h2>
                <p className="text-xl tracking-wider">Boys (10 km) - Girls (5 km).</p>
              </div>
              <div className="flex items-center gap-2 py-2">
                <h2 className="lg:text-xl text-medium font-medium tracking-wide">
                Participants :
                </h2>
                <p className="text-xl tracking-wider">All age group allowed.</p>
              </div>
            </section>
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
