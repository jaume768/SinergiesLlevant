import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 JP Koler. All rights reserved.</p>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">FB</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">IG</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">TW</a>
            </div>
        </footer>
    );
};

export default Footer;