import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>
                <nav className="nav-options">
                    <Link to="/">Home</Link> {/* Link to Landing (Home) */}
                    <Link to="/sampleworks">Photo Gallery</Link> {/* Link to SampleWorks */}
                    <Link to="/contact">Contact</Link> {/* Link to Contact */}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;