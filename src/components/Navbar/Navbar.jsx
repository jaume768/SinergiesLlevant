import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-header">
                <div className="navbar-logo">
                    <a href="#home">
                        <img src="/images/logo.png" alt="JP Koler Logo" />
                    </a>
                </div>
                <button
                    className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={handleToggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </button>
            </div>
            <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" onClick={handleLinkClick}>Inici</a>
                <span className="separator">•</span>
                <a href="#about" onClick={handleLinkClick}>Qui Som?</a>
                <span className="separator">•</span>
                <a href="#services" onClick={handleLinkClick}>Serveis</a>
                <span className="separator">•</span>
                <a href="#mision-vision" onClick={handleLinkClick}>Misió i Visió</a>
                <span className="separator">•</span>
                <a href="#objectius" onClick={handleLinkClick}>Objectius</a>
                <span className="separator">•</span>
                <a href="#avantatges" onClick={handleLinkClick}>Avantatges</a>
                <span className="separator">•</span>
                <a href="#contact" onClick={handleLinkClick}>Contacte</a>
            </nav>
        </header>
    );
};

export default Navbar;