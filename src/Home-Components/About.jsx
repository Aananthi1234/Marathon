import React from 'react';
import megamarathon from "../assets/megamarathon.avif"
import mega from "../assets/mega.jpg"

const About = () => {
  return (
    <>
      <div className="w-full flex lg:flex-row flex-col justify-center items-center lg:mt-20 lg:px-20 px-10 lg:gap-20 gap-10">
        {/* Left Box Container */}
        <div className="w-full lg:w-1/2 relative h-screen text-center p-5">
          {/* Box 1 */}
          <div
            className="absolute lg:w-[400px] h-[400px] border-[1px] border-red-600 text-white rounded-lg shadow-lg"
            style={{ top: '0px', left: 0 }}
          ><img src={mega} alt="vagarai"  className='h-[400px] rounded-lg object-cover'/></div>

          {/* Box 2 with a slight offset */}
          <div
            className="absolute lg:w-[400px] h-[400px] border-[1px] border-emerald-600 text-white rounded-lg shadow-lg"
            style={{ top: '150px', left: '200px' }}
          ><img src={megamarathon} alt="vagarai-marathon" className='rounded-lg object-cover'/></div>
        </div>

        {/* Right Box Container */}
        <div className="w-full lg:w-1/2 h-screen p-5">
          <h2 className='lg:text-4xl text-2xl font-bold text-primary tracking-wide uppercase'>Vagarai Mega <span className='text-secondary'>Marathon</span></h2>
          <p className='lg:text-lg text-base font-medium text-gray-700 tracking-wide lg:py-5 leading-relaxed'>Join us for the Mega Marathon in Vagarai, Palani District on January 16, 2025! A celebration of community, health, and the joy of running! We invite participants of all ages and skill levels to experience the scenic beauty of our village while promoting fitness and camaraderie.</p>
          <p className='lg:text-lg text-base font-medium text-gray-700 tracking-wide lg:py-4 leading-relaxed'> This annual event brings together runners from across the region to promote health, fitness, and community spirit. Whether you're an experienced marathoner or a first-time runner, our event is designed for participants of all levels. Together, let's make strides towards a healthier lifestyle!</p>
          <button className="lg:px-20 px-10 lg:py-2 py-1 my-5 border-2 border-primary font-semibold bg-primary hover:bg-transparent hover:text-primary duration-500 transform transition-all text-white tracking-wide rounded-xl shadow-lg">
            BOOK NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
