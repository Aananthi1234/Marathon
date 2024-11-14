import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img6 from "../assets/img6.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";
import img15 from "../assets/img15.jpeg";
import img5 from "../assets/img5.jpeg";
import marathon from "../assets/marathon.png";

const Gallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img6,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img5,
  ];

  return (
    <>
      <div className="w-full h-auto container mx-auto p-4">
        <div className="flex justify-start items-center border-b-2 border-b-red-400 rounded-l-lg border-opacity-75 gap-4 ">
          <h2 className="lg:w-16 lg:h-16  bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-s-lg"></h2>
          <h2
            className="lg:text-4xl text-3xl p-1 font-bold tracking-wide bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"
            style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Gallery
          </h2>
          <div className="w-full flex  justify-end items-end bg-white opacity-75 lg:px-20 gap-5">
            <img
              src={marathon}
              alt=""
              className="w-24 h-20 object-cover z-10 p-1"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5 lg:pt-10 pt-5 ">
          {images.map((image, index) => (
            <div key={index} className="w-full h-auto rounded-lg">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full lg:h-60 h-40 object-cover p-2 rounded-lg shadow-lg border-[1px] border-orange-500 transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-red-500"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
