import React, { useState, useEffect } from "react";
import * as Countdown from "countdown";  // Adjusted import statement
import vagaraimarathon from "../assets/vagaraimarathon.jpg";
import mega from "../assets/mega.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-01-16T00:00:00");

    const updateCountdown = () => {
      const timeRemaining = Countdown(targetDate);
      setTimeLeft(
        `${timeRemaining.months}m - ${timeRemaining.days}d - ${timeRemaining.hours}h - ${timeRemaining.minutes}m - ${timeRemaining.seconds}s`
      );
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="relative w-full h-[600px]">
        <div
          className="absolute inset-0 w-full h-[600px] object-contain p-5"
          style={{
            backgroundImage: `url(${vagaraimarathon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.6,
          }}
        ></div>
        <div className="relative w-full h-[120px] text-center flex flex-col justify-center items-center">
          <h1
            className="lg:text-5xl text-xl font-extrabold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white tracking-wide p-3 rounded-md"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            Welcome to the Mega Marathon
          </h1>
        </div>
      </div>

      <div
        className="lg:w-[90%] text-white flex flex-col justify-center items-center shadow-lg rounded-lg gap-6 lg:my-10 py-8 border-2 border-em"
        style={{
          backgroundImage: `url(${mega})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="text-secondary lg:text-3xl text-lg font-semibold tracking-wide font-mono"
          style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}
        >
          Ready, Set, Go! Countdown to the Mega Marathon!
        </h1>
        <p
          className="lg:text-5xl text-2xl font-bold tracking-wider"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          {timeLeft}
        </p>
      </div>
    </>
  );
};

export default Hero;
