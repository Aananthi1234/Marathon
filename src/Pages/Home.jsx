import React from "react";
import { useEffect } from "react";
import Hero from "../Home-Components/Hero"
import About from "../Home-Components/About"
import Banner from "../Home-Components/Banner"
import Tickets from "../Home-Components/Tickets"
import Cup from "../Home-Components/Cup"
import Sponsers from "../Home-Components/Sponsers"
import Gallery from "../Home-Components/Gallery"

const Home = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full h-[500%] flex flex-col justify-center items-center " data-aos="fade-up" >
      <Hero/>
      <About/>
      <Banner/>
      <Tickets/>
      <Cup/>
      <Sponsers/>
      <Gallery/>
    </div>
  );
};

export default Home;
