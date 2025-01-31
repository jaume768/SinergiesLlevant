import React from 'react';
import './Topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-content">
                <span>
                    <FontAwesomeIcon icon={faPhone} className="icon-black icono" /> <b>+34 613 32 21 82</b>
                </span>
                <span>
                    <FontAwesomeIcon icon={faEnvelope} className="icon-black icono" /> <b>gerencia@sinergiesllevant.com</b>
                </span>
            </div>
            <div className="top-bar-social">
                <a href="https://www.facebook.com" aria-label="Facebook" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com" aria-label="Instagram" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/company/sinergies-llevant-sl/" aria-label="LinkedIn" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        </div>
    );
};

export default TopBar;
