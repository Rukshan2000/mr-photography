import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import bgImage from '../assets/nav-bg.jpg'; // Import the background image

const Footer = () => {
  return (
    <footer
      className="relative py-8 text-gray-200 bg-center bg-cover bg-opacity-90 backdrop-filter backdrop-blur-lg"
      style={{ backgroundImage: `url(${bgImage})` }} // Apply the background image
    >
      {/* White opacity overlay */}
      <div className="absolute inset-0 bg-[#5b4a40] bg-opacity-70" /> {/* Adjust opacity as needed */}

      <div className="relative z-10 flex flex-col max-w-screen-xl px-4 mx-auto md:flex-row md:justify-between">
        {/* Left-aligned Contact Information */}
        <div className="flex-1 mb-6 text-center md:text-left md:mb-0">
          <h3 className="mb-2 font-serif text-2xl text-white">Contact</h3>
          <p className="mb-1 text-lg text-white">rukshantharindu@gmail.com</p>
          <p className="text-lg text-white">+94779054385</p>
        </div>

        <div className="flex-1 mb-6 text-center">
          <p className="mb-2 font-serif text-lg text-white">MR Photography</p>
        </div>

        {/* Right-aligned Social Media Icons */}
        <div className="flex-1 mb-6 text-center md:text-right md:mb-0">
          <p className="mb-2 text-lg text-white">Follow us</p>
          <div className="flex justify-center space-x-4 md:justify-end">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom-aligned Copyright Information */}
      <div className="relative z-10 max-w-screen-xl px-4 mx-auto mt-8 text-center">
        <p className="font-serif text-sm text-gray-300">
          Copyright © 2024 Mr. Photography. Design + Code by Rukshan Tharindu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
