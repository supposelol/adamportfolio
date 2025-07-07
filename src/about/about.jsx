import React from 'react';
import './about.css';
import selfie from '../assets/selfie.jpg';
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';

const About = () => {
    return (
        <section id="About">
        <div className="about-section">
            <div className="about-content">
                <div className="about-texts">
                    <h3 className="about-title">Introduction</h3>
                    <h4 className="about-header">Hey, I'm Adam</h4>
                    <p className="about-intro">
                        I work in photography and videography. I take portraits, cover events, create drone footage, and shoot promo videos.
                        I also turn moments into social media content. I’m based in Lubbock, Texas and open to work in the area and nearby.
                         Whether it is a portrait session, a brand shoot, or a full video production, feel free to reach out.
                    </p>
                    <p className="about-links">
                        Find me on&nbsp;
                        <a href="https://instagram.com/adam22_photography" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon"><FaInstagram /></a> &nbsp;
                        <a href="https://www.facebook.com/profile.php?id=61568310343350" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon"><FaFacebook /></a> &nbsp;
                        <a href="https://tiktok.com/@vajdaadam" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-icon"><FaTiktok /></a> &nbsp;
                        <a href="https://www.youtube.com/@adamvajda1499" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon"><FaYoutube /></a>
                    </p>
                    <p className="about-email">
                         <a href="mailto:vajda.adam22@gmail.com">Vajda.adam22@gmail.com</a>
                    </p>
                    <div className="about-line"></div>
                </div>
                <div className="about-image">
                    <img src={selfie} alt="Adam Vajda" />
                </div>
            </div>
        </div>
        </section>
    );
};

export default About;