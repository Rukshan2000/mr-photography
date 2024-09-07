import React from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/background.jpg'; // Adjust the path as needed

const About = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden text-gray-200 bg-center bg-cover">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <motion.div
          className="max-w-3xl px-6 py-12 mx-auto text-center rounded-lg shadow-lg bg-opacity-70"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h2 className="mb-6 font-serif text-4xl font-bold" style={{ color: '#4E342E' }}>About Mr. Photography</h2>
          <p className="mb-6 font-serif text-lg" style={{ color: '#4E342E' }}>
            Welcome to Mr. Photography! We specialize in capturing timeless moments with a classic touch. Our photography reflects a passion for the vintage aesthetic, combining traditional techniques with modern artistry. Explore our gallery to see our unique approach to creating beautiful, enduring images.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
