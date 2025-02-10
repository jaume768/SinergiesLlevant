import React from 'react';
import './MisionVision.css';
import { useIntersection } from '../../hooks/useIntersection';
import { useTranslation } from 'react-i18next';

const MisionVision = () => {
    const { t } = useTranslation();
    const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });

    return (
        <div ref={sectionRef} className={`mision-vision-container fade-in-section ${isVisible ? 'fade-in-active' : ''}`}>
            <div className="mision-block">
                <h2>{t('misionVision.misionTitle')}</h2>
                <p>{t('misionVision.misionText')}</p>
            </div>
            <div className="vision-block">
                <h2>{t('misionVision.visionTitle')}</h2>
                <p>{t('misionVision.visionText')}</p>
            </div>
        </div>
    );
};

export default MisionVision;