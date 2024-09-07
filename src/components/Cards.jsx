import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCamera } from 'react-icons/fa'; // Import the camera icon
import weddingImg from '../mainImg/img11.jpg';
import coupleImg from '../mainImg/img10.jpg';
import portraitImg from '../mainImg/img9.jpg';
import eventImg from '../mainImg/img12.jpg'; // Updated to match the cardImages key
import backgroundImg from '../assets/nav-bg.jpg'; // Import the background image

const cardDetails = {
  wedding: {
    title: 'Wedding',
    description: 'Capture the magic of your special day with our elegant wedding photography. We specialize in timeless images that beautifully narrate your love story.',
  },
  couple: {
    title: 'Couple',
    description: 'Celebrate your unique bond with our couple photography sessions. We focus on capturing genuine moments and emotions, creating a collection of cherished memories.',
  },
  event: {
    title: 'Event',
    description: 'Document your special occasions with our professional event photography services. We capture every detail of your event to create lasting memories.',
  },
  portrait: {
    title: 'Portrait',
    description: 'Experience our classic portrait photography that highlights your personality. Our approach combines traditional techniques with modern artistry to create stunning, personalized portraits.',
  },
};

const cardImages = {
  wedding: weddingImg,
  couple: coupleImg,
  portrait: portraitImg,
  event: eventImg, // Updated key to match cardDetails
};

const Cards = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClosePopup = () => {
    setSelectedCategory(null);
  };

  return (
    <section className="relative py-12 bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />

      {/* White Opacity Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-65" />

      <div className="relative px-4 mx-auto max-w-7xl">
        <h2 className="mb-8 font-serif text-4xl font-bold text-center text-gray-800">Services</h2>
        <p className="mb-6 font-serif text-lg text-center" style={{ color: '#4E342E' }}>
        Discover our range of professional photography services tailored to capture your most cherished moments. Each category is designed to highlight the beauty and essence of your special occasions, from timeless wedding imagery to vibrant event captures, intimate couple sessions, and stunning portraits. Our expert photographers ensure that every moment is preserved with artistry and precision.        </p>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Object.keys(cardDetails).map((key) => (
            <motion.div
              key={key}
              className="relative overflow-hidden bg-white rounded-lg shadow-2xl cursor-pointer h-96"
              onClick={() => handleCardClick(key)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={cardImages[key]}
                alt={cardDetails[key].title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gray-900 bg-opacity-20">
                <button
                  className="flex items-center justify-center px-4 py-2 mt-4 bg-white rounded text-brown-800 opacity-70 hover:opacity-90"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents click event from propagating to the card
                    handleCardClick(key);
                  }}
                >
                  <FaCamera className="w-5 h-5 mr-2" /> {/* Camera icon */}
                  {cardDetails[key].title}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popup */}
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="relative max-w-lg p-8 mx-4 bg-white rounded-lg shadow-2xl">
              <button
                className="absolute text-2xl font-bold text-gray-600 top-4 right-4"
                onClick={handleClosePopup}
              >
                &times;
              </button>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">{cardDetails[selectedCategory].title}</h3>
              <p className="font-serif text-lg text-gray-700">{cardDetails[selectedCategory].description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
