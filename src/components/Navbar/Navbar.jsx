import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <NavLink to="/">
                    <img src="/images/logo.png" alt="JP Koler Logo" />
                </NavLink>
            </div>
            <nav className="navbar-links">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <span className="separator">•</span>
                <NavLink to="/about" activeClassName="active">Qui Som?</NavLink>
                <span className="separator">•</span>
                <NavLink to="/objectius" activeClassName="active">Objectius</NavLink>
                <span className="separator">•</span>
                <NavLink to="/misio-visio" activeClassName="active">Misió i Visió</NavLink>
                <span className="separator">•</span>
                <NavLink to="/adventatges" activeClassName="active">Avantatges</NavLink>
                <span className="separator">•</span>
                <NavLink to="/serveis" activeClassName="active">Serveis</NavLink>
            </nav>
        </header>
    );
};

export default Navbar;