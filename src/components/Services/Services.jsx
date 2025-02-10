import React from 'react';
import './Services.css';
import { useIntersection } from '../../hooks/useIntersection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faCogs, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();
    const [servicesRef, isServicesVisible] = useIntersection({
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    });
    const cards = t('services.cards', { returnObjects: true });

    return (
        <section ref={servicesRef} className={`services-section fade-in-section ${isServicesVisible ? 'fade-in-active' : ''}`}>
            <h2>{t('services.title')}</h2>
            <div className="services-cards">
                {cards.map((card, index) => {
                    let icon;
                    switch (index) {
                        case 0:
                            icon = faUsers;
                            break;
                        case 1:
                            icon = faChartLine;
                            break;
                        case 2:
                            icon = faCogs;
                            break;
                        case 3:
                            icon = faTruck;
                            break;
                        default:
                            icon = faUsers;
                    }
                    return (
                        <Link key={index} to="/Serveis-empresarials" style={{ textDecoration: 'none' }} className="service-card link-card">
                            <FontAwesomeIcon icon={icon} className="service-icon" />
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </Link>
                    );
                })}
            </div>
            <Link to="/Serveis-empresarials" style={{ textDecoration: 'none' }}>
                <button className="view-more-button">{t('services.viewMore')}</button>
            </Link>
        </section>
    );
};

export default Services;