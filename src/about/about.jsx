import React from 'react';
import './about.css';
import selfie from '../assets/selfie.jpg';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about-section">
            <div className="about-content">
                <div className="about-texts">
                    <h3 className="about-title">Work with me</h3>
                    <h4 className="about-header">Hey I'm Adam</h4>
                    <p className="about-text">
                        I shoot photos, fly drones, make vlogs, and turn it all into videos on Instagram, TikTok, and YouTube.
                        I’m based in Lubbock, Texas and open to work in the area and nearby. Whether it’s a portrait shoot or a collab, feel free to reach out.
                    </p>
                    <p className="about-text">
                        🔗 Find me on&nbsp;
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a> &nbsp;
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a> &nbsp;
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
                        &nbsp;&nbsp;  📧 <a href="mailto:adam@email.com">adam@email.com</a>
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