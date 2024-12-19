import React from "react";
import sport from "../assets/sport.jpg";
import run from "../assets/run.png";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center lg:my-0 my-20 "
      style={{
        backgroundImage: `url(${sport})`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-70"></div>

      {/* Content container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative px-5 lg:px-10 py-5 lg:py-0 lg:w-[95%] max-w-5xl lg:h-[400px] bg-gradient-to-r from-white via-rose-50 to-blue-50  lg:p-10 rounded-xl shadow-lg flex flex-col lg:flex-row items-center gap-6 lg:border-2 lg:border-secondary">
          {/* Left image */}
          <img
            src={run}
            alt="run"
            className="w-full lg:w-[40%] h-auto sm:h-40 lg:h-60 object-contain"
          />
         <section className="w-[25%] h-auto border-2 border-secondary lg:block hidden"></section>
          {/* Right text section */}
          <section className="w-full  lg:w-[100%] sm:p-5 p-3 rounded-lg bg-white shadow-lg text-gray-700 border-2 border-primary leading-relaxed">
            <h2 className="text-sm sm:text-xl lg:text-3xl font-bold r uppercase text-secondary pb-3" style={{ textShadow: "2px 2px 2px rgba(248,249,240,0.7)" }}>
              Marathon Details
            </h2>
            <div className="flex items-center gap-2 ">
              <h2 className="text-sm sm:text-medium lg:text-xl font-medium ">
                Location :
              </h2>
              <p className="text-sm sm:text-medium  lg:text-xl r">
                Vagarai, Palani - 624613.
              </p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <h2 className="text-sm sm:text-medium  lg:text-xl font-medium ">
                Date :
              </h2>
              <p className="text-sm sm:text-medium  lg:text-xl r">
                January 15, 2025.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-medium  lg:text-xl font-medium ">
                Time to start :
              </h2>
              <p className="text-sm sm:text-medium  lg:text-xl r">6 AM.</p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <h2 className="text-sm sm:text-medium  lg:text-xl font-medium ">
                Registration fees :
              </h2>
              <p className="text-sm sm:text-medium  lg:text-xl r">
                Rs.100 <span className="text-sm font-semibold">(Other Disticts Only)</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-medium  lg:text-xl font-medium ">
                Distance :
              </h2>
              <p className="text-sm sm:text-medium lg:text-xl r">
                Boys (10 km) - Girls (5 km).
              </p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <h2 className="text-sm sm:text-medium  lg:text-xl font-medium ">
                Participants :
              </h2>
              <p className="text-sm sm:text-medium  lg:text-xl r">
                All age groups.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// import React from "react";
// import sport from "../assets/sport.jpg";
// import run from "../assets/run.png";

// const Banner = () => {
//   return (
//     <>
//       <div
//         className="relative w-full lg:h-[600px] object-cover "
//         style={{
//           backgroundImage: url(${sport}),
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
         
//         }}
//       >
//         {/* Apply the opacity only to a background overlay */}
//         <div className="absolute inset-0 w-full h-full bg-black opacity-70"></div>

//         <div className="absolute inset-0 w-full h-[600px] flex  justify-center items-center">
//           <p className="relative w-[90%] h-[400px]  bg-gradient-to-r from-white via-rose-50 to-blue-50 lg:p-10 p-5 rounded-xl shadow-lg flex justify-center items-center border-secondary border-2 ">
//             <img src={run} alt="run" className="w-[50%] lg:h-60 " />
//             <section className="w-1/3 h-auto border-2 border-secondary"></section>
//             <section
//               className="w-2/3 h-auto p-5 rounded-lg bg-white shadow-lg text-gray-700 border-2 border-primary leading-relaxed"
//               // style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
//             >
//               <h2 className="lg:text-3xl text-xl font-bold r uppercase text-secondary pb-3"style={{ textShadow: "2px 2px 2px rgba(248,249,240,0.7)" }}>
//                 Marathon Details
//               </h2>
//               <div className="flex items-center gap-2">
//                 <h2 className="lg:text-xl text-medium font-medium ">
//                   Location :
//                 </h2>
//                 <p className="text-xl r"> Vagarai, Palani - 624613.</p>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <h2 className="lg:text-xl text-medium font-medium ">
//                   Date :
//                 </h2>
//                 <p className="text-xl r"> January 16, 2025.</p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <h2 className="lg:text-xl text-medium font-medium ">
//                   Time to start :
//                 </h2>
//                 <p className="text-xl r"> 6 am.</p>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <h2 className="lg:text-xl text-medium font-medium ">
//                  Registration fees :
//                 </h2>
//                 <p className="text-xl r">Rs.100 Only.</p>
//               </div>
//               <div className="flex items-center gap-2 ">
//                 <h2 className="lg:text-xl text-medium font-medium ">
//                 Distance :
//                 </h2>
//                 <p className="text-xl r">Boys (10 km) - Girls (5 km).</p>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <h2 className="lg:text-xl text-medium font-medium ">
//                 Participants :
//                 </h2>
//                 <p className="text-xl r">All age group allowed.</p>
//               </div>
//             </section>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;  