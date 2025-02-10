import React from 'react';
import './Hero.css';
import fondo from '../../assets/images/fondo2.webp';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="hero" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="hero-overlay">
                <h1>{t('hero.title')}</h1>
                <h2>{t('hero.subtitle')}</h2>
                <button>{t('hero.button')}</button>
            </div>
        </section>
    );
};

export default Hero;