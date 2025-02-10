import React from 'react';
import './About.css';
import { useIntersection } from '../../hooks/useIntersection';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
    const [sectionRef, isVisible] = useIntersection({
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    });
    const { t } = useTranslation();

    return (
        <section
            ref={sectionRef}
            className={`about-section fade-in-section ${isVisible ? 'fade-in-active' : ''}`}
        >
            <div className="about-container">
                <div className="about-image">
                    <img src="/images/personas.webp" alt="Persones" />
                </div>
                <div className="about-text">
                    <h2>{t('about.title')}</h2>
                    <p>
                        <Trans i18nKey="about.description" />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;