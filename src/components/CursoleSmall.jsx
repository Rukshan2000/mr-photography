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

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const CursoleSmall = () => {
  const [imageList] = useState([...images]); // No need for duplication on small screens
  const [duration, setDuration] = useState(30); // Longer duration to show all images

  useEffect(() => {
    const handleResize = () => {
      // Ensure it's only for small screens (below 768px)
      if (window.innerWidth < 768) {
        setDuration(30); // Scroll through all images slowly
      }
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
        animate={{ x: ['0%', `-${(imageList.length - 1) * 100}%`] }} // Scroll through all images
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: duration, // Duration set for the full scroll
        }}
      >
        {imageList.map((image, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-full" // Full width for small screens
            style={{ overflow: 'hidden' }}
            initial={{ scale: 1, rotate: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, rotate: 1, opacity: 0.9 }}
            whileTap={{ scale: 0.95, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-96" // Full height and width for small screens
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CursoleSmall;
