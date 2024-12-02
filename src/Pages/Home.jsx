import React from "react";
import { useEffect } from "react";
import Hero from "../Home-Components/Hero"
import About from "../Home-Components/About"
import Banner from "../Home-Components/Banner"
import Tickets from "../Home-Components/Tickets"
import Cup from "../Home-Components/Cup"
import Media from "../Home-Components/Media"
import Sponser from "../Home-Components/Sponser"
import Gallery from "../Home-Components/Gallery"
import News from "../Home-Components/News"

const Home = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full h-[500%] flex flex-col justify-center items-center " data-aos="fade-up">
      <Hero/>
      <About/>
      <Banner/>
      <Tickets/>
      <Cup/> 
      <Gallery/>
      <Media/>
      <News/>
      <Sponser/>
    </div>
  );
};

export default Home;
