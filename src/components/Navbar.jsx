import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-100/50 w-full shadow-2xl fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between lg:justify-center items-center px-4 lg:px-12 py-4 lg:py-6 lg:flex-nowrap">

        {/* Hamburger Icon for Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-blue-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Logo for Small Screens */}
        <div className="lg:hidden">
          <img
            src="/clglogo.png"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute lg:static top-full left-0 w-full bg-red-100/50 lg:w-auto lg:flex lg:items-center lg:space-x-6 lg:bg-transparent lg:flex-nowrap ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col items-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 px-4 lg:px-0 py-4 lg:py-0">
            <Link to="/" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
              HOME
            </Link>
            <Link to="/call-for-papers" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
              CALL FOR PAPERS
            </Link>
            <Link to="/paper-submission" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
              PAPER SUBMISSION
            </Link>
            <Link to="/registration" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
              REGISTRATION
            </Link>

            {/* Logo for Large Screens */}
            <div className="hidden lg:flex">
              <img
                src="/clglogo.png"
                className="h-10 w-auto"
              />
            </div>

            <Link to="/committees" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
              COMMITTEE
            </Link>
            <Link to="/publications" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
              PUBLICATIONS
            </Link>
            <Link to="/conference-partners" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
              CONFERENCE PARTNERS
            </Link>
            <Link to="/speakers" className="text-sm text-blue-900 font-medium hover:text-red-600 transition duration-300">
              SPEAKERS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;