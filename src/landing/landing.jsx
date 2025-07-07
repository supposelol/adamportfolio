import React, { useState, useEffect } from 'react';
import "./landing.css";
import carousel1 from '../assets/carousel/carousel1.jpg';
import carousel2 from '../assets/carousel/carousel2.jpg';
import carousel3 from '../assets/carousel/carousel3.jpg';
import carousel4 from '../assets/carousel/carousel4.jpg';

const Landing = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % 4); // Change image every 8 seconds
        }, 8000);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <section id="home">
        <div className="parent">
            {/* Carousel Images (div1) */}
            <div className="div1">
                <img src={carousel2} className='carousel-image'></img>
                <img
                    src={carousel1}
                    alt="Image 1"
                    className={`carousel-image ${currentImage === 0 ? 'active' : ''}`}
                />
                <img
                    src={carousel2}
                    alt="Image 2"
                    className={`carousel-image ${currentImage === 1 ? 'active' : ''}`}
                />
                <img
                    src={carousel3}
                    alt="Image 3"
                    className={`carousel-image ${currentImage === 2 ? 'active' : ''}`}
                />
                <img
                    src={carousel4}
                    alt="Image 4"
                    className={`carousel-image ${currentImage === 3 ? 'active' : ''}`}
                />
            </div>

            {/* Texts (div5, div6) */}
            <div className="div5">
                <h1>Adam Vajda</h1>
            </div>
            <div className="div6">
                <h2>Photographer & Videographer</h2>
            </div>

            {/* Cards Container - New wrapper for the cards */}
            <div className="cards-container">
                <div className="card">
                    <h5>Photography</h5>
                    <p>
                        This is the field in which I currently have the most experience,
                        so I can confidently say that I can find a solution for anything, no matter what photography topic it is.
                    </p>
                </div>
                <div className="card">
                    <h5>Videography</h5>
                    <p>
                        Just like with photography, this is a field where the final result and the feedback after delivering the work matter the most.
                    </p>
                </div>
                <div className="card">
                    <h5>Vlog</h5>
                    <p>
                        I make travel vlogs across the US, mixing real-life moments with creative shots.
                        Road trips, good energy and no phoniness.
                    </p>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Landing;