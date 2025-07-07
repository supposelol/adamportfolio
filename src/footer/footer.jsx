import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer>
                <div className="footer-content">
                    <div className="footer-contact">
                        <div className="footer-column-content">
                            <h4>Contact</h4>
                            <p>(806)790-8270</p>
                            <p>Vajda.adam22@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <div className="footer-column-content">
                            <h4>Mailing Address</h4>
                            <p>79382 Wolffroth </p>
                            <p>202 Sooner St.</p>
                        </div>
                    </div>
                    <div className="footer-social">
                        <div className="footer-column-content">
                            <h4>Find Me Here</h4>
                             <a href="https://instagram.com/adam22_photography" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://tiktok.com/@vajdaadam" target="_blank" rel="noopener noreferrer">Tiktok</a>
                            <a href="https://www.youtube.com/@adamvajda1499" target="_blank" rel="noopener noreferrer">YouTube</a>
                            <a href="https://www.facebook.com/profile.php?id=61568310343350" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
