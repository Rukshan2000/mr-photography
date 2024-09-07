import React, { useState, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import bgImage from '../assets/nav-bg.jpg'; // Import the background image

const NavBar = ({ onNavClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(true); // Open menu on larger screens
            } else {
                setIsMenuOpen(false); // Close menu on smaller screens
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto', transition: { duration: 0.5, ease: 'easeOut' } }
    };

    const handleNavClick = (sectionId) => {
        onNavClick(sectionId);
        // Don't close the menu on click
    };

    return (
        <motion.nav
            className="relative sticky top-0 z-50 bg-center bg-cover bg-opacity-90 backdrop-filter backdrop-blur-lg"
            style={{ backgroundImage: `url(${bgImage})` }} // Apply the background image
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            {/* White opacity overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-70" /> {/* Adjust opacity as needed */}

            {/* Top Layer - Logo Text Left and Camera Icon Right for Small Screens */}
            <div className="relative z-10 flex items-center justify-between max-w-screen-xl p-4 mx-auto sm:p-6 md:justify-center">
                {/* Logo Text (left on small screens, centered on medium and up) */}
                <a href="/" className="text-left md:text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5b4a40] font-serif tracking-wide">
                        <span>MR</span> <span className="text-[#7e6c59]">Photography</span>
                    </h1>
                </a>

                {/* Camera Icon (only visible on small screens) */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="flex items-center justify-center w-10 h-10 p-2 text-sm text-[#5b4a40] rounded-lg md:hidden hover:bg-[#e8ded3] focus:outline-none focus:ring-2 focus:ring-[#d4c0a1]"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <FaCamera className="w-6 h-6" />
                </button>
            </div>

            {/* Bottom Layer - Nav Links */}
            <div className="relative z-10 flex flex-wrap items-center justify-center max-w-screen-xl p-2 mx-auto sm:p-4">
                <motion.div
                    className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`}
                    id="navbar-cta"
                    variants={menuVariants}
                    initial="hidden"
                    animate={isMenuOpen ? 'visible' : 'hidden'}
                >
                    <ul className="flex flex-col p-4 mt-4 font-serif font-medium border border-[#d4c0a1] rounded-lg bg-[#f8f9fa] md:p-0 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {['home', 'about', 'services', 'gallery', 'contact'].map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item}
                                    smooth={true}
                                    duration={500}
                                    className="block px-3 py-2 text-[#5b4a40] rounded md:p-0 hover:bg-[#e8ded3] md:hover:bg-transparent md:hover:text-[#7e6c59]"
                                    onClick={() => handleNavClick(item)}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default NavBar;
