import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white w-full">
      <div className="container mx-auto flex flex-col items-center justify-between py-4">
        
        {/* Center logo above links */}
        <div className="mb-2">
          <img src="/clglogo.png" alt="Logo" className="h-24" /> {/* Larger logo */}
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-red-600 border border-red-600 rounded-full px-3 py-0 hover:bg-red-600 hover:text-white transition duration-300">HOME</a>
          <a href="#" className="text-red-600 border border-red-600 rounded-full px-3 py-0 hover:bg-red-600 hover:text-white transition duration-300">CALL FOR PAPERS</a>
          <a href="#" className="text-red-600 border border-red-600 rounded-full px-3 py-0 hover:bg-red-600 hover:text-white transition duration-300">PAPER SUBMISSION</a>
          <a href="#" className="text-red-600 border border-red-600 rounded-full px-3 py-0 hover:bg-red-600 hover:text-white transition duration-300">REGISTRATION</a>
          <a href="#" className="text-red-600 border border-red-600 rounded-full px-3 py-0 hover:bg-red-600 hover:text-white transition duration-300">COMMITTEES</a>
          <a href="#" className="text-red-600 border border-red-600 rounded-full px-3 py-0 hover:bg-red-600 hover:text-white transition duration-300">PUBLICATIONS</a>
          <a href="#" className="text-red-600 border border-red-600 rounded-full px-3 py-0 hover:bg-red-600 hover:text-white transition duration-300">CONFERENCE PARTNERS</a>
          <a href="#" className="text-red-600 border border-red-600 rounded-full px-3 py-0 hover:bg-red-600 hover:text-white transition duration-300">SPEAKERS</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
