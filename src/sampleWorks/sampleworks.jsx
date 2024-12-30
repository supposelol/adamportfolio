import React, { useState } from 'react';
import './sampleWorks.css';

import portrait1 from '../assets/portrait/IMG_2684.jpeg';
import portrait2 from '../assets/portrait/IMG_2696.jpeg';
import portrait3 from '../assets/portrait/IMG_2745.jpeg';
import portrait4 from '../assets/portrait/IMG_2751.jpeg';
import portrait5 from '../assets/portrait/IMG_2760.jpeg';
import portrait6 from '../assets/portrait/IMG_2794.jpeg';
import portrait7 from '../assets/portrait/IMG_2866.jpeg';
import portrait8 from '../assets/portrait/IMG_2878.jpeg';
import portrait9 from '../assets/portrait/IMG_2884.jpeg';
import portrait10 from '../assets/portrait/IMG_2902.jpeg';
import portrait11 from '../assets/portrait/IMG_2921.jpeg';
import portrait12 from '../assets/portrait/IMG_2961.jpeg';
import portrait13 from '../assets/portrait/IMG_3951.jpg';
import portrait14 from '../assets/portrait/IMG_3955.jpg';
import portrait15 from '../assets/portrait/IMG_3963.jpg';
import portrait16 from '../assets/portrait/IMG_3969.jpg';

import work1 from '../assets/IMG_0045.jpg';
import work2 from '../assets/IMG_0400.jpg';
import work3 from '../assets/IMG_0498.jpg';
import work4 from '../assets/IMG_0585.jpg';
import work5 from '../assets/IMG_1210.jpg';
import work6 from '../assets/IMG_1244.jpg';
import work7 from '../assets/IMG_1300.jpg';
import work8 from '../assets/IMG_1385.jpg';
import work9 from '../assets/IMG_1684.jpg';
import work10 from '../assets/IMG_1882.jpg';
import work11 from '../assets/IMG_2099.jpg';
import work12 from '../assets/IMG_2132.jpg';
import work13 from '../assets/carousel3.jpg';
import work14 from '../assets/carousel5.jpg';
import work15 from '../assets/carousel6.jpg';
import work16 from '../assets/carousel7.jpg';

const SampleWorks = () => {
const [currentIndex, setCurrentIndex] = useState(null);
const [images, setImages] = useState([]);

const portraits = [
    portrait1, portrait2, portrait3, portrait4, portrait5, portrait6,
    portrait7, portrait8, portrait9, portrait10, portrait11, portrait12,
    portrait13, portrait14, portrait15, portrait16,
];
  
const works = [
    work1, work2, work3, work4, work5, work6, work7, work8,
    work9, work10, work11, work12, work13, work14, work15, work16,
];

const handleImageClick = (imageArray, index) => {
    setImages(imageArray);
    setCurrentIndex(index);
};

const closeImage = () => {
    setCurrentIndex(null);
};

const handleOverlayClick = (e) => {
    const screenWidth = window.innerWidth;
    const clickPosition = e.clientX;

    if (clickPosition < screenWidth / 2) {
      // Left side click - go to the previous image
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    } else {
      // Right side click - go to the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
};

return (
    <div className="sample-works">
      <h4 className="section-title">Photo Gallery</h4>

      <div className="works-category">
        <h3 className="category-title">Portraits</h3>
        <div className="image-grid">
          {portraits.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Portrait ${index + 1}`}
              className="grid-image"
              onClick={() => handleImageClick(portraits, index)}
            />
          ))}
        </div>
      </div>

      <div className="works-category">
        <h3 className="category-title">Other works</h3>
        <div className="image-grid">
          {works.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Work ${index + 1}`}
              className="grid-image"
              onClick={() => handleImageClick(works, index)}
            />
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <div className="image-modal" onClick={handleOverlayClick}>
          <div className="image-modal-content">
            <img src={images[currentIndex]} alt="Zoomed" />
          </div>
          <button className="button" onClick={(e) => { e.stopPropagation(); closeImage(); }}>
            <span className="X"></span>
            <span className="Y"></span>
            <span className="close">Close</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SampleWorks;