import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importing React Icons
import Navbar from './Navbar'; // Ensure this is your updated Navbar component
import ImportantDates from './ImportantDates';

function Hero() {
    return (
        <div className="w-full h-screen bg-[url('/clg3.jpg')] bg-center bg-cover bg-no-repeat">
            {/* Nav */}
            <Navbar /> {/* This is your updated Navbar */}

            {/* Hero Content */}
            <div className="absolute top-[30%] right-1/3 transform -translate-x-1/2">
                <div className="group relative">
                    <div className="[transition:all_400ms_ease] group-hover:rotate-0 lg:w-[18rem] lg:h-[22rem] md:w-[14rem] md:h-[18rem] sm:w-[12rem] sm:h-[16rem] xs:w-[10rem] xs:h-[12rem] border-[0.4rem] border-transparent shadow-xl absolute -rotate-[10deg] origin-bottom-left">
                        <img
                            src="/clg.jpg"
                            className="w-full h-full rounded-sm"
                            alt="Frame Two"
                        />
                    </div>
                    <div className="[transition:all_400ms_ease] absolute -rotate-[10deg] last:rotate-[20deg] -top-[2rem] left-[2rem] group-hover:rotate-0 lg:w-[18rem] lg:h-[22rem] md:w-[14rem] md:h-[18rem] sm:w-[12rem] sm:h-[16rem] xs:w-[10rem] xs:h-[12rem] border-[0.4rem] border-transparent shadow-xl origin-bottom-left">
                        <img
                            src="/clg2.jpg"
                            className="w-full h-full rounded-sm"
                            alt="Frame One"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bg-gray-500/40 py-2 md:top-[45%] sm:top-[70%] xs:top-[60%] left-1/3 transform -translate-x-1/2 text-center">
                <h1 className="w-full md:px-4 xs:px-2 xl:text-5xl lg:text-4xl sm:text-3xl xs:text-2xl text-white font-serif font-semibold">
                    6th INTERNATIONAL CONFERENCE ON INFORMATION MANAGEMENT & MACHINE INTELLIGENCE
                </h1>
                <div className="flex justify-center items-center mt-2 text-white">
                    <FaCalendarAlt className="mr-2" />
                    <span className="text-lg">23rd & 24th December, 2024</span>
                </div>
                <div className="flex justify-center items-center mt-2 text-white">
                    <FaMapMarkerAlt className="mr-2" />
                    <span className="text-lg">Poornima Institute of Engineering and Technology, Sitapura, Jaipur, Rajasthan</span>
                </div>
            </div>
            {/* <ImportantDates/> */}
        </div>
    );
}

export default Hero;
