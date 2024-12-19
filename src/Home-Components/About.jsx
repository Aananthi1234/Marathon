import React from 'react';
import megamarathon from "../assets/megamarathon.avif";
import mega from "../assets/mega.jpg";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center mb-8 lg:my-16 lg:py-5 lg:px-20 px-6 gap-10 lg:gap-20">
      {/* Left Box Container */}
      <div className="w-full lg:w-1/2 relative h-[300px] md:min-h-[600px] lg:h-[600px] text-center flex justify-center items-center ">
        {/* Box 1 */}
        <div
          className="absolute w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] border-[1px] border-red-600 text-white rounded-lg shadow-lg lg:block hidden"
          style={{ top: '0px', left: 0 }}
        >
          <img src={mega} alt="vagarai" className="h-full w-full rounded-lg object-cover" />
        </div>

        {/* Box 2 with a slight offset */}
        <div
          className="lg:absolute w-[300px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] border-[1px] border-emerald-600 text-white rounded-lg shadow-lg"
          style={{ top: '150px', left: '150px' }}
        >
          <img src={megamarathon} alt="vagarai-marathon" className="h-full w-full rounded-lg object-cover" />
        </div> 
      </div>

      {/* Right Box Container */}
      <div className="w-full lg:w-1/2 am:min-h-[400px] md:min-h-[600px] lg:min-h-[600px] sm:px-3 flex flex-col justify-center lg:text-left text-center  ">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-wide uppercase lg:text-left text-center">
         <span className='md:text-3xl'> Vagarai</span> <br /> <span className="text-secondary text-2xl md:text-3xl">Green Marathon</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 tracking-wide py-3 lg:py-5 leading-relaxed text-justify">
          Join us for the Mega Marathon in Vagarai, Palani District on January 16, 2025! A celebration of community,
          health, and the joy of running! We invite participants of all ages and skill levels to experience the scenic
          beauty of our village while promoting fitness and camaraderie.
        </p>
        <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 tracking-wide py-2 lg:py-4 leading-relaxed text-justify">
          This annual event brings together runners from across the region to promote health, fitness, and community
          spirit. Whether you're an experienced marathoner or a first-time runner, our event is designed for
          participants of all levels. Together, let's make strides towards a healthier lifestyle!
        </p>
        <button className="px-6 sm:px-10 lg:px-20 py-2 my-5 border-2 border-primary font-semibold bg-primary hover:bg-transparent hover:text-primary duration-500 transition-all text-white tracking-wide rounded-xl shadow-lg">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

export default About;
