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
            setCurrentImage((prevImage) => (prevImage + 1) % 4); // Change image every 3 seconds
        }, 8000);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
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

            {/* Cards (div2, div3, div4) */}
            <div className="div2">
                <div className="card">
                    <h4>Card 1 Content</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt distinctio esse aut quo sint, quia eveniet explicabo magni atque.</p>
                </div>
            </div>
            <div className="div3">
                <div className="card">
                    <h4>Card 2 Content</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt distinctio esse aut quo sint, quia eveniet explicabo magni atque.</p>
                </div>
            </div>
            <div className="div4">
                <div className="card">
                    <h4>Card 3 Content</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt distinctio esse aut quo sint, quia eveniet explicabo magni atque.</p>
                </div>
            </div>

            {/* Texts (div5, div6) */}
            <div className="div5">
                <h1>Adam Vajda</h1>
            </div>
            <div className="div6">
                <h2>Photographer & Videographer</h2>
            </div>
        </div>
    );
}

export default Landing;