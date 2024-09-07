import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define image paths
import img1 from '../mainImg/img1.jpg';
import img2 from '../mainImg/img2.jpg';
import img3 from '../mainImg/img3.jpg';
import img4 from '../mainImg/img4.jpg';
import img5 from '../mainImg/img5.jpg';
import img6 from '../mainImg/img6.jpg';
import img7 from '../mainImg/img7.jpg';
import img8 from '../mainImg/img8.jpg';
import img9 from '../mainImg/img9.jpg';

const images = [
  img1, img5, img3, img8, img2, img6, img7, img4, img9,
];

const CursoleLarge = () => {
  const [imageList] = useState([...images, ...images]); // Duplicate for continuous scroll
  const [duration, setDuration] = useState(10); // Default duration

  useEffect(() => {
    const handleResize = () => {
      setDuration(window.innerWidth < 768 ? 5 : 10); // Set duration based on screen width
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-50%'] }} // Scroll the entire list of images
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: duration, // Apply dynamic duration
        }}
      >
        {imageList.map((image, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 h-82 w-96" // Adjusted height and width
            style={{ overflow: 'hidden' }}
            initial={{ scale: 1, rotate: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, rotate: 1, opacity: 0.9 }}
            whileTap={{ scale: 0.95, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CursoleLarge;
