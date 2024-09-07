import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';  // Import NavBar component
import About from '../components/About';    // Import About component
import CursoleLarge from '../components/CursoleLarge';  // Import CursoleLarge component
import CursoleSmall from '../components/CursoleSmall';  // Import CursoleSmall component
import Cards from '../components/Cards';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Set true if screen is less than 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Pass handleNavClick function to NavBar */}
      <NavBar onNavClick={handleNavClick} />

      <section id="home">
      {isSmallScreen ? <CursoleSmall /> : <CursoleLarge />}
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Cards/>
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <Footer/>
    </div>
  );
};

export default LandingPage;
