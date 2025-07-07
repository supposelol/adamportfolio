import React, { useState, useRef, useEffect } from 'react';
import './sampleworks.css';

import portrait1 from '../assets/portrait/img_2684.jpeg';
import portrait2 from '../assets/portrait/IMG_2696.jpeg';
import portrait3 from '../assets/portrait/IMG_2745.jpeg';
import portrait4 from '../assets/portrait/IMG_2751.jpeg';
import portrait5 from '../assets/portrait/IMG_2760.jpeg';
// import portrait6 from '../assets/portrait/IMG_2794.jpeg';
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
// import work11 from '../assets/IMG_2099.jpg';
import work12 from '../assets/IMG_2132.jpg';
import work13 from '../assets/carousel3.jpg';
import work14 from '../assets/carousel5.jpg';
import work15 from '../assets/carousel6.jpg';
import work16 from '../assets/carousel7.jpg';

const SampleWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [images, setImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});
  const imageRefs = useRef([]);

  const portraits = [
    portrait1, portrait2, portrait3, portrait4, portrait5,
    portrait7, portrait8, portrait9, portrait10, portrait11, portrait12,
    portrait13, portrait14, portrait15, portrait16,
  ];
  
  const works = [
    work1, work2, work3, work4, work5, work6, work7, work8,
    work9, work10, work12, work13, work14, work15, work16,
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px',
      threshold: 0.01
    });

    imageRefs.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => {
      imageRefs.current.forEach(img => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

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
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <section id="gallery">
    <div className="sample-works">
      <div className="works-category">
        <h4 className="category-title">Portraits</h4>
        <div className="image-grid">
          {portraits.map((src, index) => (
            <div key={index} className="image-container">
              <img
                ref={el => imageRefs.current[index] = el}
                data-src={src}
                alt={`Portrait ${index + 1}`}
                className={`grid-image ${loadedImages[`portrait-${index}`] ? 'loaded' : ''}`}
                loading="lazy"
                onClick={() => handleImageClick(portraits, index)}
                onLoad={() => handleImageLoad(`portrait-${index}`)}
              />
              {!loadedImages[`portrait-${index}`] && (
                <div className="image-placeholder"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="works-category">
        <h4 className="category-title">Landscape</h4>
        <div className="image-grid">
          {works.map((src, index) => (
            <div key={index} className="image-container">
              <img
                ref={el => imageRefs.current[index + portraits.length] = el}
                data-src={src}
                alt={`Work ${index + 1}`}
                className={`grid-image ${loadedImages[`work-${index}`] ? 'loaded' : ''}`}
                loading="lazy"
                onClick={() => handleImageClick(works, index)}
                onLoad={() => handleImageLoad(`work-${index}`)}
              />
              {!loadedImages[`work-${index}`] && (
                <div className="image-placeholder"></div>
              )}
            </div>
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
          </button>
        </div>
      )}
    </div>
    </section>
  );
};

export default SampleWorks;
