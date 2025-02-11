import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { t, i18n } = useTranslation();

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

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <header className="navbar">
            <div className="navbar-header">
                <div className="navbar-logo">
                    <HashLink smooth to="/#home">
                        <img src="/images/logo.webp" alt="JP Koler Logo" />
                    </HashLink>
                </div>
                <div className="language-selector">
                    <img
                        src="/images/bandera-catalana.jpg"
                        alt="Català"
                        onClick={() => changeLanguage('ca')}
                        className={`language-icon ${i18n.language === 'ca' ? 'active' : ''}`}
                    />
                    <img
                        src="/images/bandera-española.png"
                        alt="Castellano"
                        onClick={() => changeLanguage('es')}
                        className={`language-icon ${i18n.language === 'es' ? 'active' : ''}`}
                    />
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
                <HashLink smooth to="/#home" onClick={handleLinkClick}>{t('nav.home')}</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#about" onClick={handleLinkClick}>{t('nav.about')}</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#services" onClick={handleLinkClick}>{t('nav.services')}</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#mision-vision" onClick={handleLinkClick}>{t('nav.mision')}</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#objectius" onClick={handleLinkClick}>{t('nav.objectius')}</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#avantatges" onClick={handleLinkClick}>{t('nav.avantatges')}</HashLink>
                <span className="separator">•</span>
                <HashLink smooth to="/#contact" onClick={handleLinkClick}>{t('nav.contact')}</HashLink>
            </nav>
        </header>
    );
};

export default Navbar;
