import React, { useState, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMenuOpen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
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

    return (
        <motion.nav
            className="sticky top-0 z-50 bg-[#f8f9fa] bg-opacity-90 border-b border-[#d4c0a1] backdrop-filter backdrop-blur-lg"
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Top Layer - Centered Logo */}
            <div className="flex items-center justify-center max-w-screen-xl p-10 mx-auto"> {/* Increased padding */}
                <a href="/" className="text-center">
                    <h1 className="text-3xl font-bold text-[#5b4a40] font-serif tracking-wide"> {/* Reduced text size */}
                        <span>MR</span> <span className="text-[#7e6c59]">Photography</span>
                    </h1>
                </a>
            </div>

            {/* Bottom Layer - Nav Links */}
            <div className="border-t border-[#d4c0a1]">
                <div className="flex flex-wrap items-center justify-center max-w-screen-xl p-4 mx-auto">
                    {/* Camera-shaped burger icon for small screens */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="flex items-center justify-center w-10 h-10 p-2 text-sm text-[#5b4a40] rounded-lg md:hidden hover:bg-[#e8ded3] focus:outline-none focus:ring-2 focus:ring-[#d4c0a1]"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <FaCamera className="w-6 h-6" />
                    </button>

                    {/* Nav Links */}
                    <motion.div
                        className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`}
                        id="navbar-cta"
                        variants={menuVariants}
                        initial="hidden"
                        animate={isMenuOpen ? 'visible' : 'hidden'}
                    >
                        <ul className="flex flex-col p-4 mt-4 font-serif font-medium border border-[#d4c0a1] rounded-lg bg-[#f8f9fa] md:p-0 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                            {['Home', 'Portfolio', 'Services', 'Gallery', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="block px-3 py-2 text-[#5b4a40] rounded md:p-0 hover:bg-[#e8ded3] md:hover:bg-transparent md:hover:text-[#7e6c59]"
                                        aria-current="page"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
};

export default NavBar;
