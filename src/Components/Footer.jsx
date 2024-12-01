import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPhone, } from 'react-icons/fa'; // Import icons
// import ImageBG from "../assets/et-footer.png"


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="bg-gray-600 text-white relative"
        // style={{
        //     backgroundImage: `url(${ImageBG})`,
        //     backgroundSize: 'contain',
        //     backgroundBlendMode: 'blend',
        //     backgroundColor: '#455d7a',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center',
        // }}
        >
            <div className="bg-[#0d1340] bg-opacity-80 py-8 md:py-12 border-t-4 border-yellow-500 backdrop-blur-[2px]">
                <div className="w-full mx-auto flex flex-col justify-center items-center px-6 text-sm sm:text-[16px]">
                    {/* Clinic Overview */}
                    <div className="w-full flex flex-col items-center " data-aos="fade-right">
                        <h1 className="sm:text-2xl text-lg text-center md:text-4xl font-bold font-nunito mb-2 text-yellow-500 uppercase tracking-wider">
                        Vagarai Mega Marathon
                        </h1>
                        {/* <p className="text-center text-sm tracking-wider">
                            Description for some words
                        </p> */}
                    </div>

                    {/* Grid for 4 Columns */}
                   

                    {/* Copyright Section */}
                    <div className="text-center mt-8" >
                        <p className='text-xs sm:text-sm '>
                            <span className="text-cyan-400 ">&copy; {new Date().getFullYear()} </span>
                            Vagarai Mega Marathon 2024. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


