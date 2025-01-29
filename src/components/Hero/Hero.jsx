import React from 'react';
import './Hero.css';
import fondo from '../../assets/images/fondo2.webp';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="hero-overlay">
                <h1>COMPARTINT RECURSOS</h1>
                <h2>GARANTITZEM EL NOSTRE FUTUR EMPRESARIAL</h2>
                <button>Comença ara!</button>
            </div>
        </section>
    );
};

export default Hero;