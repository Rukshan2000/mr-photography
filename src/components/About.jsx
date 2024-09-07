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
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-white bg-opacity-40">
        <motion.div
          className="max-w-3xl px-6 py-12 mx-auto text-center rounded-lg bg-opacity-70"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h2 className="mb-6 font-serif text-4xl font-bold" style={{ color: '#4E342E' }}>About Mr. Photography</h2>
          <p className="mb-6 font-serif text-lg" style={{ color: '#4E342E' }}>
          Welcome to Mr. Photography! We capture timeless moments and turn them into lasting memories. Combining classic techniques with a modern artistic vision, we deliver stunning visuals that evoke both emotion and nostalgia.

Our commitment to vintage aesthetics blends traditional methods with contemporary flair, ensuring each photograph tells a unique and sophisticated story. Whether for special events, family portraits, or creative projects, we bring a classic touch to every image.

Explore our gallery to see how our distinctive style brings your moments to life with elegance and detail.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
