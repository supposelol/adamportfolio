import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer>
                <div className="footer-content">
                    <div className="footer-contact">
                        <div className="footer-column-content">
                            <h4>Contact</h4>
                            <p>+36(30) 526 6840</p>
                            <p>info@tamasraczphoto.hu</p>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <div className="footer-column-content">
                            <h4>Mailing Address</h4>
                            <p>4254 Nyíradony</p>
                            <p>Galamb utca 18.</p>
                        </div>
                    </div>
                    <div className="footer-social">
                        <div className="footer-column-content">
                            <h4>Find Me Here</h4>
                            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;