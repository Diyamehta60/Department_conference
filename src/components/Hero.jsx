import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importing React Icons

function Hero() {
    return (
        <div className="w-full h-screen bg-[url('/frontend.jpg')] bg-center bg-cover bg-no-repeat flex items-center justify-center">

            {/* Left Logo */}
            <div className="absolute left-[15%] top-1/6 transform -translate-y-1/2">
                <img src="/img10.png" alt="Left Logo" className="w-50 h-28" />
            </div>


            {/* Center Content */}
            <div className="absolute bg-red-500/40 py-4 px-8 md:top-[45%] sm:top-[60%] left-1/2 transform -translate-x-1/2 text-center rounded-lg">
                <h1 className="font-heading text-4xl text-white font-extrabold leading-tight">Welcome to the</h1>
                <h1 className="font-heading text-3xl text-white text-center font-light leading-tight">
                    <span className='font-bold text-4xl text-white'>1<sup>st</sup></span>
                    International Conference on Networked Computing and Data Analytics (ICNCDA-2025)
                </h1>
                <div className="flex justify-center items-center mt-4 text-white">
                    <FaCalendarAlt className="mr-2" />
                    <span className="font-body text-lg">
                        4th & 5th May, 2025
                    </span>
                </div>
                <h2 className="font-body text-lg text-white">
                    Department of Computer Engineering
                </h2>
                <div className="flex justify-center items-center mt-2 text-white">
                    <FaMapMarkerAlt className="mr-2" />
                    <span className="font-body text-lg">
                        Poornima Institute of Engineering and Technology, Sitapura, Jaipur, Rajasthan
                    </span>
                </div>
            </div>
            

            {/* Right Logo */}
            <div className="absolute right-[2%] top-1/6 transform -translate-y-1/2">
                <img src="/img4.png" alt="Right Logo" className="w-50 h-28" />
            </div>

        </div>
    );
}

export default Hero;