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
          Welcome to Mr. Photography! We are dedicated to capturing timeless moments and transforming them into beautiful memories that last a lifetime. Our expertise lies in blending classic photography techniques with a modern artistic vision to deliver stunning visuals that evoke emotion and nostalgia.

At Mr. Photography, we take pride in our commitment to the vintage aesthetic, combining traditional methods with contemporary flair to create images that are both elegant and innovative. Whether it's a special event, a family portrait, or a creative project, our approach ensures that each photograph tells a unique story with a touch of sophistication.

Explore our gallery to discover how we bring our distinctive style to life. Each image showcases our dedication to detail and passion for photography, offering a glimpse into the beautiful, enduring images we create. We invite you to experience our work and see how our classic touch can make your moments truly unforgettable.          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
