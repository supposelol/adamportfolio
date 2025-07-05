import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    // Smooth scroll function
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
        closeMenu();
    };

    return (
         <header className="navbar">
            <div className="navbar-container">
                <div className="logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>
                
                <nav className={`nav-options ${isActive ? 'active' : ''}`}>
                    <a 
                        href="#About" 
                        onClick={() => scrollToSection('home')}
                        className="nav-link"
                    >
                        About
                    </a>
                    <a 
                        href="#gallery" 
                        onClick={() => scrollToSection('gallery')}
                        className="nav-link"
                    >
                        Photo Gallery
                    </a>
                    <a 
                        href="#contact" 
                        onClick={() => scrollToSection('contact')}
                        className="nav-link"
                    >
                        Contact
                    </a>
                </nav>
                
                <div 
                    className={`hamburger ${isActive ? 'active' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;