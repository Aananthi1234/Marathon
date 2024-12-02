import React, { useState, useEffect } from "react";
import vagaraimarathon from "../assets/vagaraimarathon.jpg";
import mega from "../assets/mega.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-01-16T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const timeRemaining = targetDate - now;

      // Calculate time components
      const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeLeft(`${months}m - ${days}d - ${hours}h - ${minutes}m - ${seconds}s`);
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[600px]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url(${vagaraimarathon})`,
          }}
        ></div>
        <div className="relative w-full h-full flex flex-col justify-center items-center p-4">
          <h1
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 tracking-wide p-3 rounded-md shadow-lg text-center"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
          Vagarai Pasumai Marathon
          </h1>
        </div>
      </div>

      {/* Countdown Section */}
      <div
        className="md:w-11/12 lg:w-3/4 xl:w-2/3  my-8 mx-3 sm:mx-4 p-5 lg:py-8 flex flex-col justify-center items-center text-white shadow-lg rounded-lg border-2 border-em bg-cover bg-center"
        style={{
          backgroundImage: `url(${mega})`,
          opacity: 0.8,
        }}
      >
        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide font-mono text-secondary text-center"
          style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}
        >
          Ready, Set, Go! Countdown to the Mega Marathon!
        </h1>
        <p
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-center mt-4"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          {timeLeft}
        </p>
      </div>
    </>
  );
};

export default Hero;
