import React from 'react';
import './navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} alt="Adam Vajda Logo" className="logo-image" />
                </div>
                <nav className="nav-options">
                    <a href="#home">Home</a>
                    <a href="#gallery">Photo Gallery</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;