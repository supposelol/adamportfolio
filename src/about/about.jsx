import React from 'react';
import './about.css';
import selfie from '../assets/selfie.jpg';

const About = () => {
    return (
        <div className="about-section">
            <div className="about-content">
                <div className="about-texts">
                    <h3 className="about-title">introduction</h3>
                    <h4 className="about-header">Capturing Moments</h4>
                    <p className="about-text">
                        I am Adam Vajda, a passionate photographer and videographer. My goal is to capture the moments that tell unique stories. 
                        With years of experience in creating visual art, I aim to deliver timeless memories through my lens.
                    </p>
                    <div className="about-line"></div>
                </div>
                <div className="about-image">
                    <img src={selfie} alt="Adam Vajda" />
                </div>
            </div>
        </div>
    );
};

export default About;