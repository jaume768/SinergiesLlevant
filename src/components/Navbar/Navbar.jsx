import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar-header">
                <div className="navbar-logo">
                    <NavLink to="/">
                        <img src="/images/logo.png" alt="JP Koler Logo" />
                    </NavLink>
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
                <NavLink exact to="/" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Inici</NavLink>
                <span className="separator">•</span>
                <NavLink to="/about" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Qui Som?</NavLink>
                <span className="separator">•</span>
                <NavLink to="/serveis" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Serveis</NavLink>
                <span className="separator">•</span>
                <NavLink to="/misio-visio" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Misió i Visió</NavLink>
                <span className="separator">•</span>
                <NavLink to="/objectius" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Objectius</NavLink>
                <span className="separator">•</span>
                <NavLink to="/adventatges" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Avantatges</NavLink>
                <span className="separator">•</span>
                <NavLink to="/serveis" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Contacte</NavLink>
            </nav>
        </header>
    );
};

export default Navbar;