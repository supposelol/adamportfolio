import React from 'react';
import { useState } from 'react';
import './sampleWorks.css';

// Import the images you want to display
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
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };
    return (
        <div className="sample-works">
            <h4 className="section-title">Photo Gallery</h4>
            <div className="works-category">
                <h3 className="category-title">Portraits</h3>
                <div className="image-grid">
                    <img src={portrait1} alt="Portrait 1" className="grid-image" onClick={() => handleImageClick(portrait1)}/>
                    <img src={portrait2} alt="Portrait 2" className="grid-image" onClick={() => handleImageClick(portrait2)} />
                    <img src={portrait3} alt="Portrait 3" className="grid-image" onClick={() => handleImageClick(portrait3)}/>
                    <img src={portrait4} alt="Portrait 4" className="grid-image" onClick={() => handleImageClick(portrait4)}/>
                    <img src={portrait5} alt="Portrait 5" className="grid-image" onClick={() => handleImageClick(portrait5)}/>
                    <img src={portrait6} alt="Portrait 6" className="grid-image" onClick={() => handleImageClick(portrait6)}/>
                    <img src={portrait7} alt="Portrait 7" className="grid-image" onClick={() => handleImageClick(portrait7)}/>
                    <img src={portrait8} alt="Portrait 8" className="grid-image" onClick={() => handleImageClick(portrait8)}/>
                    <img src={portrait9} alt="Portrait 9" className="grid-image" onClick={() => handleImageClick(portrait9)}/>
                    <img src={portrait10} alt="Portrait 10" className="grid-image" onClick={() => handleImageClick(portrait10)}/>
                    <img src={portrait11} alt="Portrait 11" className="grid-image" onClick={() => handleImageClick(portrait11)}/>
                    <img src={portrait12} alt="Portrait 12" className="grid-image" onClick={() => handleImageClick(portrait12)}/>
                    <img src={portrait13} alt="Portrait 13" className="grid-image" onClick={() => handleImageClick(portrait13)}/>
                    <img src={portrait14} alt="Portrait 14" className="grid-image" onClick={() => handleImageClick(portrait14)}/>
                    <img src={portrait15} alt="Portrait 15" className="grid-image" onClick={() => handleImageClick(portrait15)}/>
                    <img src={portrait16} alt="Portrait 16" className="grid-image" onClick={() => handleImageClick(portrait16)}/>
                </div>
            </div>

            <div className="works-category">
                <h3 className="category-title paddingtop">Other works</h3>
                <div className="image-grid">
                    <img src={work1} alt="Work 1" className="grid-image" onClick={() => handleImageClick(work1)}/>
                    <img src={work2} alt="Work 2" className="grid-image" onClick={() => handleImageClick(work2)}/>
                    <img src={work3} alt="Work 3" className="grid-image" onClick={() => handleImageClick(work3)}/>
                    <img src={work4} alt="Work 4" className="grid-image" onClick={() => handleImageClick(work4)}/>
                    <img src={work5} alt="Work 5" className="grid-image" onClick={() => handleImageClick(work5)}/>
                    <img src={work6} alt="Work 6" className="grid-image" onClick={() => handleImageClick(work6)}/>
                    <img src={work7} alt="Work 7" className="grid-image" onClick={() => handleImageClick(work7)}/>
                    <img src={work8} alt="Work 8" className="grid-image" onClick={() => handleImageClick(work8)}/>
                    <img src={work9} alt="Work 9" className="grid-image" onClick={() => handleImageClick(work9)}/>
                    <img src={work10} alt="Work 10" className="grid-image" onClick={() => handleImageClick(work10)} />
                    <img src={work11} alt="Work 11" className="grid-image" onClick={() => handleImageClick(work11)} />
                    <img src={work12} alt="Work 12" className="grid-image" onClick={() => handleImageClick(work12)} />
                    <img src={work13} alt="Work 13" className="grid-image" onClick={() => handleImageClick(work13)} />
                    <img src={work14} alt="Work 14" className="grid-image" onClick={() => handleImageClick(work14)} />
                    <img src={work15} alt="Work 15" className="grid-image" onClick={() => handleImageClick(work15)} />
                    <img src={work16} alt="Work 16" className="grid-image" onClick={() => handleImageClick(work16)} />
                </div>
            </div>
            {selectedImage && (
                <div className="image-modal" onClick={closeImage}>
                    <div className="image-modal-content">
                        <img src={selectedImage} alt="Zoomed" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SampleWorks;