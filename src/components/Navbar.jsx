import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-100/50 w-full shadow-2xl fixed top-0 left-0 z-50 bg-or ">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">

        {/* Navigation Links on Left */}
        <div className="flex space-x-8">
          <a href="#" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
            HOME
          </a>
          <a href="/call-for-papers" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
            CALL FOR PAPERS
          </a>
          <a href="/paper-submission" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
            PAPER SUBMISSION
          </a>
          <a href="/registration" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
            REGISTRATION
          </a>
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-center">
          <img src="/clglogo.png" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links on Right */}
        <div className="flex space-x-8">
          <a href="/committees" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
            COMMITTEES
          </a>
          <a href="/publications" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
            PUBLICATIONS
          </a>
          <a href="/conference-partners" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
            CONFERENCE PARTNERS
          </a>
          <a href="/speakers" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
            SPEAKERS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
