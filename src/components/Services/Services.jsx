import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="services-section">
            <h2>Nuestros Servicios</h2>
            <div className="services-cards">
                <div className="service-card">
                    <h3>Event Production Services</h3>
                    <p>We ensure all operational details are facilitated...</p>
                    <button>Know More</button>
                </div>
                <div className="service-card">
                    <h3>Media Content Creation</h3>
                    <p>Pitch decks, press releases, advertising...</p>
                    <button>Know More</button>
                </div>
                <div className="service-card">
                    <h3>Concierge Travel Services</h3>
                    <p>Event travel from equipment to crew...</p>
                    <button>Know More</button>
                </div>
            </div>
        </section>
    );
};

export default Services;