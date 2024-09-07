import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NavBar from '../components/NavBar';
import background from '../assets/background.jpg';  // Change to a vintage-style background
import mainImage from '../assets/home.png';  // Replace with a relevant photography image
import galleryImage from '../assets/woman.png';  // Replace with a relevant gallery image

function Counter({ finalCount }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        if (count < finalCount) {
          setCount((prevCount) => prevCount + 1);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [count, finalCount, inView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-[#6b4f3d] font-serif"
    >
      {count}
    </motion.span>
  );
}

function Landing() {
  return (
    <motion.div
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="font-serif text-[#6b4f3d]"
    >
      <NavBar />
      <div className="container px-8 mx-auto lg:px-40">
        <main className="flex flex-col items-center justify-between py-12 lg:flex-row lg:py-20">
          <motion.div
            className="flex justify-center w-full mb-12 lg:w-1/2 lg:mb-0 lg:order-2 lg:pl-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.img
              src={mainImage}
              alt="Photography"
              className="w-full max-w-sm rounded-lg shadow-lg lg:max-w-md xl:max-w-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 lg:order-1 lg:pr-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-4xl font-bold leading-tight text-center md:text-5xl lg:text-6xl xl:text-7xl lg:text-left">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Capturing<br />
                <strong>Timeless Moments</strong><br />
              </motion.span>
              In Every Frame
            </h1>
            <p className="mt-5 text-lg text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Discover the art of photography with our vintage-inspired collections. Experience a world of <strong>beautiful moments</strong> captured just for you.
              </motion.span>
            </p>
            <div className="flex flex-wrap justify-center mt-8 space-x-4 lg:justify-start">
              <motion.button
                className="px-6 py-3 mb-2 font-bold text-white bg-[#8b5e4f] rounded-lg hover:bg-[#7a4e3e] border border-[#6b4f3d]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Explore Gallery
              </motion.button>
              <motion.button
                className="px-6 py-3 mb-2 font-bold text-gray-800 bg-[#f5f5f5] border-2 border-gray-400 rounded-lg hover:bg-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </main>

        <div className="grid grid-cols-1 py-12 mt-8 bg-[#f9f5f0] lg:grid-cols-2 lg:py-10">
          <div className="grid grid-cols-1 gap-8 p-10 bg-[#fff8f1] sm:grid-cols-3">
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold lg:text-3xl">
                <AnimatePresence>
                  <Counter finalCount={15} key="years" />
                </AnimatePresence>
                {' '} Years
              </h2>
              <p className="mt-2 text-lg font-bold text-gray-500">Years of Experience</p>
            </motion.div>
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold lg:text-3xl">
                <AnimatePresence>
                  <Counter finalCount={200} key="photos" />
                </AnimatePresence>
              </h2>
              <p className="mt-2 text-lg font-bold text-gray-500">Photos Taken</p>
            </motion.div>
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold lg:text-3xl">
                <AnimatePresence>
                  <Counter finalCount={50} key="exhibitions" />
                </AnimatePresence>
              </h2>
              <p className="mt-2 text-lg font-bold text-gray-500">Exhibitions</p>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-center p-10 bg-[#eae4d6]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.img
              src={galleryImage}
              alt="Gallery"
              className="h-24 mr-4 rounded-full w-30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <div>
              <h2 className="text-2xl font-bold lg:text-3xl">50K</h2>
              <p className="mt-2 text-lg font-bold text-gray-500">Happy Clients Worldwide</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;
