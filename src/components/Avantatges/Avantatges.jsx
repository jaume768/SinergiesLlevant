import React from 'react';
import './Avantatges.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faHandshake, faGavel, faUserGraduate, faNetworkWired, faEye } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Avantatges = () => {
    const { t } = useTranslation();
    const icons = [faBoxOpen, faHandshake, faGavel, faUserGraduate, faNetworkWired, faEye];
    const items = t('avantatges.items', { returnObjects: true });

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <section ref={ref} className={`avantatges-progress-steps ${inView ? 'visible' : ''}`}>
            <h2>{t('avantatges.title')}</h2>
            <div className="steps-container">
                {items.map((item, index) => (
                    <div key={index} className="step-item visible">
                        <div className="step-indicator">
                            <span className="step-number">{index + 1}</span>
                            <FontAwesomeIcon icon={icons[index]} className="step-icon" />
                        </div>
                        <div className="step-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Avantatges;