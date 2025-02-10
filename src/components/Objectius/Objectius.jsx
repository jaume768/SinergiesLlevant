import React from 'react';
import './Objectius.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faChartLine, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useIntersection } from '../../hooks/useIntersection';
import { useTranslation } from 'react-i18next';

const Objectius = () => {
    const { t } = useTranslation();
    const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });
    const items = t('objectius.items', { returnObjects: true });

    return (
        <section ref={sectionRef} className={`objectius-section fade-in-section ${isVisible ? 'fade-in-active' : ''}`}>
            <h2 className="objectius-title">{t('objectius.title')}</h2>
            <div className="objectius-grid">
                {items.map((item, index) => {
                    let icon;
                    switch (index) {
                        case 0:
                            icon = faHandshake;
                            break;
                        case 1:
                            icon = faChartLine;
                            break;
                        case 2:
                            icon = faLeaf;
                            break;
                        default:
                            icon = faHandshake;
                    }
                    return (
                        <div className="objectiu-card" key={index}>
                            <FontAwesomeIcon icon={icon} className="objectiu-icon" />
                            <h3 className="objectiu-title-card">{item.title}</h3>
                            <p className="objectiu-text">{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Objectius;