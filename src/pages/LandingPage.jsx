import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';  // Import NavBar component
import About from '../components/About';    // Import About component
import CursoleLarge from '../components/CursoleLarge';  // Import CursoleLarge component
import CursoleSmall from '../components/CursoleSmall';  // Import CursoleSmall component
import Cards from '../components/Cards';
import Gallery from '../components/Gallery';

const ImageSlider = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check the screen width and update state
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Set true if screen is less than 768px
    };

    // Run on initial render and when window is resized
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Render the NavBar */}
      <NavBar />

      {/* Render CursoleLarge or CursoleSmall based on screen width */}
      {isSmallScreen ? <CursoleSmall /> : <CursoleLarge />}

      {/* Render About Section */}
      <About />
      <Cards/>
      <Gallery />
    </div>
  );
};

export default ImageSlider;
