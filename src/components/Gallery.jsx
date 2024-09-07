import React from 'react';
import bgImage from '../assets/background.jpg'; // Import the background image

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
import img10 from '../mainImg/img10.jpg';

const galleryImages = [
  img1, img5, img3, img8, img2, img6, img7, img4, img9, img10,
];

const Gallery = () => {
  return (
    <section className="relative py-12 bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* White Opacity Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-60" />

      <div className="relative px-4 mx-auto max-w-7xl">
        <h2 className="mb-8 font-serif text-4xl font-bold text-center text-gray-800">Gallery</h2>
        <p className="mb-12 text-center text-gray-600">
          Explore our gallery to view a collection of captivating images showcasing various styles and moments. Each photo is selected to highlight the beauty and diversity of our work.
        </p>
        <div className="relative">
          <div className="grid grid-cols-2 gap-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-30" />
              </div>
            ))}
          </div>
          {/* Fade Effect */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="mt-8 text-center">
        <button className="px-6 py-3 font-serif text-lg text-white bg-[#5b4a40] rounded-full shadow-md hover:bg-[#4a3b2f]">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
