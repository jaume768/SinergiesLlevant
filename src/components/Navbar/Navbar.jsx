import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        if (!isMobile) {
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="navbar">
            <div className="navbar-header">
                <div className="navbar-logo">
                    <HashLink smooth to="/#home">
                        <img src="/images/logo.webp" alt="JP Koler Logo" />
                    </HashLink>
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
                <HashLink smooth to="/#home" onClick={handleLinkClick}>Inici</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#about" onClick={handleLinkClick}>Qui Som?</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#services" onClick={handleLinkClick}>Serveis</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#mision-vision" onClick={handleLinkClick}>Misió i Visió</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#objectius" onClick={handleLinkClick}>Objectius</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#avantatges" onClick={handleLinkClick}>Avantatges</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#contact" onClick={handleLinkClick}>Contacte</HashLink>
            </nav>
        </header>
    );
};

export default Navbar;